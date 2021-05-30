const chalk = require('chalk');
var readlineSync = require('readline-sync');


 
 console.log("Welcome to Ishaan's test ! let's see how much you know me better HAHHAHAahahah");
  
 var score  = 0;
 function play(question,answer){
   var userAnswer = readlineSync.question(question);
   if(answer === userAnswer.toLowerCase()){
     score = score + 1;
     console.log(chalk.bgGreen("Right"));
     console.log("your score is : "+score);
   }
   else{
     console.log(chalk.bgRed("Wrong"));
   }
 }

 var questionsAnswers = [
      {
         question : "my fav football team : ",
         answer : "barcelona"
      },
      {
         question : "my middle name : ",
         answer : "veer"
      },
      {
         question : "programming language which i love : ",
         answer : "java",
      },
      {
         question : "what i love to eat most :",
         answer : "chicken biryani"
      }
   ]

  for(var i = 0; i < questionsAnswers.length; i++ ){
    play(questionsAnswers[i].question, questionsAnswers[i].answer );
  }

 console.log(chalk.bgYellow("final score : "+score));