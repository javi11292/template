import { spawn } from 'child_process';
import { config } from 'dotenv';

config();

spawn('tsc -b jsconfig.json -w', { shell: true });

spawn('nodemon -w lib lib/index', { shell: true, stdio: 'inherit' });
