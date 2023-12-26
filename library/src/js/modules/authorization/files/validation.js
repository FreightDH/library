const validateForm = (form) => {
  const inputRequired = form.querySelectorAll('.--req');
  let errorCount = 0;

  inputRequired.forEach((input) => {
    removeFormError(input);

    switch (input.getAttribute('type')) {
      case 'email': {
        if (!testEmail(input.value)) {
          addFormError(input);
          errorCount++;
        }
        break;
      }
      case 'password': {
        if (input.value.length < 8) {
          addFormError(input);
          errorCount++;
        }
        break;
      }
      default: {
        if (input.value === '') {
          addFormError(input);
          errorCount++;
        }
        break;
      }
    }
  });

  return errorCount;
};

const addFormError = (element) => {
  element.classList.add('--err');
  element.parentElement.classList.add('--err');
};

const removeFormError = (element) => {
  element.classList.remove('--err');
  element.parentElement.classList.remove('--err');
};

const testEmail = (email) => {
  const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );
  return regex.test(email);
};

export default validateForm;
