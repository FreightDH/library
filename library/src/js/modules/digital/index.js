const initCheckUser = () => {
  const cardButton = document.getElementById('cardButton');

  cardButton.addEventListener('click', () => {
    const cardNumber = document.getElementById('cardNumberInput').value;
    checkUser(cardNumber);
  });

  if (localStorage.getItem('isSigned')) {
    const userData = JSON.parse(localStorage.getItem('currentUser'));
    fillUserCard(userData);
  }
};

const checkUser = (cardNumber) => {
  const userData = JSON.parse(localStorage.getItem(cardNumber));

  if (userData) {
    fillUserCard(userData);
  }
};

const fillUserCard = (userData) => {
  const nameInput = document.getElementById('nameInput');
  const cardNumberInput = document.getElementById('cardNumberInput');
  const cardButton = document.getElementById('cardButton');
  const cardStats = document.querySelector('.card__stats');

  nameInput.value = `${userData.firstName} ${userData.lastName}`;
  nameInput.classList.add('active');
  nameInput.setAttribute('disabled', true);

  cardNumberInput.value = userData.cardNumber;
  cardNumberInput.classList.add('active');
  cardNumberInput.setAttribute('disabled', true);

  cardButton.classList.add('hidden');
  cardStats.classList.add('visible');

  if (!localStorage.getItem('isSigned')) {
    setTimeout(() => {
      clearInputs(nameInput, cardNumberInput);

      cardButton.classList.remove('hidden');
      cardStats.classList.remove('visible');
    }, 10000);
  }
};

const clearUserCard = (...args) => {
  args.forEach((input) => {
    input.classList.remove('active');
    input.removeAttribute('disabled');
    input.value = '';
  });
};

export default initCheckUser;
