import { writeFileSync } from 'fs';

console.log('Hello World');

writeFileSync('generated/api/api.txt', `I am ${process.env.APP_NAME}`, {encoding: 'utf-8'})
