const { S3Client, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const dotenv=require('dotenv');
dotenv.config();

const s3client = new S3Client({
    region: 'eu-north-1',
    credentials: {
        accessKeyId: process.env.accessKeyId,
        secretAccessKey: process.env.secretAccessKey,
    }
})

async function deleteoneObject() {
    const command = new DeleteObjectCommand({
        Bucket: 'dm-s3-first-bucket',
        Key: "images/profileimage.jpg"
    })

    const result=await s3client.send(command);
    console.log(result);
}
deleteoneObject()
