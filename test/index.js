'use strict';

var test = require('ava'),
    assertCssEqual = require('./utils/assert-css-equal');

test('Basic sass', function(t) {
    t.plan(1);

    return assertCssEqual(t, 'basic');    
});

test('Partial import', function(t) {
    t.plan(1);

    return assertCssEqual(t, 'import');    
});

test('Full file name import', function(t) {
    t.plan(1);

    return assertCssEqual(t, 'import', 'import-full-name');    
});

test('Import with .sass extension', function(t) {
    t.plan(1);

    return assertCssEqual(t, 'import', 'import-sass');    
});

test('Directory in import statement', function(t) {
    t.plan(1);

    return assertCssEqual(t, 'import', 'import-from-dir');    
});

test('Import from node_modules', function(t) {
    t.plan(1);

    return assertCssEqual.assertCssEqualFile(t, 'import-from-node-modules', 'node-modules-import.css.txt');    
});
