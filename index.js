/* user must install inquirer by running npm i inquirer
npm i inquirer*/
const inquirer = require('inquirer');
/* file system is includeded in inquirer package and 
used to create the new markdown file; declaring use */
const fs = require('fs');
//  util is included in node, declaring use
const util = require('util');
// function created to run fs
const writeFileAsync = util.promisify(fs.writeFile);
// funtion created to prompt questions to the user
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
            // list allows user to choose from provided options
            type: 'list',
            name: 'license',
            message: 'Which type of licencese is required?',
            choices: ['This is an open source app', 'BSD', 'MIT', 'CC', 'APACHE LICENSE'],
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
// function created to generate markdown file (README.md) 
const generateMD = (answers) =>
    // layout of the README.md being created
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
If there are any questions realted to the application, the user is 

encouraged to vistit the creator's GitHub, at: https://github.com/${answers.github},

or to contact the developer directy via email, at: ${answers.email}.
   `;
// calling the promtUser funciton 
promptUser()
    // next the user's answers are written to a new markdown file using the generateMD function
    .then((answers) => 
        writeFileAsync(`${answers.title}(README).md`, generateMD(answers), console.log(`Successfully created README.md file for ${answers.title}`)))
    // error thrown if not succuessful 
    .catch((err) => console.error(err));