const {reverseString, isPalindrome, truncateString, countCharacters} = require('../src/stringUtils.js');

test('reverseString of "CIAO" to equal "OAIC"', ()=>{
    expect(reverseString("CIAO")).toBe("OAIC");
});

test('reverseString of " CIAO " to equal " OAIC "', ()=>{
    expect(reverseString(" CIAO ")).toBe(" OAIC ");
});

test('reverseString of "C" to equal "C"', ()=>{
    expect(reverseString("C")).toBe("C");
});

test('isPalindrome of "ABBA" to equal "True"', ()=>{
    expect(isPalindrome("ABBA")).toBeTruthy();
});

test('isPalindrome of " ABBA " to equal "True"', ()=>{
    expect(isPalindrome(" ABBA ")).toBeTruthy();
});

test('isPalindrome of "A" to equal "True"', ()=>{
    expect(isPalindrome("A")).toBeTruthy();
});

test('isPalindrome of "AC" to equal "False"', ()=>{
    expect(isPalindrome("AC")).toBeFalsy();
});

test('truncateString of "ACCCIOOO" at 2 characters to equal "AC"', ()=>{
    expect(truncateString("ACCIOOO", 2)).toBe("AC...");
});

test('truncateString of "ACCCIOOO" at 2 characters to equal "AC"', ()=>{
    expect(truncateString("ACCIOOO", 0)).toBe("...");
});

test('truncateString of "AC" at 10 characters to equal "AC"', ()=>{
    expect(truncateString("AC", 10)).toBe("AC");
});

test('countCharacters of "ACC" to equal 3', ()=>{
    expect(countCharacters("ACC")).toEqual({ "A": 1, "C": 2 });
});

test('countCharacters of "" to equal 0', ()=>{
    expect(countCharacters("")).toEqual({});
});
