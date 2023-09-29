// Practice test name 
const MathsTestNo = sessionStorage.getItem('MathsTestNo')
document.querySelector('.testName').innerHTML = `
  Maths Test ${MathsTestNo ? MathsTestNo : 1}
`


const QArray = [

    {
        Qno: 1,
        Question: 'A line which cuts a pair of parallel lines is called',
        Options: [
            {
                opt_no_1: 'tangent',
                opt_no_2: 'chord',
                opt_no_3: 'traversal',
                opt_no_4: 'intersector',
            }
        ],
        correctOpt: 3,
    },
    {
        Qno: 2,
        Question: 'An angle whose value is ____, is called complete angle.',
        Options: [
            {
                opt_no_1: '180°',
                opt_no_2: '240°',
                opt_no_3: '360°',
                opt_no_4: 'none of the above',
            }
        ],
        correctOpt: 3
    },
    {
        Qno: 3,
        Question: 'The areas of two similar triangles are 81 sq. cm and 49 sq. cm. Find the ratio of their corresponding heights.',
        Options: [
            {
                opt_no_1: '9:7',
                opt_no_2: '7:9',
                opt_no_3: '6:5',
                opt_no_4: '81:49',
            }
        ],
        correctOpt: 1
    },
    {
        Qno: 4,
        Question: 'Consider ΔABD such that angle ADB = 20° and C is a point on BD such that AB=AC and CD=CA. Then the measure of angle ABC is',
        Options: [
            {
                opt_no_1: '30°',
                opt_no_2: '40°',
                opt_no_3: '45°',
                opt_no_4: '60°',
            }
        ],
        correctOpt: 2
    },
    {
        Qno: 5,
        Question: 'If the length and breadth of a rectangle are increased by a% and b% respectively, then the area will be increased by',
        Options: [
            {
                opt_no_1: '(a-b+2ab/100)%',
                opt_no_2: 'a+b+2ab/100)% ',
                opt_no_3: '(a+b+ab/100)% ',
                opt_no_4: '(a-b+ab/100)%',
            }
        ],
        correctOpt: 3
    },
    {
        Qno: 6,
        Question: 'A, B and C can complete a piece of work in 14, 6 and 12 days respectively. Working together, they will complete the work in',
        Options: [
            {
                opt_no_1: '19/9 days',
                opt_no_2: '27 days',
                opt_no_3: '28/9 days',
                opt_no_4: '25/8 days',
            }
        ],
        correctOpt: 3
    },
    {
        Qno: 7,
        Question: 'If Px = Qy = Rz  and Q/P = R/Q, then 2z/(x+z) = ?',
        Options: [
            {
                opt_no_1: 'y/z',
                opt_no_2: 'y/x',
                opt_no_3: 'x/y',
                opt_no_4: 'z/y',
            }
        ],
        correctOpt: 2
    },
    {
        Qno: 8,
        Question: 'A shopkeeper purchases 15 mangoes for Rs. 10 and sells them at 10 mangoes for Rs. 15. Thus, he earns a profit of',
        Options: [
            {
                opt_no_1: '50%',
                opt_no_2: '75%',
                opt_no_3: '80%',
                opt_no_4: '125%',
            }
        ],
        correctOpt: 4
    },
    {
        Qno: 9,
        Question: '4950/6 + 112 x 1.75 = ? x 2',
        Options: [
            {
                opt_no_1: '510.5',
                opt_no_2: '505.2',
                opt_no_3: '515.5',
                opt_no_4: 'none of the above',
            }
        ],
        correctOpt: 1
    },
    {
        Qno: 10,
        Question: 'If a certain sum of money can become 5 times of its principal in 10 years, then the rate of interest is',
        Options: [
            {
                opt_no_1: '20%',
                opt_no_2: '30%',
                opt_no_3: '40%',
                opt_no_4: '50%',
            }
        ],
        correctOpt: 3
    }

]

const correctAns = [];
const wrongAns = [];

