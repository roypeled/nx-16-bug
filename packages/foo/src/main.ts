import { writeFileSync, mkdirSync } from 'fs';
import process from 'process';

console.log('generating foo schema at generated/foo/api.txt');

console.log('>>> bar', process.env.APP_NAME);
mkdirSync('generated/foo/', { recursive: true });
writeFileSync('generated/foo/api.txt', `I am ${process.env.APP_NAME}`, { encoding: 'utf-8' })

process.exit();
