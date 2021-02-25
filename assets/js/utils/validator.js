const validator = (function() {
    const isBlankInput = function ({ input }) {
        return input === "";
    };

    const isValidEmail = function ({ email }) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(email.toLowerCase());
    };

    const hasNineDigits = function ({ number }) {
        const numberToString = number + '';
        return numberToString.length !== 9;
    };

    const notContainNumbers = function ({ input }) {
        const re = /^([^0-9]*)$/;
        return !re.test(input);
    };

    const isTheSamePassword = function ({ password, repeatPassword }) {
        return password !== repeatPassword;
    };


    return {
        isBlankInput : isBlankInput,
        isValidEmail : isValidEmail,
        hasNineDigits : hasNineDigits,
        notContainNumbers : notContainNumbers,
        isTheSamePassword : isTheSamePassword,
    }
});