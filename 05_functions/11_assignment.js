function gradeCalculator(maths, physics, chemistry) {
    var result = (maths + physics + chemistry) / 3;
    if (result > 90) {
        console.log("A Grade");
    }
    else if (result > 70 && result < 90) //between 70 and 90
     {
        console.log("B Grade");
    }
    else if (result < 70) {
        console.log("C Grade");
    }
}
gradeCalculator(91, 91, 91); //grade a
gradeCalculator(75, 85, 71); //grade b
gradeCalculator(60, 55, 45); //grade c
