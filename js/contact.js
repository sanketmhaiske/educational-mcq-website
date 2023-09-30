

document.querySelector('.submit').addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.contactform').style.display = 'none';
    document.querySelector('.confirmation').style.display = 'flex';

})