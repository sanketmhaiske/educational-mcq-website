function mathTable() {
    document.querySelector('.mathTableOpts').style.display = 'flex'
}
function closeMathTestBox() {
    document.querySelector('.availableTests').style.display = 'none'
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

// Maths Table 
let mathTables = document.querySelector('.mathTables');
str = '';
for (let i = 1; i <= 9; i++) {
    str += `<a href='mathTable.html' onclick='mathTableNo(${i})'> Table ${i} </a>`
}
mathTables.innerHTML = str;

function mathTableNo(tableNo) {
    sessionStorage.setItem('MathsTableNo', tableNo)
}