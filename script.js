const quizDB =[
    {
        question :"Q1 what is full form of HTML?",
        a:"Hello to my land",
        b:"Hey text marup language",
        c:"HyperText markup language",
        d:"Hypertext markup language",
        ans:"ans4"

    },
    {
        question:"Q2 what is full form of CSS?",
        a:"Cascading Style sheets",
        b:"Cascading sources sheets",
        c:"Cartoon style sheets",
        d:"Cascading super sheets",
        ans:"ans1"
    },
    {
        question: "Q3 what is full form of HTTPS?",
        a:"Hypertext transfer product",
        b:"Hypertext test protocol",
        c:"Hey transfer protocol",
        d:"Hypertext Transfer protocol",
        ans:'ans4'
    },
    {
        question: "Q4 What is full form of JS?",
        a:"Javascript",
        b:"Javasuper",
        c:"Joerdenscript",
        d:"Jordenshoes",
        ans:"ans1"
    }
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const  submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');

  let questionCount=0;
  let score=0;
  const loadQuestion=()=>{
        
    const questionList=quizDB[questionCount];

    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
  };
    
  loadQuestion();


  const getCheckAnswer=()=>{
    let answer;
    // answers.forEach((curAnsEle) => {
    //     if(curAnsEle.checked){
    //         answer=curAnsEle.id;
    //     }
    
    // });

    for(let i=0;i<answers.length;i++){
        if(answers[i].checked){
            answer=answers[i].id;
            break;
        }
    }
       return answer;
  };

  const deselectAll=()=>{
    // answers.forEach((curAnsEle)=>{
    //     curAnsEle.checked=false
    // });

    for (let i = 0; i < answers.length; i++) {
        answers[i].checked = false;
    }

  };

  submit.addEventListener('click',()=>{

    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans ){
        score++;
    };

       questionCount++;
       deselectAll();
       if(questionCount<quizDB.length){
        loadQuestion();
       }
       else{

        showScore.innerHTML=`
        <h3>Your score ${score}/${quizDB.length}  </h3>
        <button class="btn" onclick="location.reload()"> play again </button>
         
        `;

        showScore.classList.remove('scoreArea');
       }


  });