function grades(marks){
    let result=0; // Initialize result variable to store sum of Marks of all the subjects
    for (let i=0; i<marks.length; i++)
    {
        result += marks[i]; //ADD marks of Array
    }
    let avg=(result / marks.length); // Compute Average

    // iF-ELSE Conditions to compute Grade
    if(avg >= 90 && avg <= 100){
    return "A"}
    else if(avg >= 80 && avg <= 89){
        return "B"}
    else if(avg >= 70 && avg <= 79){
        return "C"}
    else if(avg >= 60 && avg <=69){
        return "D"}
    else if(avg >= 1 && avg <= 59){
        return "F"}    
    }
 
const marks = [80,60,90];
console.log(grades(marks));