// TODO: Include packages needed for this application
const inquirer = require('inquirer')  
const fs = require('fs')
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// require uses the single '' how it works 
// require goes into the node module and loads what you're asking saved into the variable you choose
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is Project Title?'
},{
    type: 'input',
    name: 'description',
    message: 'What is the Description?'
},{
    type: 'input',
    name: 'installation',
    message: 'What is the Installation?'
},{
    type: 'input',
    name: 'usage',
    message: 'What is the Usage?'
},// {
//     type: 'input',
//     name: 'license',
//     message: 'What is the license?'
// },

{
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause"],
  },

{
    type: 'input',
    name: 'contributor',
    message: 'Please List any Contribute?'
},{
    type: 'input',
    name: 'test',
    message: 'What is the Test?'
},{
    type: 'input',
    name: 'username',
    message: 'Enter your github username'
},{
    type: 'input',
    name: 'questions',
    message: 'Feel free to reach out to me on my email'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data) // cwd = current working directory

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response)=>{
        console.log(response);
        writeToFile("Saphire.md",generateMarkdown({ ...response }));
          })
//     inquirer.prompt(questions).then(responses => {
//         console.log(responses);
// writeToFile('Saphire',generateMarkDown({...responses
// }))  
//   
}

// Function call to initialize app
init();
