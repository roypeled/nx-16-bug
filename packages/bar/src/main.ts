import { writeFileSync, mkdirSync } from 'fs';
import * as process from 'process';

console.log('generating bar schema at generated/bar/api.txt');

mkdirSync('generated/bar', { recursive: true });
writeFileSync('generated/bar/api.txt', `5 I am ${process.env.APP_NAME}`, { encoding: 'utf-8' })

process.exit();
