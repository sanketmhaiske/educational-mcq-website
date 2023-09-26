
// Practice Test 
let testTypes = document.querySelector('.testTypes');
str = '';
for (let i = 1; i <= 60; i++) {
    str += `<a href='practiceTest.html' onclick='practiceTest(${i})'> Test ${i} </a>`
}
testTypes.innerHTML = str;


function takeTestNow() {
    document.querySelector('.availableTests').style.display = 'flex';
}
function closeTestBox() {
    document.querySelector('.availableTests').style.display = 'none';
}

function practiceTest(testNo) {
    sessionStorage.setItem('practiceTestNo', testNo)
}