function startTest() {
    document.querySelector('.testInfo').style.display = 'none';
    document.querySelector('.practiceTest').style.display = 'flex';
    document.querySelector('.practiceTest').innerHTML = `
    <div class="questionArea">
        <div class="question">
            <strong>
               <span style='font-size: 24px;'>Q.</span> 
               <div class='questionImg'>
               </div>
               <span style="margin-top: 16px;">
                 Ipsum is simply dummy text of the printing and typesetting industry.
               </span>
            </strong>
            <form>
                <div class="opt">
                    <input type="radio" id="opt1" name="opt" value="opt1" onclick="submitAns('opt1')"/>
                    <label for="opt1" class='opt1'>Option 1</label>
                </div>
                <div class="opt">
                    <input type="radio" id="opt2" name="opt" value="opt2" onclick="submitAns('opt2')"/>
                    <label for="opt2" class='opt2'>Option 2</label>
                </div>
                <div class="opt">
                    <input type="radio" id="opt3" name="opt" value="opt3" onclick="submitAns('opt3')"/>
                    <label for="opt3" class='opt3'>Option 3</label>
                </div>
                <div class="opt">
                    <input type="radio" id="opt4" name="opt" value="opt4" onclick="submitAns('opt4')"/>
                    <label for="opt4" class='opt4'>Option 4</label>
                </div>
            </form>
        </div>
        <div class="answer">
           
        </div>
        <button class="nextQueBtn">NEXT QUESTION</button>
    </div>

    <div class="progress">
        <h2>YOUR PROGRESS</h2>
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
    if (opt == 'opt1') {
        document.querySelector(`.${opt}`).style.color = 'green';
    } else {
        document.querySelector(`.${opt}`).style.color = 'red';
    }

    const ans = document.querySelector('.answer');
    ans.style.display = 'flex';
    ans.innerHTML = `
        <span>
            CORRECT ANSWER : Option 1
        </span>
   `
}