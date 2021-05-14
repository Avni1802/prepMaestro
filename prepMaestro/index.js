function load(){
    const length = questions.length;
    const questionNo = document.getElementById("questionTitle");
    const questionPalatte=document.getElementById("questionPalatte");
    const option1=document.getElementById('opt1');
    const option2=document.getElementById('opt2');
    const option3=document.getElementById('opt3');
    const option4=document.getElementById('opt4');
    const prevBtn=document.getElementById('prev');
    const nextBtn=document.getElementById('next');
    const submitBtn=document.getElementById('submit');

    prevBtn.addEventListener('click',prev);
    nextBtn.addEventListener('click',next);
    submitBtn.addEventListener('click',submit);

    function beginQuiz(){
        currentQuestion=0;
        questionNo.innerText=questions[currentQuestion].questionNo;
        questionName.innerText=questions[currentQuestion].question;
        option1.innerText=questions[currentQuestion].option1;
        option2.innerText=questions[currentQuestion].option2;
        option3.innerText=questions[currentQuestion].option3;
        option4.innerText=questions[currentQuestion].option4;
    }
    beginQuiz();
    function next(){
        if(currentQuestion>=length){
            prevBtn.classList.add('hide');
            nextBtn.classList.remove('hide');
        }
        else{

            currentQuestion++;
            questionNo.innerText=questions[currentQuestion].questionNo;
            questionName.innerText=questions[currentQuestion].question;
            option1.innerText=questions[currentQuestion].option1;
            option2.innerText=questions[currentQuestion].option2;
            option3.innerText=questions[currentQuestion].option3;
            option4.innerText=questions[currentQuestion].option4;        
        }
    }

    function prev(){
 
        if(currentQuestion<=0){
            prevBtn.classList.add('hide');
            nextBtn.classList.remove('hide');
        }
        else{

            currentQuestion--;
            questionNo.innerText=questions[currentQuestion].questionNo;
            questionName.innerText=questions[currentQuestion].question;
            option1.innerText=questions[currentQuestion].option1;
            option2.innerText=questions[currentQuestion].option2;
            option3.innerText=questions[currentQuestion].option3;
            option4.innerText=questions[currentQuestion].option4;
        }

    }

    function update(){
        var x=this.innerText;
        currentQuestion=x-1;
        questionNo.innerText=questions[currentQuestion].questionNo;
        questionName.innerText=questions[currentQuestion].question;
        option1.innerText=questions[currentQuestion].option1;
        option2.innerText=questions[currentQuestion].option2;
        option3.innerText=questions[currentQuestion].option3;
        option4.innerText=questions[currentQuestion].option4;
        
        if(!questions[currentQuestion].visited){
            console.log(questions[currentQuestion].visited);
            var circle=document.getElementsByClassName('circles');
            circle[currentQuestion].classList.add('visited');
            questions[currentQuestion].visited=1;
        }
    }


    console.log(questions);

    var palatte=document.createElement('div');
    palatte.classList.add('palatte');
    questionPalatte.appendChild(palatte);
    // questionNo.textContent=questions[0].q;
    const questionSet = questions;
    for(const x in questionSet){
        var q=questionSet[x];
        console.log(q);
        var circle=document.createElement('button');
        circle.classList.add('circles');
        if(!q.visited){
            circle.classList.add('notVisited');
        }
        circle.innerText=q.questionNo;
        console.log(x);
        palatte.appendChild(circle);
        console.log(q.visited);

    }
    var circles = document.getElementsByClassName('circles');

    for (var i = 0; i < circles.length; i++) {
        circles[i].addEventListener('click', update, false);
    }
   
}
function toggle(){
    var checkBox = document.getElementById('markReview');
    if(checkBox.checked==true){
        console.log(questions[currentQuestion].visited);
        var circle=document.getElementsByClassName('circles');
        circle[currentQuestion].classList.add('reviewed');
        questions[currentQuestion].reviewed=1;
    }
    else{
        console.log(questions[currentQuestion].visited);
        var circle=document.getElementsByClassName('circles');
        circle[currentQuestion].classList.remove('reviewed');
        questions[currentQuestion].reviewed=0;
    }
}

var minutes=10;
var seconds=0;
setInterval(function(){

    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('seconds').innerHTML=seconds;
    if(seconds==0)
    {
        minutes--;
        seconds=59;
    };
    if(minutes==0 && seconds==0){
        clearInterval(interval);
        document.getElementById('time').innerHTML="DONE!";
        alert("You're out of time!");
    }

},1000); 
