import { execSync } from "child_process";
import { main } from "json";

export const jestify = ()=>{
    console.log('Hello world');
    main(['json', '-I', '-f', 'package.json', 'e', 'this.type="module"'])
    //execSync("npm init -y");
    execSync(`json -I -f package.json -e 'this.type="module"'`);
    execSync(`npm install -D jest`);
    execSync(`json -I -f package.json -e 'this.scripts.test="node --experimental-vm-modules node_modules/jest/bin/jest.js"'`);
}