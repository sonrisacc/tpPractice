let data = {
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

// create the tree from data set
// add show/hide node ability

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
    li.textContent = key;
    parent.append(li);
    if (input[key]) {
      menuGenerator(input[key], li);
    }
  }
};
menuGenerator(data, parentDiv);
