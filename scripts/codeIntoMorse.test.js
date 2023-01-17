import { codeIntoMorse } from "./data-utils.js";

describe('codeIntoMorse', () => {
    it("returns the right morsecode for given input", () => {
        expect(codeIntoMorse("bigmac")).toBe("-... .. --. -- .- -.-.");
        expect(codeIntoMorse("w3ll haLL0")).toBe(".-- ...-- .-.. .-.. / .... .- .-.. .-.. -----");
        expect(codeIntoMorse("!@4_-..-.10YO")).toBe("-.-.-- .--.-. ....- ..--.- -....- .-.-.- .-.-.- -....- .-.-.- .---- ----- -.-- ---");
        expect(codeIntoMorse("console.log()")).toBe("-.-. --- -. ... --- .-.. . .-.-.- .-.. --- --. -.--. -.--.-");
        expect(codeIntoMorse("5-2=3")).toBe("..... -....- ..--- -...- ...--");
    })
    
    it("returns an error for invalid inputs", () => {
        expect(codeIntoMorse("||||")).toBe("That has no proper morsecode equivalent, sorry!");
        expect(codeIntoMorse("🦁")).toBe("That has no proper morsecode equivalent, sorry!");
        expect(codeIntoMorse("win||lose")).toBe("That has no proper morsecode equivalent, sorry!");
        expect(codeIntoMorse("~@('args')")).toBe("That has no proper morsecode equivalent, sorry!");
        expect(codeIntoMorse("This should work~")).toBe("That has no proper morsecode equivalent, sorry!");
    })
})