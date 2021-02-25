const formController = (function(){
    const fullNameInput = document.querySelector('#fullname__input');
    const phoneInput = document.querySelector('#phone__input');
    const emailInput = document.querySelector('#email__input');
    const passwordInput = document.querySelector('#password__input');
    const repeatPasswordInput = document.querySelector('#repassword__input');
    const submitBtn = document.querySelector('.register__container button');

    const _validator = validator();
    const _formModel = formModel();

    const initEvent = function () {
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();

            _formModel.clearMessageError();

            const fullName = _formModel.getNameAndLastName( { fullName : fullNameInput.value.trim() });
            const name = fullName.name;
            const lastName = fullName.lastName;
            const phone = +phoneInput.value;
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const repeatPassword = repeatPasswordInput.value.trim();

            if (_validator.isBlankInput({ input: fullNameInput.value.trim() })) {
                _formModel.renderMessageError({ input: fullNameInput, message: 'Error: full name not must be blank.' });
                return;
            }

            if (_validator.notContainNumbers({ input: name })) {
                _formModel.renderMessageError({ input: fullNameInput, message: 'Error: name not must contains numbers.' });
                return;
            }

            if (_validator.hasNineDigits({ number: phone })) {
                _formModel.renderMessageError({ input: phoneInput, message: 'Error: number must be nine digits.' });
                return;
            }

            if (_validator.isValidEmail({ email: email })) {
                _formModel.renderMessageError({ input: emailInput, message: 'Error: email is not valid.' });
                return;
            }

            if (_validator.isBlankInput({ input: password })) {
                _formModel.renderMessageError({ input: passwordInput, message: 'Error: password not must be blank.' });
                return;
            }

            if (_validator.isTheSamePassword({ password: password, repeatPassword: repeatPassword })) {
                _formModel.renderMessageError({ input: passwordInput, message: 'Error: Password must be the same.' });
                _formModel.renderMessageError({ input: repeatPasswordInput, message: 'Error: Password must be the same.' });
                return;
            }

            console.log({
                name,
                lastName,
                phone,
                email,
                password,
                repeatPassword
            })
        });
    };

    initEvent();
})();