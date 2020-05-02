import shell from 'shelljs';

shell.cp('-R', 'src/app/views', 'dist/src/app/views/');
shell.cp('src/app/swagger.json', 'dist/src/app/swagger.json');
shell.rm('-rf', 'dist/tests');
