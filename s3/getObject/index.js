const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const dotenv = require('dotenv');
dotenv.config();
const s3client = new S3Client({
    region: 'eu-north-1',
    credentials: {
        accessKeyId: process.env.accessKeyId,
        secretAccessKey: process.env.secretAccessKey,
    }
})

async function getUrl(key) {
    const command = await new GetObjectCommand({
        Bucket: 'dm-s3-first-bucket',
        Key: key,
    })

    const url = await getSignedUrl(s3client, command);
    return url;
}

async function init() {
    const url = await getUrl('profile.png');
    console.log(url)
}
init();