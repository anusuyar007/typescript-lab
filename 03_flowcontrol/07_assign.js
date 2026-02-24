var n = 40;
//using while loop
//print 1 to n, skip number which  is divisible by 5
var i = 1;
while (i <= n) {
    if (i % 5 === 0) {
        i++; //when you skip, if u miss this , it will become infinite loop, mk sure to add this.
        continue;
    }
    console.log(i);
    i++;
}
//using for loop
var j;
for (j = 1; j <= n; j++) {
    if (j % 5 === 0) {
        continue;
    }
    console.log(j);
}
