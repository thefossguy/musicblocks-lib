import { ValueElement } from './ValueElements';

describe('namespace ValueElement', () => {
    test('instantiate a IntElement with 5 and expect 5 to be data', () => {
        expect(new ValueElement.IntElement(5).data.value).toBe(5);
    });
    test('instantiate a FloatElement with 2.71828 and expect 2.71828 to be data', () => {
        expect(new ValueElement.FloatElement(2.71828).data.value).toBe(2.71828);
    });
    test('instantiate a CharElement with 97 and expect "a" to be data', () => {
        expect(new ValueElement.CharElement(97).data.value).toBe('a');
    });
    test('instantiate a StringElement with "string" and expect "string" to be data', () => {
        expect(new ValueElement.StringElement('string').data.value).toBe('string');
    });
    test('instantiate a TrueElement and expect true to be data', () => {
        expect(new ValueElement.TrueElement().data.value).toBe(true);
    });
    test('instantiate a FalseElement and expect false to be data', () => {
        expect(new ValueElement.FalseElement().data.value).toBe(false);
    });
});
