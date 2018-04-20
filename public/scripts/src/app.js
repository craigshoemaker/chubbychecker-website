const checker = require('../../../modules/checker');

document.addEventListener('DOMContentLoaded', () => {

    const contentBox = document.getElementById('content-box');
    const result = document.getElementById('result');
    const checkButton = document.getElementById('check-button');
    const clearButton = document.getElementById('clear-button');

    checkButton.addEventListener('click', () => {
        const response = checker.rules.apply(contentBox.value, 'quickstart');
        result.innerHTML = checker.renderer.render(response, 'html');
    });

    clearButton.addEventListener('click', () => {
        contentBox.value = '';
        result.innerHTML = '';
    });

    
});