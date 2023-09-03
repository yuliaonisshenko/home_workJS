/* 1. Функція для перевірки типів і виконання операцій */
function typeChecker(arg1, arg2) {
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
      return arg1 + arg2;
    } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
      return arg1 * arg2;
    } else {
      return "There are no type matches for operation";
    }
  }
  
  // Приклад роботи функції:
  console.log(typeChecker(2, 3)); // виведе 6
  console.log(typeChecker("My", "text")); // виведе Mytext
  console.log(typeChecker(true, 5)); // виведе There are no type matches for operation
  
  /* 2. Функція для визначення, чи число позитивне чи негативне */
  function isNegative(value) {
    console.log(value < 0 ? "Yes" : "No");
  }
  
  // Приклад роботи функції:
  isNegative(-1); // виведе у консоль "Yes"
  isNegative(1); // виведе у консоль "No"
  
  /* 3. Функція для перевірки ділення без остачі */
  function divider(num1, num2) {
    return num1 % num2 === 0;
  }
  
  // Приклад роботи функції:
  console.log(divider(4, 2)); // виведе true
  console.log(divider(3, 2)); // виведе false
  
  /* 4. Рекурсивна функція для виведення та збільшення числа на 2 */
  function recursiveAddition(value) {
    if (value <= 10) {
      console.log(value);
      recursiveAddition(value + 2);
    }
  }
  
  // Приклад роботи функції:
  recursiveAddition(5); // виведе в консоль по черзі 5, 7, 9
  recursiveAddition(2); // виведе в консоль по черзі 2, 4, 6, 8, 10
  recursiveAddition(11); // не виведе нічого  