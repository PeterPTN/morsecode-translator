import { decodeMorse } from "./data-utils.js";

describe('decodeMorse', () => {
    it('returns the right output for words', () => {
        expect(decodeMorse(".... . .-.. .-.. ---")).toBe("Hello");
        expect(decodeMorse("- . ... -")).toBe("Test");
        expect(decodeMorse(".-- --- .-. .-.. -..")).toBe("World");
    });

    it("returns the right output for punctuation marks", () => {
        expect(decodeMorse("-.-.--")).toBe("!");
        expect(decodeMorse("..--..")).toBe("?");
        expect(decodeMorse(".-...")).toBe("&");
    });

    it("returns the right output for numbers", () => {
        expect(decodeMorse("-----")).toBe("0");
        expect(decodeMorse("----.")).toBe("9");
        expect(decodeMorse(".....")).toBe("5");
    });

    it("returns an error message for invalid morsecode", () => {
        expect(decodeMorse("farts")).toBe("Not valid morsecode!");
        expect(decodeMorse("5tin/ky")).toBe("Not valid morsecode!");
        expect(decodeMorse("!@%!%")).toBe("Not valid morsecode!");
        expect(decodeMorse("hello . - .")).toBe("Not valid morsecode!");
        expect(decodeMorse("/ . a - .")).toBe("Not valid morsecode!");
    })
})