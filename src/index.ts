import {
  S3Client,
  CreateBucketCommand,
  DeleteBucketCommand,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3-node";

import { v4 as uuid } from "uuid";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const REGIONS = [
  "ap-south-1",
  "ap-northeast-2",
  "ap-southeast-1",
  "ap-southeast-2",
  "ap-northeast-1",
  "ca-central-1",
  "eu-central-1",
  "eu-west-1",
  "eu-west-2",
  "eu-west-2",
  "sa-east-1",
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2",
];

const RUN = 10;
const TESTS = [
  { name: "1KB", size: 1 * 1024 },
  { name: "10KB", size: 10 * 1024 },
  { name: "1MB", size: 1 * 1024 * 1024 },
  { name: "10MB", size: 10 * 1024 * 1024 },
];

const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY || "";
const S3_SECRET_KEY = process.env.S3_SECRET_KEY || "";

interface Result {
  put: number;
  get: number;
  delete: number;
}

main();

async function main() {
  const testResult = new Map<string, Map<string, Result>>();

  for (const region of REGIONS) {
    console.log(`[+] Region: ${region}`);

    const s3 = new S3Client({
      region,
      credentials: {
        accessKeyId: S3_ACCESS_KEY,
        secretAccessKey: S3_SECRET_KEY,
      },
    });

    const bucket = uuid();

    await s3.send(
      new CreateBucketCommand({
        Bucket: bucket,
      })
    );

    const regionResult = new Map<string, Result>();

    for (const test of TESTS) {
      console.log(`[+] Test: ${test.name}`);

      const keys: string[] = [];
      const putResults: number[] = [];
      const getResults: number[] = [];
      const deleteResults: number[] = [];

      console.log(`[+] PUT`);
      for (let run = 0; run < RUN; run++) {
        const buffer = crypto.randomBytes(test.size);
        const key = uuid();

        const prev = Date.now();
        await s3.send(
          new PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: buffer,
          })
        );
        const latency = Date.now() - prev;

        keys.push(key);
        putResults.push(latency);
      }

      console.log(`[+] GET`);
      for (let run = 0; run < RUN; run++) {
        const key = keys[run];

        const prev = Date.now();
        await s3.send(
          new GetObjectCommand({
            Bucket: bucket,
            Key: key,
          })
        );
        const latency = Date.now() - prev;

        getResults.push(latency);
      }

      console.log(`[+] DELETE`);
      for (let run = 0; run < RUN; run++) {
        const key = keys[run];

        const prev = Date.now();
        await s3.send(
          new DeleteObjectCommand({
            Bucket: bucket,
            Key: key,
          })
        );
        const latency = Date.now() - prev;

        deleteResults.push(latency);
      }

      regionResult.set(test.name, {
        put: average(putResults),
        get: average(getResults),
        delete: average(deleteResults),
      });
    }

    testResult.set(region, regionResult);

    await s3.send(
      new DeleteBucketCommand({
        Bucket: bucket,
      })
    );
  }

  console.log("\n\n[+] Result");

  for (const test of TESTS) {
    console.log(`[+] Test: ${test.name}`);

    for (const method of ["put", "get", "delete"] as const) {
      console.log(`[+] ${method.toUpperCase()}`);
      for (const region of REGIONS) {
        const result = testResult.get(region)?.get(test.name)?.put || 0;
        console.log(`${region}: ${Math.round(result * 1000) / 1000}ms`);
      }
    }
  }
}

function sum(values: number[]): number {
  return values.reduce((acc, val) => acc + val, 0);
}

function average(values: number[]): number {
  return sum(values) / values.length;
}
