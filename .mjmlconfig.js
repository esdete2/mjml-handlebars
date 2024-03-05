const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const data = require("./data.json");

const getFilesRecursively = (directory) => {
  let files = [];

  const filesInDirectory = fs.readdirSync(directory);

  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file);

    if (fs.statSync(absolute).isDirectory()) {
      getFilesRecursively(absolute);
    } else {
      files.push(absolute);
    }
  }

  return files;
};

const registerPartials = () => {
  const partialPaths = getFilesRecursively('partials');

  for (const partialPath of partialPaths) {
    const partialName = path.basename(partialPath, '.mjml');
    const partialContent = fs.readFileSync(partialPath, 'utf8');

    Handlebars.registerPartial(partialName, partialContent);
  }
};

const compileTemplate = (content) => {
  const handlebarsTemplate = Handlebars.compile(content);
  return handlebarsTemplate(data);
};

const options = {
  preprocessors: [
    (rawMJML) => {
      try {
        registerPartials();
        return compileTemplate(rawMJML);
      } catch (e) {
        console.error(e);

        return rawMJML;
      }
    },
  ],
  packages: [],
};

module.exports = options;
