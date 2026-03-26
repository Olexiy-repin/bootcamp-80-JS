/*
 * Блокова область видимості змінних
 */

const firstName = 'Thomas';

if (true) {
  const firstName = 'Oleksii';

  if (true) {
    console.log(firstName);
  }
}

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function greetUser(firstName, lastName) {
  alert(`Welcome ${firstName} ${lastName}`);
}
