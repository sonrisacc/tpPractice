const data = {
  Animals: {
    Mammals: { Cows: {}, Donkeys: {}, Cats: {} },
    other: { Snakes: {}, Birds: {}, Lizards: {} }
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {}
    },
    Flowering: {
      redbud: {},
      magnolia: {}
    }
  }
};

// create the tree from menueData set
let body = document.body;
let parentDiv = document.createElement('div');
parentDiv.className = 'tree';
body.append(parentDiv);

const menuGenerator = (input, parent) => {
  let keysArr = Object.keys(input);
  if (keysArr.length >= 1) {
    let ul = document.createElement('ul');
    parent.append(ul);
    parent = parent.lastChild;
  }
  for (key of keysArr) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = key;
    li.append(span);
    parent.append(li);
    if (input[key]) {
      menuGenerator(input[key], li);
    }
  }
};
menuGenerator(data, parentDiv);
// add show/hide node ability

const clickHandler = event => {
  // console.log('line47', event.target.tagName);
  if (event.target.tagName != 'SPAN') {
    return;
  }
  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) return; // no children

  childrenContainer.hidden = !childrenContainer.hidden;
};
let tree = document.querySelector('div');
tree.addEventListener('click', clickHandler);
