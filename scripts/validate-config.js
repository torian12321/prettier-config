#!/usr/bin/env node

import config from '../src/index.js';
import prettier from 'prettier';

// Define valid prettier options and their expected types
const validOptions = {
  printWidth: { type: 'number', valid: (val) => typeof val === 'number' && val > 0 },
  tabWidth: { type: 'number', valid: (val) => typeof val === 'number' && val > 0 },
  useTabs: { type: 'boolean', valid: (val) => typeof val === 'boolean' },
  semi: { type: 'boolean', valid: (val) => typeof val === 'boolean' },
  singleQuote: { type: 'boolean', valid: (val) => typeof val === 'boolean' },
  quoteProps: { type: 'string', valid: (val) => ['as-needed', 'consistent', 'preserve'].includes(val) },
  jsxSingleQuote: { type: 'boolean', valid: (val) => typeof val === 'boolean' },
  trailingComma: { type: 'string', valid: (val) => ['none', 'es5', 'all'].includes(val) },
  bracketSpacing: { type: 'boolean', valid: (val) => typeof val === 'boolean' },
  bracketSameLine: { type: 'boolean', valid: (val) => typeof val === 'boolean' },
  arrowParens: { type: 'string', valid: (val) => ['avoid', 'always'].includes(val) },
  proseWrap: { type: 'string', valid: (val) => ['always', 'never', 'preserve'].includes(val) },
  singleAttributePerLine: { type: 'boolean', valid: (val) => typeof val === 'boolean' },
  endOfLine: { type: 'string', valid: (val) => ['lf', 'crlf', 'cr', 'auto'].includes(val) }
};

console.log('🔍 Validating prettier configuration properties...\n');

let hasErrors = false;

// Check each property in the config
Object.entries(config).forEach(([key, value]) => {
  if (!validOptions[key]) {
    console.error(`❌ Unknown prettier option: ${key}`);
    hasErrors = true;
    return;
  }
  
  const option = validOptions[key];
  if (!option.valid(value)) {
    console.error(`❌ Invalid value for ${key}: ${value} (expected ${option.type})`);
    hasErrors = true;
    return;
  }
  
  console.log(`✅ ${key}: ${value}`);
});

console.log('\n🧪 Testing configuration with prettier...');

// Test that the config actually works with prettier
try {
  const testCode = 'const obj={a:1,b:2,c:3};';
  const formatted = prettier.format(testCode, { ...config, parser: 'babel' });
  console.log('✅ Configuration successfully formats code');
  console.log('Sample output:', formatted);
} catch (error) {
  console.error('❌ Configuration failed to format code:', error.message);
  hasErrors = true;
}

// Test with different file types
const testCases = [
  { content: 'const x={a:1,b:2};', parser: 'babel', name: 'JavaScript' },
  { content: '<div><span>test</span></div>', parser: 'html', name: 'HTML' },
  { content: 'const x = { a: 1, b: 2 };', parser: 'babel', name: 'JavaScript with spaces' }
];

console.log('\n🧪 Testing with different parsers...');

testCases.forEach(({ content, parser, name }) => {
  try {
    const formatted = prettier.format(content, { ...config, parser });
    console.log(`✅ ${name} formatted successfully`);
  } catch (error) {
    console.error(`❌ ${name} failed:`, error.message);
    hasErrors = true;
  }
});

// Test edge cases
const edgeCases = [
  'const x={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26};',
  '<div><span>test</span><span>test2</span><span>test3</span></div>',
  'const fn=(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z)=>a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+r+s+t+u+v+w+x+y+z;'
];

console.log('\n🧪 Testing edge cases...');

edgeCases.forEach((code, index) => {
  try {
    // Determine parser based on content
    const parser = code.includes('<') && code.includes('>') ? 'html' : 'babel';
    const formatted = prettier.format(code, { ...config, parser });
    console.log(`✅ Edge case ${index + 1} formatted successfully`);
  } catch (error) {
    console.error(`❌ Edge case ${index + 1} failed:`, error.message);
    hasErrors = true;
  }
});

if (hasErrors) {
  console.log('\n❌ Configuration validation failed!');
  process.exit(1);
}

console.log('\n🎉 All prettier configuration properties are valid!'); 