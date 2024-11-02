const { S3Client, ListObjectsCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const dotenv = require('dotenv');
dotenv.config();

const s3client = new S3Client({
    region: 'eu-north-1',
    credentials: {
        accessKeyId: process.env.accessKeyId,
        secretAccessKey: process.env.secretAccessKey,
    }

});

async function listAllObjects(params) {
    const command = new ListObjectsCommand({
        Bucket: 'dm-s3-first-bucket',
        Key: '/',
    })
    const result = await s3client.send(command);
    console.log(result);

}
listAllObjects();