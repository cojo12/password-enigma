// Assignment Code
const generateBtn = document.getElementById('generate');
//let charType = prompt('');
//const name = prompt('Enter you name.');


// Write password to the #password textarea
function writePassword() {
  //var password = generatePassword();
  const passLength = prompt('How many characters? (8-128 characters)');
  if (passLength < 8 || passLength > 128) {
    alert('Password needs 8-128 characters');
    return;
  }

  const charTypes = prompt('Enter character types ("uppercase", "lowercase", "numeric" and/or "special").');

  const useUppercase = charTypes.indexOf('uppercase') >= 0;
  const useLowercase = charTypes.indexOf('lowercase') >= 0;
  const useNumeric = charTypes.indexOf('numeric') >= 0;
  const useSpecial = charTypes.indexOf('special') >= 0;
  if (useUppercase === false && useLowercase === false &&
      useNumeric === false && useSpecial === false) {
    alert('Must use at least one character type');
    return;
  }

  let possibleChars = '';
  if (useUppercase) possibleChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (useLowercase) possibleChars += 'abcdefghijklmnopqrstuvwxyz';
  if (useNumeric) possibleChars += '0123456789';
  if (useSpecial) possibleChars += '!@#$%^&*()=-+_?><.,/\\|;:\'`~[]{}"';

  let password = '';
  for (let i = 0; i < passLength; i++) {
    const charPosition = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[charPosition];
  }
  
  const passwordTextarea = document.getElementById('password');
  passwordTextarea.value = password;
}

function clearPassword() {
  document.getElementById('password').value = '';
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

