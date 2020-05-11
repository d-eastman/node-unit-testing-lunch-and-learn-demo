const expect = require('chai').expect;
const fullName = require('./fullName');

describe('fullName', () => {

    it('David Eastman', () => {
        const data = {first:"David",last:"Eastman"};
        expect(fullName(data)).is.equal("David Eastman");
    });

    it('David Beckham', () => {
        const data = {first:"David",last:"Beckham"};
        expect(fullName(data)).is.equal("David Beckham");
    });

    it('Victoria Beckham', () => {
        const data = {first:"Victoria",last:"Beckham"};
        expect(fullName(data)).is.equal("Victoria Beckham");
    });

    describe('undefined/null/empty', () => {
        it('undefined', () => {
            expect(fullName()).is.equal("");
        });

        it('null', () => {
            const data = null;
            expect(fullName(data)).is.equal("");
        });

        it('empty', () => {
            const data = {};
            expect(fullName(data)).is.equal("");
        });
    });

    it('Ronaldo', () => {
        const data = {first:"Ronaldo"};
        expect(fullName(data)).is.equal("Ronaldo");
    });

    it('MacGyver', () => {
        const data = {last:"MacGyver"};
        expect(fullName(data)).is.equal("MacGyver");
    });

    it('James Tiberius Kirk', () => {
        const data = {first:"James",middle:"Tiberius",last:"Kirk"};
        expect(fullName(data)).is.equal("James Tiberius Kirk");
    });

});
