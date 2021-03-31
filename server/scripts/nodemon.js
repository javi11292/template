const { spawn } = require('child_process');

const options = { shell: true, stdio: 'inherit' };

spawn('tsc -b jsconfig.json -w', { shell: true });

spawn('nodemon -w lib lib/index', options);
