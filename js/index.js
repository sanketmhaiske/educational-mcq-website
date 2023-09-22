function takeTestNow() {
    let testBox = document.querySelector('.testBox')
    testBox.style.display = 'flex';
    testBox.innerHTML = `
    <div class='closeTestBox' onclick='closeTestBox()'></div>
    <div class="testBoxContent">
        <h2> CHOOSE TEST </h2>
        <div class='testTypes'>
          <a href='testDetails.html'> TEST TYPE 1</a>
          <span> TEST TYPE 2</span>
          <span> TEST TYPE 3</span>
          <span> TEST TYPE 4</span>
          <span> TEST TYPE 5</span>
          <span> TEST TYPE 6</span>
          <span> TEST TYPE 7</span>
          <span> TEST TYPE 8</span>
          <span> TEST TYPE 9</span>
          <span> TEST TYPE 10</span>
          <span> TEST TYPE 11</span>
          <span> TEST TYPE 12</span>
          <span> TEST TYPE 13</span>
          <span> TEST TYPE 14</span>
          <span> TEST TYPE 15</span>
          <span> TEST TYPE 16</span>
        </div>
    </div>
   `
    document.body.appendChild(testBox);
}

function closeTestBox() {
    document.querySelector('.testBox').style.display = 'none';
}

