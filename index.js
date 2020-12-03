const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What does this application do?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the instructions for installation?',
        },
        {
            type: 'input',
            name: 'use',
            message: 'What is the intended use of the application?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please describe guidelines for developer contributions:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide testing instructions:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide testing instructions:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which licencese',
            choices: ['Large', 'Medium', 'Small'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub user name:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide email address for users & developers to contact:',
        },
    ]);

const generateMD = (answers) =>
    `# ${answers.title}

## Description
${answers.description}

## Installation Instructions
${answers.install}

## Usage
${answers.use}

## Contribution Guidelines
${answers.contribution}

## Testing Proceedures
${answers.test}

## Licenses Required
${answers.license}

## Questions
If there are any questions realted to the application, the user is encouraged to vistit the creator's GitHub, at: https://github.com/${answers.github},

or to contact the developer directy via email, at: ${answers.email}.
   `;

promptUser()
    .then((answers) => writeFileAsync('README.md', generateMD(answers)))
    .then(() => console.log('Successfully created README.md file'))
    .catch((err) => console.error(err));