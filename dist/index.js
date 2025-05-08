"use strict";
function formatString(input, toUpper) {
    if (toUpper == false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
formatString("Hello"); // Output: "HELLO"
formatString("Hello", true); // Output: "HELLO"
formatString("Hello", false); // Output: "hello"
