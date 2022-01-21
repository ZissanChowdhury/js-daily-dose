let str = 'JS will, JS will, JS will rock you.';
let newStr = str.replaceAll('JS','JavaScript');

console.log('replaceAll::', newStr);

console.log('*******************************');

let title;
title ||= 'untitled';

console.log('|| operator::', title);

console.log('*******************************');
const budget = 1_000_000_000;

console.log('budget::', budget)