import { spawn } from 'child_process';

spawn('tsc -b jsconfig.json -w', { shell: true });

spawn('nodemon -w lib lib/index', { shell: true, stdio: 'inherit' );
