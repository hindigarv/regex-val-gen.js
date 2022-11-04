import assert  from 'assert';
import {generateValuesFromRegex} from "../index.js"


describe('generateValuesFromRegex() should generate values for', function () {
    it('a non regex string', function () {
        const vals = generateValuesFromRegex("^test$")
        assert.deepStrictEqual(vals, ["test"]);
    });

    it('a match group with single chars', function () {
        const vals = generateValuesFromRegex("^a(b|c)d$")
        assert.deepStrictEqual(vals, ["abd", "acd"]);
    });

    it('a match group with multiple chars', function () {
        const vals = generateValuesFromRegex("^a(bb|ccc)d$")
        assert.deepStrictEqual(vals, ["abbd", "acccd"]);
    });

    it('a regex with two match groups', function () {
        const vals = generateValuesFromRegex("^a(b|c)d(e|f)g$")
        assert.deepStrictEqual(vals, ["abdeg", "acdeg", "abdfg", "acdfg"]);
    });

});