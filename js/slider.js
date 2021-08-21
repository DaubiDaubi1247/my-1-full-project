function moveSlide(offset, line) {
    for (const i of line) {
        i.style.left = offset + 'px';
    }
}

const slider1 = document.querySelector('.magical__slider');
const sliderLine = document.querySelectorAll('.magical__slider-line');
const width = 1150;
let offset = 0;
let end = -width * 5;
let btns = document.querySelectorAll('.slider__btn');
let offsetBtn = 1;
const countSlide = 5;

// придумать как сдедать так что бы кнопки тоже переключались
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = () => {
        offsetBtn = i;
        clearInterval(interval);
        offset = 0;
        slider();
    }

}

let index = 1;

function changeBtns() {
    btns[index - 1].classList.remove('button__active');
    if (index == countSlide) {
        index = 0;
    }
    btns[index].classList.add('button__active');
    index++;
}

function slider() {
    offset -= width * offsetBtn;
    if (offset <= end) {
        offset = 0;
    }
    changeBtns();
    moveSlide(offset, sliderLine);

}
let interval = setInterval(slider, 4000);



const sliderVisited = document.querySelector('.visited__slider-line');
const sliderLineVisited = document.querySelectorAll('.visited__slider-rating');
const widthItem = 383;
let offsetVisited = 0;
const endVisit = -383 * 4;

const visitedRigthBtn = document.querySelector('#visited__button-rigth');
visitedRigthBtn.onclick = () => {
    sliderVisit();
    clearInterval(interval2);
};
const visitedLeftBtn = document.querySelector('#visited__button-left');
visitedLeftBtn.onclick = () => {
    sliderVisit(-1);
    clearInterval(interval2);
};

function sliderVisit(side = 1) {

    offsetVisited -= widthItem * side;
    if (offsetVisited <= endVisit || offsetVisited > 0) {
        offsetVisited = 0;
    }
    moveSlide(offsetVisited, sliderLineVisited);
}
let interval2 = setInterval(sliderVisit, 2000);