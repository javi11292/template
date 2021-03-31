import { spawn } from 'child_process';
import { config } from 'dotenv';

config();

spawn('npm run build:dev', { shell: true });

spawn('nodemon -w lib lib/index', { shell: true, stdio: 'inherit' });
