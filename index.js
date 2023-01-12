import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your application:',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'How should others contribute to this project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions for this project:',
      },
      {
        type: 'list',
        name: 'licenses',
        message: 'What license applies to your project?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
];

const generateREADME = ({projectName, description, installation, usage, contributions, test, licenses, github, email}) => 

`
#${projectName}

##Description

${description}

##Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributions](#contributions)
5. [Tests](#tests)
6. [Questions](#questions)

##Installation

${installation}

##Usage

${usage}

##License

${licenses}: For more information see the ${licenses} copyright in the repository.

##Contributions

${contributions}

##Tests

${test}

##Questions

[My GitHub](https://github.com/${github})
You may send any additional questions to [THIS](${email}) email!
`;

inquirer
    .prompt([
        ...questions,
    ])
    .then((answers) => {
        const readmePageContent = generateREADME(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
