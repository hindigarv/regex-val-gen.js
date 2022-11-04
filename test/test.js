import assert from 'assert';
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
        const expectedVals = ["abdeg", "acdeg", "abdfg", "acdfg"]
        assert.deepStrictEqual(vals.sort(), expectedVals.sort());
    });

    it('a regex with an optional match group', function () {
        const vals = generateValuesFromRegex("^a(b|c)?d$")
        const expectedVals = ["ad", "abd", "acd"]
        assert.deepStrictEqual(vals.sort(), expectedVals.sort());
    });

    it('a regex with an optional match group and a normal match group', function () {
        const vals = generateValuesFromRegex("^a(b|c)?d(e|f)$")
        const expectedVals = ["ade", "abde", "acde", "adf", "abdf", "acdf"]
        assert.deepStrictEqual(vals.sort(), expectedVals.sort());
    });


    xit('a regex with nested match group', function () {
        const vals = generateValuesFromRegex("^a(b|c|C(x|y))?d$")
        const expectedVals = ["ad", "abd", "acd", "aCxd", "aCyd"]
        assert.deepStrictEqual(vals.sort(), expectedVals.sort());
    });

});

describe('generateValuesFromRegex() should not generate values for', function () {
    it('an empty string', function () {
        const vals = generateValuesFromRegex("")
        assert.deepStrictEqual(vals, []);
    });

});