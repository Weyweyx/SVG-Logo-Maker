import fs from 'fs';
import inquirer from 'inquirer';
import { Circle, Triangle, Square } from './lib/shapes.js'; // Assuming shapes are correctly imported

async function generateLogo() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter the text for your logo (up to 3 characters):',
                validate: (input) => input.length <= 3 || 'Text must be 3 characters or less.',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color (name or hex):',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape for your logo:',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the shape color (name or hex):',
            },
        ]);

        // Create the shape based on user choice
        let shape;
        if (answers.shape === 'circle') {
            shape = new Circle();
        } else if (answers.shape === 'triangle') {
            shape = new Triangle();
        } else if (answers.shape === 'square') {
            shape = new Square();
        }

        // Set the colors
        shape.setColor(answers.shapeColor);

        // Generate the SVG content
        const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            ${shape.render()} <!-- Render shape dynamically -->
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">
                ${answers.text}
            </text>
        </svg>
        `;

        // Save the SVG to a file
        fs.writeFileSync('logo.svg', svgContent, 'utf-8');

        console.log('Generated logo.svg');
    } catch (error) {
        console.error('Error generating logo:', error);
    }
}

generateLogo();
