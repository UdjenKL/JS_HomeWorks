/* Задача 1 */
let name = prompt('Введите ваше имя');
let age = prompt('Введите ваш возраст');
let city = prompt('Введите Ваш город');
let phone = prompt('Введите Ваш телефон');
let email = prompt('Введите Вашу почту');
let company = prompt('Введите Вашу компанию');
document.write(`Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}`);
/* Задача 2 */
let myResult = 2022 - age;
document.write(`${name} родился в ${myResult} году`);
// /* Задача 3 */
let str = '123123';
	if ((str[0]+str[1]+str[2]) == (str[3]+str[4]+str[5]))
		 console.log('Да');
	else
		console.log('Нет');
/* Задача 4 */
let A = prompt('Введите числовое значение переменной "A"');
        if (A > 0) 
            console.log('Верно');
            else 
                console.log ('Не верно'); 
/* Задача 5*/
let a = 10;
let b = 2; 
let resultSum = a + b;  
let resultDifference = a - b;
let resultWork = a * b;
let resultPrivate = a/b;
console.log(`Сумма a + b = ${resultSum} , Разность a - b = ${resultDifference} , Произведение a * b = ${resultWork} , Частное a / b = ${resultPrivate}`);
if (resultSum > 1)     {
   console.log(`Cумма чисел a + b = ${resultSum} , возводим число в квадрат = ` +  Math.pow(resultSum,2));
}    
/* Задача 6*/
/* Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 'Неверно'.*/
if (a > 2 & a < 11 || b >= 6 & b < 14)
console.log ('Верно');
else 
console.log('Неверно');   
/* Задача 7*/
/*В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).*/
let n =+prompt("Введите число от 0 до 59");
if (n >= 0 && n <= 14) {
  console.log ("Первая");
}
if (n >= 15 && n <= 30) {
  console.log ("Вторая");
}
if (n >= 31 && n <= 45) {
  console.log ("Третья");
}
if (n >= 46 && n <= 59) {
  console.log ("Четвертая");
}
/* Задача 8*/
/*В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/
let day = 18;
if (day >= 1 && day < 11)
    console.log('Первая декада');
else if (day >= 11 && day < 21)
    console.log('Вторая декада');
else if (day >= 21 && day <= 31)
    console.log('Третья декада');
/* Задача 9 , 10*/
/* 9 .Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы (условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», соответственно.*/
/* 10 .Напишите скрипт, который по введенному дню (исп. значение переменной из 8 задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и т.д.). Скрипт определение поры года написать через switch.*/
const days = 364;
const calculateTimimg = d => {
   let months = 0, years = 0, days = 0, weeks = 0;
   while(d){
      if(d >= 365){
         years++;
         d -= 365;
      }else if(d >= 30){
         months++;
         d -= 30;
      }else if(d >= 7){
         weeks++;
         d -= 7;
      }else{
         days++;
         d--;
         
      }
   };
   return {
      years, months, weeks, days
      
   };
};
if (days < 365)
console.log ('Меньше года');
if ((days < 31) && (calculateTimimg.months == 0))
console.log('Меньше месяца');
if ((days < 31) && (calculateTimimg.months == 0) && (calculateTimimg.weeks<7))
console.log('Меньше недели');
let result = calculateTimimg(days);
console.log(calculateTimimg(days));
function daysToMinutesSecundes(days) {
   return console.log(days + ' days = ' + days * 24 * 60 + ' min ' + days * 24 * 60 * 60 + ' sec ');
 }
daysToMinutesSecundes(days); 
let monthResultNumber = result.months;
switch (monthResultNumber) {
   case 1, 2, 12: console.log("зима"); break;
   case 3, 4, 5: console.log ("весна"); break;
   case 6, 7, 8: console.log ("лето"); break;
   case 9, 10, 11: console.log ("осень"); break;
}