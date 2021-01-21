
const {PassThrough} = require('stream')
const fs = require('fs')

const passThrought = new PassThrough()

process.stdin.pipe(passThrought).pipe(process.stdout)
// .pipe(process.stdout);


// this is used to write input from command to file.txt
const ouputStream = fs.createWriteStream('file.txt')
process.stdin.pipe(ouputStream)

const inputStream = fs.createReadStream('example.txt')

inputStream.pipe(process.stdout)