function startTest(Q_no = 0) {

    var Ques_no = Q_no;
    const Data = QArray[Ques_no]

    question_numbers = ''

    for (key in QArray) {
        question_numbers += `<span id='progressQ${QArray[key].Qno}'>${QArray[key].Qno}</span>`
    }

    document.querySelector('.testInfo').style.display = 'none';
    document.querySelector('.practiceTest').style.display = 'flex';
    document.querySelector('.practiceTest').innerHTML = `
    <div class="questionArea">
    <div class="question">
        <div class='mathQue'>
            <strong style='font-size: 24px; width: 3rem;'>Q ${Data.Qno}.</strong> 
            <span class='questionImg'>
                <img src="https://studygramhome.files.wordpress.com/2019/11/maths-mcqs-for-class-12-with-answers-chapter-8-application-of-integrals-6.png"/>
            </span>
            <strong class='Qtext'>${Data.Question}</strong>
        </div>
        <br>
        <form id="submit">
            <div class='opt'>
               <input type="radio" id="opt1" name="opt" onchange="submitAns('1' ,'${Data.correctOpt}', '${Data.Qno}')"/ >
                <label for="opt1" class='opt1'>${Data.Options[0].opt_no_1}</label>
            </div>
            <div class='opt'>
                <input type="radio" id="opt2" name="opt" onchange="submitAns('2' , '${Data.correctOpt}', '${Data.Qno}')    "/>
                <label for="opt2" class='opt2'>${Data.Options[0].opt_no_2}</label>
            </div>
            <div class='opt'>
                <input type="radio" id="opt3" name="opt"  onchange="submitAns('3','${Data.correctOpt}', '${Data.Qno}')"/    >
               <label for="opt3" class='opt3'>${Data.Options[0].opt_no_3}</label>
            </div>
            <div class='opt'>
                <input type="radio" id="opt4" name="opt" onchange="submitAns('4','${Data.correctOpt}', '${Data.Qno}')" /    >
                <label for="opt4" class='opt4'>${Data.Options[0].opt_no_4}</label>
            </div>
            <button class="nextQueBtn" type="submit">NEXT QUESTION</button>
        </form>
           <button id="submitTestBtn" onclick="submitTest()" style="background: #02a909;">SUBMIT TEST</button>
    </div>
</div>

<div class="progress">
    <h2>YOUR PROGRESS</h2>
    <span>Answer ${correctAns.length} questions correctly.</span>
    <div class="checkAns">
      ${question_numbers}
    </div>
</div>
`

    if (Ques_no + 1 == QArray[QArray.length - 1].Qno) {
        document.querySelector('#submitTestBtn').style.display = 'flex';
        document.querySelector('.nextQueBtn').style.display = 'none';
    }
    if (Ques_no + 1 != QArray[QArray.length - 1].Qno) {
        document.querySelector('.nextQueBtn').style.display = 'flex';
        document.querySelector('#submitTestBtn').style.display = 'none';
    }



    // Next Question Btn 
    document.querySelector('#submit').addEventListener('submit', (e) => {
        e.preventDefault();

        if (!e.target.opt.value) {
            alert('Please select any option')
        } else {

            startTest(Ques_no + 1)
            let Cans = JSON.stringify(correctAns);
            let Cobj = JSON.parse(Cans)
            for (key in Cobj) {
                document.querySelector(`#progressQ${Cobj[key]}`).style.background = 'green';
                document.querySelector(`#progressQ${Cobj[key]}`).style.color = 'white';
            }
            let Wans = JSON.stringify(wrongAns);
            let Wobj = JSON.parse(Wans)
            for (key in Wobj) {
                document.querySelector(`#progressQ${Wobj[key]}`).style.background = '#ff6e00';
                document.querySelector(`#progressQ${Wobj[key]}`).style.color = 'white';
            }
        }

    })

}

function submitAns(opt, cOpt, Qno) {
    if (opt == cOpt) {
        document.querySelector(`.opt${opt}`).style.color = 'white';
        document.querySelector(`.opt${opt}`).style.background = 'green';

        if (!correctAns.includes(Qno)) {
            correctAns.push(Qno)
        }

        if (wrongAns.includes(Qno)) {
            let index = wrongAns.indexOf(Qno);
            if (index > -1) {
                wrongAns.splice(index, 1);
            }
        }

        for (let i = 1; i <= 4; i++) {
            if (opt != 'opt' + i) {
                document.querySelector('#opt' + i).disabled = true;
            }
        }
    }
    if (opt != cOpt) {
        if (!wrongAns.includes(Qno)) {
            wrongAns.push(Qno)
        }
        if (correctAns.includes(Qno)) {
            let index = correctAns.indexOf(Qno);
            if (index > -1) {
                correctAns.splice(index, 1);
            }
        }
        document.querySelector(`.opt${opt}`).style.color = 'white';
        document.querySelector(`.opt${opt}`).style.background = '#ff6e00';

        document.querySelector(`.opt${cOpt}`).style.color = 'white';
        document.querySelector(`.opt${cOpt}`).style.background = 'green';

        for (let i = 1; i <= 4; i++) {
            if (opt != 'opt' + i) {
                document.querySelector('#opt' + i).disabled = true;
            }
        }
    }
}

function submitTest() {
    document.querySelector('.practiceTest').style.display = 'none';
    document.querySelector('.testScore').style.display = 'flex';
    document.querySelector('.testScore').innerHTML = `
        <div>
           <h3>Nice ! Your scored : ${correctAns.length} </h3>
           <span> Question Answer correctly : ${correctAns.length}/${QArray.length}</span>
        </div>
    `
}

const Practice_Opts = document.querySelector('.Practice_Opts');
str = '';
for (let i = 1; i <= 3; i++) {
    str += `
    <div class="practiceTestBox">
        <h3>Maths Test ${parseInt(MathsTestNo) + i}</h3>
        <span>Lorem Ipsum is simply dummy text</span>
        <span class="BtnSpan">
            <button><a style="color:white;" href="mathPractice.html" onclick="PracticeTest(${parseInt(MathsTestNo) + i})">START</a></button>
        </span>
        <div style="display: flex; flex-direction: column;">
            <strong>${20 + (i * 5)}</strong>
            <span style="font-size: 14px;
            margin: 10px 0;
            color: #454545;">QUESTIONS</span>
        </div>
    </div>
    `
}
Practice_Opts.innerHTML = str;

function PracticeTest(testNo) {
    sessionStorage.setItem('MathsTestNo', testNo)
}

// Submit Test 
function submitTest() {
    document.querySelector('.practiceTest').style.display = 'none';
    document.querySelector('.testScore').style.display = 'flex';
    document.querySelector('.testScore').innerHTML = `
            <div>
               <h3>Nice ! Your scored : ${correctAns.length} </h3>
               <span> Question Answered correctly : ${correctAns.length}/${QArray.length}</span>
            </div>
        `
}