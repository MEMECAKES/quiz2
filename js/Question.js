class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.title3 = createElement('h3')
    this.input3 = createInput("what color is the sky");
    this.title4 = createElement('h4')
    this.input4 = createInput("red");
    this.input5 = createInput("green");
    this.input6 = createInput("blue");
    this.input7 = createInput("purple");
    this.button2 = createButton('Submit');



    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.title3.hide();
    this.input3.hide();
    this.title4.hide();
    this.input4.hide();
    this.input5.hide();
    this.input6.hide();
    this.input7.hide();
    this.button2.hide();



  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.input3.position(150, 230);
    this.button2.position(290, 300);
    this.input4.position(150, 230);
    this.input5.position(150, 220);
    this.input6.position(150, 210);
    this.input7.position(150, 200);



    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    })

    this.button2.mousePressed(()=>{
      this.message("Thank You, Your Answer Has Been Submitted");


    })


  }
}
