// Practice test name 
const practiceTestNo = sessionStorage.getItem('practiceTestNo')
document.querySelector('.testName').innerHTML = `
  Practice Test ${practiceTestNo}
`

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
            <form>
            ${Data.Options.map(val => (
        `
                    <div class="opt">
                        <input type="radio" id="opt1" name="opt" value="opt1" onclick="submitAns('1' ,'${Data.correctOpt}', '${Data.Qno}')"/>
                        <label for="opt1" class='opt1'>${val.opt_no_1}</label>
                    </div>
                    <div class="opt">
                        <input type="radio" id="opt2" name="opt" value="opt2" onclick="submitAns('2' , '${Data.correctOpt}', '${Data.Qno}')"/>
                        <label for="opt2" class='opt2'>${val.opt_no_2}</label>
                    </div>
                    <div class="opt">
                        <input type="radio" id="opt3" name="opt" value="opt3" onclick="submitAns('3','${Data.correctOpt}', '${Data.Qno}')"/>
                        <label for="opt3" class='opt3'>${val.opt_no_3}</label>
                    </div>
                    <div class="opt">
                        <input type="radio" id="opt4" name="opt" value="opt4" onclick="submitAns('4','${Data.correctOpt}', '${Data.Qno}')"/>
                        <label for="opt4" class='opt4'>${val.opt_no_4}</label>
                    </div>
                `
    ))}
            </form>
        </div>
        <button class="nextQueBtn" onclick='nextQue(${Ques_no})'>NEXT QUESTION</button>
    </div>

    <div class="progress">
        <h2>YOUR PROGRESS</h2>
        <span>Answer 12 questions correctly.</span>
        <div class="checkAns">
          ${question_numbers}
        </div>
    </div>
`
}


function nextQue(Ques_no) {
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
        document.querySelector(`#progressQ${Wobj[key]}`).style.background = 'red';
        document.querySelector(`#progressQ${Wobj[key]}`).style.color = 'white';
    }
}


function submitAns(opt, cOpt, Qno) {

    if (opt == cOpt) {
        document.querySelector(`.opt${opt}`).style.color = 'white';
        document.querySelector(`.opt${opt}`).style.background = 'green';

        if (wrongAns.includes(Qno)) {
            return wrongAns.filter(item => item !== Qno)
        }
        if (!correctAns.includes(Qno)) {
            correctAns.push(Qno)
        }
    } else {
        if (correctAns.includes(Qno)) {
            return correctAns.filter(item => item !== Qno)
        }
        if (!wrongAns.includes(Qno)) {
            wrongAns.push(Qno)
        }
        document.querySelector(`.opt${opt}`).style.color = 'white';
        document.querySelector(`.opt${opt}`).style.background = '#ff6e00';
    }

}

const Practice_Opts = document.querySelector('.Practice_Opts');
str = '';
for (let i = 1; i <= 3; i++) {
    str += `
    <div class="practiceTestBox">
        <h3>Practice Test ${parseInt(practiceTestNo) + i}</h3>
        <span>Lorem Ipsum is simply dummy text</span>
        <span class="BtnSpan">
            <button>START</button>
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