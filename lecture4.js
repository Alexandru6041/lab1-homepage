///Raț Patrick
///Bradea Ianis
///Muntoiu Adrian
///Chelariu Alexandru Gabriel
///Tasks 2 + 3 + 4

let user = {
    name: "Anna",
    scores: [3, "7", 10, null, "abc", 4, 8, -2, 15, undefined, "12"]
};

let validScores = [];

for (let i = 0; i < user.scores.length; i++) {
    let currentValue = user.scores[i];

    if (currentValue !== null && currentValue !== undefined) {
        
        let numberValue = Number(currentValue);

        if (!isNaN(numberValue) && numberValue >= 0) {
            validScores.push(numberValue);
        }
    }
}

console.log("Valid Scores:", validScores);


let sum = 0, cntPoorScores = 0, cntGoodScores = 0, cntAverageScores = 0;
let maximum = validScores[0]; 
let minimum = validScores[0];

for(let i = 0; i < validScores.length; i++) {
    let currentScore = validScores[i];

    sum = sum + currentScore;

    if(currentScore > maximum) {
        maximum = currentScore;
    }
    if(currentScore < minimum) {
        minimum = currentScore;
    }

    if(currentScore < 5){
        cntPoorScores++;
    }
    else if(currentScore >= 5 && currentScore <= 8){
        cntAverageScores++;
    }
    else{
        cntGoodScores++;
    }
}

let average = sum / validScores.length;

console.log("Sum:", sum);
console.log("Average:", average);
console.log("Maximum:", maximum);
console.log("Minimum:", minimum, "\n");

console.log("Poor Scores:", cntPoorScores);
console.log("Average Scores:", cntAverageScores);
console.log("Good Scores:", cntGoodScores);