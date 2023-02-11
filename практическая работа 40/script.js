const elem = document.querySelector('#elem');
const body = document.body;



elem.firstElementChild.style.color = 'red';

elem.lastElementChild.style.color = 'red';

for (let node of elem.children) {
    node.append('!');
}

