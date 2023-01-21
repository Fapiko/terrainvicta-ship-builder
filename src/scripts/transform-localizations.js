const fs = require('fs');

const files = fs.readdirSync('./data/localizations/en');

fs.mkdirSync('./src/data/localizations/en/', {recursive: true});

files.forEach(file => {
    const fileContents = fs.readFileSync(`./data/localizations/en/${file}`, 'utf8');

    const lines = {};
    fileContents.split(/\r?\n/).forEach(line => {
        const [key, value] = line.split('=', 2);

        lines[key] = value;
    });

    const jsonContents = JSON.stringify(lines, null, 4);

    fs.writeFileSync(`./src/data/localizations/en/${file}.json`, jsonContents);
});
