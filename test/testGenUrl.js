import { suite } from 'mocha';

const assert = require('assert');
const { randomUrl } = require('../src/Libs/RandomUrl');

(function () {
    suite('generate url', () => {
        test('generate url', () => {
            assert(randomUrl().length > 4);
        });
    });
}).call(this);
