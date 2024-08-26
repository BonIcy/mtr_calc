import { matrizInputs, operation } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button[onclick="matrizInputs()"]').addEventListener('click', matrizInputs);
    document.querySelector('button[onclick="operation()"]').addEventListener('click', operation);
});