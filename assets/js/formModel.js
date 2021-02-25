const formModel = (function () {
    const getNameAndLastName = function ({ fullName }) {
        let name = fullName;
        let lastName = '';

        if ( fullName.includes(' ')) {
            fullNameSlice = fullName.match(/^(\S+)\s(.*)/).slice(1)
            name = fullNameSlice[0];
            lastName = fullNameSlice[1];
        }
        return { name, lastName };
    };

    const renderMessageError = function ({ input, message }) {
        let errorSpan = document.createElement('span');
        errorSpan.innerHTML = message;

        input.parentNode.insertBefore(errorSpan, input.nextSibling);
        input.classList.add('register__error--alert');
    };

    const clearMessageError = function () {
        const errorSpans = document.querySelectorAll('.register__container--form span');
        const errorSpansArray = [...errorSpans];

        const errorClass = document.querySelectorAll('.register__error--alert');
        const errorClassArray = [...errorClass];

        if (errorSpansArray.length === 0) {
            return;
        }

        errorSpansArray.map((span) => span.remove());
        errorClassArray.map((errorClass) => errorClass.classList.remove('register__error--alert'));
    };

    return {
        getNameAndLastName: getNameAndLastName,
        renderMessageError: renderMessageError,
        clearMessageError: clearMessageError,
    }
});