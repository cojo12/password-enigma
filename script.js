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

  // 'uppercase, numeric'.indexOf('uppercase') => 0 - found
  // 'lowerercase, numeric'.indexOf('lowercase') => -1 - not found
  // 'uppercase, numeric'.indexOf('numeric') => 11 - found
  // 'uppercase, numeric'.indexOf('special') => -1 - not found

  // [ uppercase, numeric ]
  // [ special ]
  // [ special, lowercase, numeric ]
  const charTypes = prompt('Enter character types ("uppercase", "lowercase", "numeric" and/or "special").');
  // let useUppercase = false;
  // if (charTypes.indexOf('uppercase') >= 0) {
  //   useUppercase = true;
  // }
  // ===, !==, >, >=, <, <=, &&, ||
  // [ uppercase ]: true, false, false, false
  // [ lowercase ]: false, true, false, false
  // [ numeric, special ]: false, false, true, true
  // [ garbage, junk, whatever ]: false, false, false, false

  const useUppercase = charTypes.indexOf('uppercase') >= 0;
  const useLowercase = charTypes.indexOf('lowercase') >= 0;
  const useNumeric = charTypes.indexOf('numeric') >= 0;
  const useSpecial = charTypes.indexOf('special') >= 0;
  if (useUppercase === false && useLowercase === false &&
      useNumeric === false && useSpecial === false) {
    alert('Must use at least one character type');
    return;
  }

  // let x = 20;
  // x = x + 5;
  // x += 5;
  // useUppercase is true: possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // useNumeric is true: possibleChars = '0123456789';
  // useUppercase is true AND useNumeric is true: possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let possibleChars = '';
  if (useUppercase) possibleChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (useLowercase) possibleChars += 'abcdefghijklmnopqrstuvwxyz';
  if (useNumeric) possibleChars += '0123456789';
  if (useSpecial) possibleChars += '!@#$%^&*()=-+_?><.,/\\|;:\'`~[]{}"';
  // possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()=-+_?><.,/\\|;:\'`~[]{}"';
  // const str = 'hello';
  // str[0] == 'h'
  // str[1] == 'e'
  // ...
  // str.length == 5

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

