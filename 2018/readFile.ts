import * as fs from 'fs';
import * as path from 'path';


function readFile(name: string) {
  return fs.readFileSync(path.join(__dirname, name))
}

export default readFile;
