declare const myString: string;
declare const myBoolean: boolean;

const expression = myBoolean && myString;
if (expression) {
} // Expect: error. Actual: error. ✅

if (myBoolean && myString) {
} // Expect: error. Actual: no error. ❌
