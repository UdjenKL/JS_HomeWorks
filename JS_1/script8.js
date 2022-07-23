let a = 8;
let b = 3;
let x = 0;
/* first equation */
while (a + 2 * (x - b) != 16) {
    x++
}
console.log(x);

/* second equation*/
b * (x + 15) == a + 6 * x;
3 * (x + 15) == 8 + (6 * x);
3 * x + 45 == 8 + 6 * x;
3 * x - 6 * x == 8 -45;
-3 * x == -37;
x = -37/-3;
console.log(x);

/* therd equation */
x + 2 * x + a * x + b * x == 23780;
x + 2 * x + 8 * x + 3 * x == 23780;
14 * x == 23780;
x = 23780/14;
console.log(x);