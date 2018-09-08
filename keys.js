exports.aws = {
    secretAccessKey: process.env.SECRETACCESSKEY,
    accessKeyId: process.env.ACCESSID,
    region: process.env.REGION
};

exports.sql = {
    host:process.env.HOST,
    port:process.env.PORT,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
};