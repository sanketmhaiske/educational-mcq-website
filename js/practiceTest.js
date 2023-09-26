// Practice test name 
const practiceTestNo = sessionStorage.getItem('practiceTestNo')
document.querySelector('.testName').innerHTML = `
  Practice Test ${practiceTestNo}
`


function startTest() {
    document.querySelector('.testInfo').style.display = 'none';
    document.querySelector('.practiceTest').style.display = 'flex';
    document.querySelector('.practiceTest').innerHTML = `
    <div class="questionArea">
        <div class="question">
            <strong><span style='font-size: 24px;'>Q.</span> In the context of computing, what is the full form of URL ?</strong>
            <form>
                <div class="opt">
                    <input type="radio" id="opt1" name="opt" value="opt1" onclick="submitAns('opt1')"/>
                    <label for="opt1" class='opt1'>Undistributed Resource Locator </label>
                </div>
                <div class="opt">
                    <input type="radio" id="opt2" name="opt" value="opt2" onclick="submitAns('opt2')"/>
                    <label for="opt2" class='opt2'>Unified Resource Locator </label>
                </div>
                <div class="opt">
                    <input type="radio" id="opt3" name="opt" value="opt3" onclick="submitAns('opt3')"/>
                    <label for="opt3" class='opt3'>Uniform Resource Locator</label>
                </div>
                <div class="opt">
                    <input type="radio" id="opt4" name="opt" value="opt4" onclick="submitAns('opt4')"/>
                    <label for="opt4" class='opt4'>Uniform Region Locator</label>
                </div>
            </form>
        </div>
        <button class="nextQueBtn">NEXT QUESTION</button>
    </div>

    <div class="progress">
        <h2>YOUR PROGRESS</h2>
        <span>Answer 12 questions correctly.</span>
        <div class="checkAns">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
        </div>
    </div>
`
}

function submitAns(opt) {
    if (opt == 'opt3') {
        document.querySelector(`.${opt}`).style.color = 'white';
        document.querySelector(`.${opt}`).style.background = 'green';
    } else {
        document.querySelector(`.${opt}`).style.color = 'white';
        document.querySelector(`.${opt}`).style.background = '#ff6e00';
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
            <strong>${20 + (i*5)}</strong>
            <span style="font-size: 14px;
            margin: 10px 0;
            color: #454545;">QUESTIONS</span>
        </div>
    </div>
    `
}
Practice_Opts.innerHTML = str;