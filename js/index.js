
// Practice Test 
let testTypes1 = document.querySelector('.testTypes1');
let testTypes2 = document.querySelector('.testTypes2');
let testTypes3 = document.querySelector('.testTypes3');
let testTypes4 = document.querySelector('.testTypes4');
str1 = '';
for (let i = 1; i <= 15; i++) {
    str1 += `<a href='/Test${i}/practiceTest1.html' onclick='practiceTest(${1})'> Test ${i} </a>`
}
testTypes1.innerHTML = str1;

str2 = '';
for (let i = 16; i <= 30; i++) {
    str2 += `<a> Test ${i} </a>`
}
testTypes2.innerHTML = str2;

str3 = '';
for (let i = 31; i <= 45; i++) {
    str3 += `<a> Test ${i} </a>`
}
testTypes3.innerHTML = str3;

str4 = '';
for (let i = 46; i <= 60; i++) {
    str4 += `<a> Test ${i} </a>`
}
testTypes4.innerHTML = str4;



function takeTestNow() {
    document.querySelector('.availableTests').style.display = 'flex';
}
function closeTestBox() {
    document.querySelector('.availableTests').style.display = 'none';
}

function practiceTest(testNo) {
    sessionStorage.setItem('practiceTestNo', testNo)
   
}
