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
        // если клик происходит по тексту, присваеваем target родительский блок в котором находится текст
        if (event.path[0] != blocksItem) {
            target = event.path[1]
        }

        if (target.classList.contains('one')) {
            count = 200;
            blocks.forEach((el, index) => {
                el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone');
                blocks[index].classList.add(obj.one[index]);
            })
        }

        if (target.classList.contains('two')) {
            count = 100;
            blocks.forEach((el, index) => {
                el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone');
                blocks[index].classList.add(obj.two[index]);
            })
        }

        if (target.classList.contains('three')) {
            count = 0;
            blocks.forEach((el, index) => {
                el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone');
                blocks[index].classList.add(obj.three[index]);
            })
        }

        if (target.classList.contains('four')) {
            count = -100;
            blocks.forEach((el, index) => {
                el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone');
                blocks[index].classList.add(obj.four[index]);
            })
        }

        if (target.classList.contains('five')) {
            count = -200;
            blocks.forEach((el, index) => {
                el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone');
                blocks[index].classList.add(obj.five[index]);
            })
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
    var delta = e.wheelDelta || e.detail || e.deltaY ;

    count = count + delta;

    if (count > 240) {
        count = 240;
    }
    if (count < -240) {
        count = -240;
    }

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);

  if (count == 0) {
    blocks.forEach((el, index) => {
        el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone');
        blocks[index].classList.add(obj.three[index]);
    })
  }
  if (count == 120) {
    blocks.forEach((el, index) => {
        el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone');
        blocks[index].classList.add(obj.two[index]);
    })
  }
  if (count == 240) {
    blocks.forEach((el, index) => {
        el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone');
        blocks[index].classList.add(obj.one[index]);
    })
  }
  if (count == -120) {
    blocks.forEach((el, index) => {
        el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone');
        blocks[index].classList.add(obj.four[index]);
    })
  }
  if (count == -240) {
    blocks.forEach((el, index) => {
        el.classList.remove('preprev', 'prev', 'next', 'prenext', 'active', 'prevnone', 'nextnone');
        blocks[index].classList.add(obj.five[index]);
    })
  }
}
