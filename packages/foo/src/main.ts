import {writeFileSync} from 'fs';
import process from 'process';

console.log('generating foo schema at generated/foo/api.txt');

writeFileSync('generated/foo/api.txt', `I am ${process.env.APP_NAME}`, {encoding: 'utf-8'})

process.exit();
