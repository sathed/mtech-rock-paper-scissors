var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = (event, context) => {
    // Determine the winning choice
    // Rock loses to paper, paper loses to scissors, etc.

    // Create the object in S3
    // bucket/yourname/results.txt

    // Return the string
};
