let inquirer = require('inquirer')
let chalk = require('chalk')


var questions = [{
  type: 'input',
  name: 'name',
  message: "What's your name?"
},
{
  type: 'input',
  name: 'number',
  message: "What's your phone number?"
}]

inquirer.prompt(questions)
.then(answers => {
  console.log(`Your name is ${chalk.blue(answers['name'])}. Your Phone No. is ${answers['number']}.`);
});

