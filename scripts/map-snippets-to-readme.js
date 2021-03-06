const fs = require('fs')
const snippets = require("../snippets/snippets.json")

const errCallback = (err) => { if (err) throw err; }

fs.writeFile("../README.md", '', errCallback)

const start = fs.readFileSync('./startReadMe.md');
const end = fs.readFileSync('./endReadMe.md');

fs.appendFile("../README.md", start, errCallback)

fs.appendFile("../README.md",`| Prefix | Description | \r\n| :---- | :------- | \r\n`, errCallback)

for (const snip in snippets) {
    if (Object.hasOwnProperty.call(snippets, snip)) {
        const element = snippets[snip];
        fs.appendFile("../README.md",`| ${element.prefix} | ${element.description} | \r\n`, errCallback)
    }
}

fs.appendFile("../README.md", end, errCallback)