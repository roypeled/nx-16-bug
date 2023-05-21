import { writeFileSync } from 'fs';
import * as process from 'process';

console.log('generating bar schema at generated/bar/api.txt');

writeFileSync('generated/bar/api.txt', `I am ${process.env.APP_NAME}`, {encoding: 'utf-8'})

process.exit();
