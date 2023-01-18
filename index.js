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
        choices: [{name: 'Apache License 2.0', value: ['Apache License 2.0', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)']},
          {name: 'GNU General Public License v3.0', value: ['GNU General Public License v3.0', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)']},
          {name: 'MIT License', value: ['MIT License', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)']}, 
          {name: 'BSD 2-Clause "Simplified" License', value: ['BSD 2-Clause "Simplified" License', '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)']},
          {name: 'BSD 3-Clause "New" or "Revised" License', value: ['BSD 3-Clause "New" or "Revised" License', '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)']},
          {name: 'Boost Software License 1.0', value: ['Boost Software License 1.0', '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)']}, 
          {name: 'Creative Commons Zero v1.0 Universal', value: ['Creative Commons Zero v1.0 Universal', '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)']}, 
          {name: 'None', value: ['None', 'No License']}],
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

`${licenses[1]}

# ${projectName}

## Description

${description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributions](#contributions)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${licenses[0]}: For more information see the ${licenses[0]} copyright in the repository.

## Contributions

${contributions}

## Tests

${test}

## Questions

[My GitHub](https://github.com/${github})
You may send any additional questions [here](${email})!
`;

inquirer
    .prompt([
        ...questions,
    ])
    
    .then((answers) => {
        console.log(answers.licenses);
        const readmePageContent = generateREADME(answers);
    
        fs.writeFile('README.md', readmePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!') 
        );
    });
