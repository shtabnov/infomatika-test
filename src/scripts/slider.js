let blocks = document.querySelectorAll('.hero__hex');
let wrapper = document.querySelector('.hero__wrapper');
var count = 0; // счетчик события колеса прокрутки

let obj = {
    one: ['active', 'next', 'prenext', 'prevnone', 'prevnone'],
    two: ['prev', 'active', 'next', 'prenext', 'prevnone'],
    three: ['preprev', 'prev', 'active', 'next', 'prenext'],
    four: ['nextnone', 'preprev', 'prev', 'active', 'next'],
    five: ['nextnone', 'nextnone', 'preprev', 'prev', 'active']
};

for (let blocksItem of blocks) {
    blocksItem.addEventListener('click', (event) => {

        let target = event.target

        if (event.path[0] != blocksItem) {
            target = event.path[1]
        }

        if (target.classList.contains('one')) {
            blocks.forEach(el => el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone'));
            for(let i=0; i < blocks.length; i++) {
                blocks[i].classList.add(obj.one[i]);
            }
        }

        if (target.classList.contains('two')) {
            blocks.forEach(el => el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone'));
            for(let i=0; i < blocks.length; i++) {
                blocks[i].classList.add(obj.two[i]);
            }
        }

        if (target.classList.contains('three')) {
            blocks.forEach(el => el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone'));
            for(let i=0; i < blocks.length; i++) {
                blocks[i].classList.add(obj.three[i]);
            }
        }

        if (target.classList.contains('four')) {
            blocks.forEach(el => el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone'));
            for(let i=0; i < blocks.length; i++) {
                blocks[i].classList.add(obj.four[i]);
            }
        }

        if (target.classList.contains('five')) {
            blocks.forEach(el => el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone'));
            for(let i=0; i < blocks.length; i++) {
                blocks[i].classList.add(obj.five[i]);
            }
        }
    })
}


if (wrapper.addEventListener) {
    if ('onwheel' in document) {
        wrapper.addEventListener("wheel", onWheel);
    } else if ('onmousewheel' in document) {
        wrapper.addEventListener("mousewheel", onWheel);
    } else {
        wrapper.addEventListener("MozMousePixelScroll", onWheel);
    }
} else {
        wrapper.attachEvent("onmousewheel", onWheel);
    }



function onWheel(e) {  
    e = e || window.event;
    
    var delta = e.deltaY || e.detail || e.wheelDelta;

    count = count + delta;

    if (count > 200) {
        count = 200;
    }
    if (count < -200) {
        count = -200
    }

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);

  if (count == 0) {
    blocks.forEach(el => el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone'));
    for(let i=0; i < blocks.length; i++) {
        blocks[i].classList.add(obj.three[i]);
    }
  }
  if (count == 100) {
    blocks.forEach(el => el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone'));
    for(let i=0; i < blocks.length; i++) {
        blocks[i].classList.add(obj.two[i]);
    }
  }
  if (count == 200) {
    blocks.forEach(el => el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone'));
    for(let i=0; i < blocks.length; i++) {
        blocks[i].classList.add(obj.one[i]);
    }
  }
  if (count == -100) {
    blocks.forEach(el => el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone'));
    for(let i=0; i < blocks.length; i++) {
        blocks[i].classList.add(obj.four[i]);
    }
  }
  if (count == -200) {
    blocks.forEach(el => el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone'));
    for(let i=0; i < blocks.length; i++) {
        blocks[i].classList.add(obj.five[i]);
    }
  }
}
