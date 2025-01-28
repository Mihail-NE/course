function game() {
  const startValue = Math.floor(Math.random() * 100) + 1;
  let min = 1;
  let max = 100;
  let num = Math.floor((min + max) / 2);

  console.log("Компьютер 1: загадал число " + startValue);
  console.log("Компьютер 2: пробую число " + num);

  const iteration = (num, startValue, min, max) => {
      if (startValue > num) {
          console.log("Компьютер 1: больше");
          min = num;
          num = Math.floor((min + max) / 2);
      } else if (startValue < num) {
          console.log("Компьютер 1: меньше");
          max = num;
          num = Math.floor((min + max) / 2);
      }

      if (num === startValue) {
          console.log("Компьютер 2: пробую число " + num);
          return console.log("Компьютер 1: угадал");
      } else {
          console.log("Компьютер 2: пробую число " + num);
          return iteration(num, startValue, min, max);
      }
  };

  iteration(num, startValue, min, max);
}

game();