const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const dotenv = require('dotenv');
dotenv.config()

const s3client = new S3Client({
    region: 'eu-north-1',
    credentials: {
        accessKeyId: process.env.accessKeyId,
        secretAccessKey: process.env.secretAccessKey,
    }
})


async function putObject(fileName, contetType) {
    const command = new PutObjectCommand({
        Bucket: 'dm-s3-first-bucket',
        Key: `images/${fileName}.jpg`,
        ContentType: contetType
    });

    const url = await getSignedUrl(s3client, command);
    return url;
}

const init = async () => {
    console.log(await putObject('profileimage', 'video/mp4'));
}

init()