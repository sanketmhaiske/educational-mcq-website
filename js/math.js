function mathTable() {
    document.querySelector('.mathTableOpts').style.display = 'flex'
}
function closeMathTestBox() {
    document.querySelector('.mathTableOpts').style.display = 'none'
}

function takeTestNow() {
    document.querySelector('.availableTests').style.display = 'flex';
}

// Math Practice Test 
let testTypes = document.querySelector('.testTypes');
str = '';
for (let i = 1; i <= 60; i++) {
    str += `<a href='mathPractice.html' onclick='MathsTest(${i})'> Test ${i} </a>`
}
testTypes.innerHTML = str;

function MathsTest(testNo) {
    sessionStorage.setItem('MathsTestNo', testNo)
}

