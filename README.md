# s3-latency

Test S3 latency over multiple regions. Test and print average of 10 PUT, GET, DELETE requests of 1KB, 10KB, 1MB, 10MB files.

## Requirement

Node.js 10 or above.

## Usage

```bash
git clone https://github.com/crux153/s3-latency.git
cd s3-latency
npm i
npm start
```

## Configuration

Copy .env.example to .env and edit supply S3_ACCESS_KEY and S3_SECRET_KEY.

You may also provide them by environment variables.

## Test Result

ap-northeast-2, t3.micro

```

```