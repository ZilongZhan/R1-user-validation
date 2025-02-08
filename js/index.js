const userName = "Zilong Zhan";
const password = "pÁssword123";
const repeatPassword = "pÁssword123";
const userAge = 21;

const adultAge = 18;
const nameMinLength = 5;

const isValidName = userName.length >= nameMinLength;
const isValidPassword =
  /([A-Z]|[À-Ü])/.test(password) &&
  /[0-9]/.test(password) &&
  password.length >= 8;
const isValidRepeatPassword = password === repeatPassword;
const isAdult = userAge >= adultAge;

console.log(`El nombre de usuario es válido: ${isValidName}`);
console.log(`La contraseña es válida: ${isValidPassword}`);
console.log(
  `La repetición de la contraseña es válida: ${isValidRepeatPassword}`
);
console.log(`Es mayor de edad: ${isAdult}`);
