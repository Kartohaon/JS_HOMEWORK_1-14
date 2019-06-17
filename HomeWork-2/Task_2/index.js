function check(getVal){
    if(!isNaN(getVal)){
        var day = new Date();
      alert(day.toLocaleString());
      } else{
      alert('Неверный тип данных');
          }
  }
  check(getVal = prompt("Введите число -"));