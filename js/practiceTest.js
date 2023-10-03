// Practice test name 
const practiceTestNo = sessionStorage.getItem('practiceTestNo')
document.querySelector('.testName').innerHTML = `
  Practice Test ${practiceTestNo}
`

window.addEventListener("hashchange", () => {
    const hash = window.location.hash
    var numb = hash.match(/\d/g);
    numb = numb.join("");
    sessionStorage.setItem('practiceTestNo', numb);
    window.location.reload();
});


const QArray = [

    {
        Qno: 1,
        Question: 'In the context of computing, what is the full form of URL ?',
        Options: [
            {
                opt_no_1: 'Undistributed Resource Locator',
                opt_no_2: 'Unified Resource Locator',
                opt_no_3: 'Uniform Resource Locator',
                opt_no_4: 'Uniform Region Locator',
            }
        ],
        correctOpt: 3,
    },
    {
        Qno: 2,
        Question: 'Which of the following is NOT an anti-virus software ?',
        Options: [
            {
                opt_no_1: 'Avast',
                opt_no_2: 'Linux',
                opt_no_3: 'Norton',
                opt_no_4: 'Kaspersky',
            }
        ],
        correctOpt: 2
    },
    {
        Qno: 3,
        Question: 'In the context of digital computer, which of the following pairs of digits is referred to as binary code ?',
        Options: [
            {
                opt_no_1: '3 and 4 ',
                opt_no_2: '0 and 1 ',
                opt_no_3: '2 and 3 ',
                opt_no_4: '1 and 2 ',
            }
        ],
        correctOpt: 2
    },
    {
        Qno: 4,
        Question: 'Which of the following devices is NOT used to enter data into a computer ?',
        Options: [
            {
                opt_no_1: 'Mouse',
                opt_no_2: 'Keyboard',
                opt_no_3: 'Scanner',
                opt_no_4: 'Monitor',
            }
        ],
        correctOpt: 4
    },
    {
        Qno: 5,
        Question: 'In the context of digital computer, which of the following pairs of digits is referred to as binary code ?',
        Options: [
            {
                opt_no_1: '3 and 4 ',
                opt_no_2: '0 and 1 ',
                opt_no_3: '2 and 3 ',
                opt_no_4: '1 and 2 ',
            }
        ],
        correctOpt: 2
    },
    {
        Qno: 6,
        Question: 'Which unit of the computer is considered as the brain of the computer ?',
        Options: [
            {
                opt_no_1: 'Memory unit',
                opt_no_2: 'Input unit ',
                opt_no_3: 'CPU',
                opt_no_4: 'Output unit ',
            }
        ],
        correctOpt: 3
    },
    {
        Qno: 7,
        Question: 'What is the full form of PROM ?',
        Options: [
            {
                opt_no_1: 'Program read-only memory',
                opt_no_2: 'Primary read-only memory',
                opt_no_3: 'Programmable read-only memory',
                opt_no_4: 'Program read-output memory',
            }
        ],
        correctOpt: 3
    },
    {
        Qno: 8,
        Question: 'In the context of digital computer, which of the following pairs of digits is referred to as binary code ?',
        Options: [
            {
                opt_no_1: '3 and 4 ',
                opt_no_2: '0 and 1 ',
                opt_no_3: '2 and 3 ',
                opt_no_4: '1 and 2 ',
            }
        ],
        correctOpt: 2
    },
    {
        Qno: 9,
        Question: 'In the context of digital computer, which of the following pairs of digits is referred to as binary code ?',
        Options: [
            {
                opt_no_1: '3 and 4 ',
                opt_no_2: '0 and 1 ',
                opt_no_3: '2 and 3 ',
                opt_no_4: '1 and 2 ',
            }
        ],
        correctOpt: 2
    },
    {
        Qno: 10,
        Question: 'In the context of digital computer, which of the following pairs of digits is referred to as binary code ?',
        Options: [
            {
                opt_no_1: '3 and 4 ',
                opt_no_2: '0 and 1 ',
                opt_no_3: '2 and 3 ',
                opt_no_4: '1 and 2 ',
            }
        ],
        correctOpt: 2
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
            <strong><span style='font-size: 24px;'>Q ${Data.Qno}.</span> ${Data.Question}</strong>
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

// const Practice_Opts = document.querySelector('.Practice_Opts');
// str = '';
// for (let i = 1; i <= 3; i++) {
//     str += `
//     <div class="practiceTestBox">
//         <h3>Practice Test ${parseInt(practiceTestNo) + i}</h3>
//         <span>Lorem Ipsum is simply dummy text</span>
//         <span class="BtnSpan">
//             <button><a style="color:white;" href="/practiceTest.html${parseInt(practiceTestNo) + i}" onclick="practiceTest(${parseInt(practiceTestNo) + i})">START</a></button>
//         </span>
//         <div style="display: flex; flex-direction: column;">
//             <strong>${20 + (i * 5)}</strong>
//             <span style="font-size: 14px;
//             margin: 10px 0;
//             color: #454545;">QUESTIONS</span>
//         </div>
//     </div>
//     `
// }

Practice_Opts.innerHTML = str;

function practiceTest(testNo) {
    sessionStorage.setItem('practiceTestNo', testNo)
    // setTimeout(() => {
    //     window.location.reload()
    // }, 500)
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