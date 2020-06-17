# s3-latency

Test S3 latency over multiple regions. Test and print average of 10 PUT, GET, DELETE requests of 1KB, 10KB, 1MB, 10MB files.

[![asciicast](https://asciinema.org/a/FG6GU7keMoclniT1ULm441YuW.png)](https://asciinema.org/a/FG6GU7keMoclniT1ULm441YuW)

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
> Test 1KB
- PUT
  - ap-south-1 806.8ms
  - ap-northeast-2 47.2ms
  - ap-southeast-1 556.4ms
  - ap-southeast-2 774.7ms
  - ap-northeast-1 217.6ms
  - ca-central-1 947.4ms
  - eu-central-1 1373.7ms
  - eu-west-1 1251.8ms
  - eu-west-2 1281.1ms
  - eu-west-3 1456.7ms
  - sa-east-1 1545.6ms
  - us-east-1 994.3ms
  - us-east-2 972.2ms
  - us-west-1 726ms
  - us-west-2 660.5ms
- GET
  - ap-south-1 632.5ms
  - ap-northeast-2 30.9ms
  - ap-southeast-1 445.7ms
  - ap-southeast-2 605.4ms
  - ap-northeast-1 163ms
  - ca-central-1 761.1ms
  - eu-central-1 1091.6ms
  - eu-west-1 992.6ms
  - eu-west-2 1017.3ms
  - eu-west-3 1112.5ms
  - sa-east-1 1221.9ms
  - us-east-1 777.5ms
  - us-east-2 762.3ms
  - us-west-1 577.7ms
  - us-west-2 532ms
- DELETE
  - ap-south-1 645.8ms
  - ap-northeast-2 25ms
  - ap-southeast-1 438.4ms
  - ap-southeast-2 622.7ms
  - ap-northeast-1 167.1ms
  - ca-central-1 769ms
  - eu-central-1 1099.6ms
  - eu-west-1 1048.8ms
  - eu-west-2 1035.7ms
  - eu-west-3 1119.3ms
  - sa-east-1 1226.4ms
  - us-east-1 780.7ms
  - us-east-2 771.2ms
  - us-west-1 574.1ms
  - us-west-2 538.3ms
> Test 10KB
- PUT
  - ap-south-1 811.9ms
  - ap-northeast-2 56ms
  - ap-southeast-1 565.2ms
  - ap-southeast-2 775.9ms
  - ap-northeast-1 228.7ms
  - ca-central-1 967.6ms
  - eu-central-1 1403.5ms
  - eu-west-1 1274.6ms
  - eu-west-2 1308.8ms
  - eu-west-3 1465.5ms
  - sa-east-1 1628.5ms
  - us-east-1 1003ms
  - us-east-2 966.1ms
  - us-west-1 779.5ms
  - us-west-2 667.4ms
- GET
  - ap-south-1 632.1ms
  - ap-northeast-2 25.3ms
  - ap-southeast-1 425.3ms
  - ap-southeast-2 612.9ms
  - ap-northeast-1 158.6ms
  - ca-central-1 753.2ms
  - eu-central-1 1088.9ms
  - eu-west-1 989.6ms
  - eu-west-2 1019ms
  - eu-west-3 1115.9ms
  - sa-east-1 1218.4ms
  - us-east-1 781.6ms
  - us-east-2 773.3ms
  - us-west-1 578.5ms
  - us-west-2 521.8ms
- DELETE
  - ap-south-1 669.9ms
  - ap-northeast-2 22.9ms
  - ap-southeast-1 443.8ms
  - ap-southeast-2 614.7ms
  - ap-northeast-1 173.1ms
  - ca-central-1 788.8ms
  - eu-central-1 1095.2ms
  - eu-west-1 992ms
  - eu-west-2 1036.3ms
  - eu-west-3 1121.4ms
  - sa-east-1 1229.2ms
  - us-east-1 803ms
  - us-east-2 806.8ms
  - us-west-1 588.2ms
  - us-west-2 543.1ms
> Test 1MB
- PUT
  - ap-south-1 1765.7ms
  - ap-northeast-2 82.2ms
  - ap-southeast-1 1233.3ms
  - ap-southeast-2 1684.2ms
  - ap-northeast-1 461.9ms
  - ca-central-1 2124.3ms
  - eu-central-1 3034.7ms
  - eu-west-1 2774.8ms
  - eu-west-2 2819.1ms
  - eu-west-3 3069.8ms
  - sa-east-1 3426.6ms
  - us-east-1 2157.9ms
  - us-east-2 3692.7ms
  - us-west-1 2842.7ms
  - us-west-2 2490.5ms
- GET
  - ap-south-1 634.6ms
  - ap-northeast-2 26.3ms
  - ap-southeast-1 434.7ms
  - ap-southeast-2 607.2ms
  - ap-northeast-1 173.5ms
  - ca-central-1 750.5ms
  - eu-central-1 1127.8ms
  - eu-west-1 1010.6ms
  - eu-west-2 1032.4ms
  - eu-west-3 1115.5ms
  - sa-east-1 1215.1ms
  - us-east-1 811.5ms
  - us-east-2 774.4ms
  - us-west-1 584.8ms
  - us-west-2 540.4ms
- DELETE
  - ap-south-1 635.2ms
  - ap-northeast-2 30.9ms
  - ap-southeast-1 439.3ms
  - ap-southeast-2 636.6ms
  - ap-northeast-1 167.7ms
  - ca-central-1 764.4ms
  - eu-central-1 1099.5ms
  - eu-west-1 994.4ms
  - eu-west-2 1025.2ms
  - eu-west-3 1112.7ms
  - sa-east-1 1230.8ms
  - us-east-1 805.5ms
  - us-east-2 774.1ms
  - us-west-1 586.7ms
  - us-west-2 537.2ms
> Test 10MB
- PUT
  - ap-south-1 2459.2ms
  - ap-northeast-2 206.2ms
  - ap-southeast-1 1631.6ms
  - ap-southeast-2 2444.6ms
  - ap-northeast-1 656.7ms
  - ca-central-1 2810.8ms
  - eu-central-1 4165.6ms
  - eu-west-1 3725.3ms
  - eu-west-2 3859.4ms
  - eu-west-3 4318.4ms
  - sa-east-1 4574ms
  - us-east-1 25371.2ms
  - us-east-2 25118.6ms
  - us-west-1 20487.7ms
  - us-west-2 16516.9ms
- GET
  - ap-south-1 639.5ms
  - ap-northeast-2 30.1ms
  - ap-southeast-1 430.1ms
  - ap-southeast-2 614.6ms
  - ap-northeast-1 198.7ms
  - ca-central-1 810.9ms
  - eu-central-1 1089.6ms
  - eu-west-1 1044ms
  - eu-west-2 1024.4ms
  - eu-west-3 1114.6ms
  - sa-east-1 1214.9ms
  - us-east-1 878.5ms
  - us-east-2 785.4ms
  - us-west-1 598.1ms
  - us-west-2 540.6ms
- DELETE
  - ap-south-1 636.5ms
  - ap-northeast-2 29ms
  - ap-southeast-1 441.5ms
  - ap-southeast-2 615.5ms
  - ap-northeast-1 202.5ms
  - ca-central-1 760.4ms
  - eu-central-1 1094.9ms
  - eu-west-1 995.5ms
  - eu-west-2 1028.4ms
  - eu-west-3 1119.5ms
  - sa-east-1 1228.7ms
  - us-east-1 867.2ms
  - us-east-2 770.3ms
  - us-west-1 579.9ms
  - us-west-2 525.9ms
```