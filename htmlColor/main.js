// neither of them is a true array

// let pTags2 = Array.from(document.getElementsByTagName('p'));
let pTags = document.querySelectorAll('p');

pTags.forEach(cur => {
  let curParagrah = cur.textContent.trim().split(' ');
  cur.innerHTML = '';
  curParagrah.forEach(word => {
    let span = document.createElement('span');
    span.textContent = word;
    cur.append(span);
  });
});

const changeColor = input => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  input.style.color = `rgb(${r},${g},${b})`;
};

let spanTags = document.querySelectorAll('span');
spanTags.forEach(cur => {
  setInterval(changeColor(cur), 1000);
});
