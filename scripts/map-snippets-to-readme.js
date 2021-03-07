const fs = require('fs').promises
const snippets = require("../snippets/snippets.json")

const errCallback = (err) => {
    if (err) throw err;
}

(async () => {
    await fs.writeFile("../README.md", '', errCallback)

    const start = await fs.readFile('./startReadMe.md');
    const end = await fs.readFile('./endReadMe.md');

    await fs.appendFile("../README.md", start, errCallback)

    await fs.appendFile("../README.md", `| Prefix | Description | \r\n| :---- | :------- | \r\n`, errCallback)

    const snippetSorted = await Object.fromEntries(
        Object.entries(snippets).sort()
    );

    for (const snip in snippetSorted) {
        if (Object.hasOwnProperty.call(snippetSorted, snip)) {
            const element = snippetSorted[snip];
            await fs.appendFile("../README.md", `| ${element.prefix} | ${element.description} | \r\n`, errCallback)
        }
    }

    await fs.appendFile("../README.md", end, errCallback)
})();