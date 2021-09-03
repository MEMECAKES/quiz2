var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var plr;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
getContestantInfo()


  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  if(allContestants !== undefined){
    fill("Blue");
    textSize(20);
    text("*NOTE: Contestants who answer correct are highlighted in green color!",130,230);
  }
  for (var plr in allContestants) {
    var correctAns = "2";
    if (correctAns === allContestants[plr].answer) {
      fill("Green")
    } else {
      fill("red");
      
    }
    }
  }