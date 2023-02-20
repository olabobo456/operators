let studentgroup = 'Arts';
let generalSubjects = 'Mathematics, English';

let Science ='Physics,Chemistry,Biology,Technical Drawing'
let Arts ='Literature,Government,Economics,History'
let SocialScience = 'Accounting,commerce,Marketing,Geography'

if (studentgroup== 'Science') {
    console.log("Physics,Chemistry,Biology,Technical Drawing");
}
else if(studentgroup=='Arts') {
    console.log("Literature,Government,Economics,History");
}
else if(studentgroup=='SocialScience') {
    console.log("Accounting,commerce,Marketing,Geography");
}
else{
    console.log("generalSubjects");
}

//Question 5

let number = 20;

2 ** 2;
2 ** 3;
2 ** 4


let pwr = 2 ** 4;

console.log("The number " + pwr + " is the power of 2 nearest to " + number)

let i=1
for (let i = 1; i < 20; i +=7){
    console.log(i);
}