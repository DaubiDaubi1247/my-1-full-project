// 'use strict'


// let users = [{
//         date: '2017.02.17',
//         raiting: 2,
//         town: 'Las Vegas',
//         position: 0
//     },
//     {
//         date: '2017.02.15',
//         raiting: 5,
//         town: 'Rome',
//         position: 1
//     },
//     {
//         date: '2017.02.16',
//         raiting: 5,
//         town: 'Belgrade',
//         position: 2
//     },
//     {
//         date: '2017.02.14',
//         raiting: 5,
//         town: 'Tahiti',
//         position: 3
//     },
//     {
//         date: '2017.01.14',
//         raiting: 5,
//         town: 'Tahiti',
//         position: 4
//     }
// ];
// let position = 4;



// // function addStars() {
// //     const leftBlocks = document.querySelectorAll('.reviews__body-man-text');
// //     for (const iterator of leftBlocks) {
// //         iterator.insertAdjacentElement
// //     }
// // }

// // addStars()

// const usersBlock = document.querySelector('.reviews__body-wrapper');
// let usersList = document.getElementsByClassName('reviews__body-man');
// // let usersList = usersList;
// const select = document.querySelector('.reviews__header-sort');

// function sortArr(users, choose) {
//     users.sort((a, b) => {
//         if (a[choose] > b[choose]) {
//             return 1
//         }
//         if (a[choose] == b[choose]) {
//             return 0
//         }
//         if (a[choose] < b[choose]) {
//             return -1
//         }
//     });
// }

// select.addEventListener('change', () => {
//     let choose = select.options[select.selectedIndex].value;

//     sortArr(users, choose);

//     let width = 137;
//     let countBlocks = 4;

//     // usersList.forEach((element) => element.style.borderTop = 'none');
//     for (const iterator of usersList) {
//         iterator.style.borderTop = 'none';
//     }
//     usersList[users[0].position].style.borderTop = '2px solid #e2e2e2';

//     for (let factorWidth = countBlocks, index = 0; index < users.length; factorWidth--, index++) {
//         let offsetReviews = (users[index].position > index) ? -width * (users[index].position - index) : width * (index - users[index].position);

//         usersList[users[index].position].style.top = offsetReviews + 'px';
//     }
// });


// const reviewsPopup = document.querySelector('.reviews__popup');
// const reviewsBtn = document.querySelector('.reviews__header-btn').onclick = () => {
//     document.querySelector('body').style.overflow = 'hidden'
//     reviewsPopup.classList.add('open');
// }

// const reviewsBtnSub = document.querySelector('.reviews__popup-btn').onclick = () => {
//     position++;
//     const dataAboutUser = document.querySelectorAll('.create__reviews');
//     users.push(new CreateReviews(dataAboutUser));

//     addUserOnSite();


//     reviewsPopup.classList.remove('open');

//     const countReviews = document.querySelector('#counter');
//     countReviews.textContent = position;

// }

// const closePopup = document.querySelector('.reviews__popup-body').onclick = () => {
//     reviewsPopup.classList.remove('open');
// }

// function sortDate(date) {;
//     return date.split('.').reduceRight((str, el) => {
//         return str + '.' + el;
//     });

// }

// function CreateReviews(dataUser) {
//     this.date = sortDate(dataUser[2].value);
//     this.raiting = dataUser[1].value;
//     this.town = dataUser[0].value;
//     this.position = position;
// }

// function addUserOnSite() {
//     let comment = document.createElement('div');
//     comment.classList.add('reviews__body-man-subtitle');
//     comment.textContent = document.querySelector("#comment").value;

//     let title = document.createElement('div');
//     title.classList.add('reviews__body-man-title');
//     let titleSpan = document.createElement('span');
//     titleSpan.textContent = document.querySelector('#short-review').value;
//     title.append(titleSpan);
//     title.append(users[users.length - 1].date);

//     let reviewRigthBlock = document.createElement('div');
//     reviewRigthBlock.classList.add('reviews__body-man-rigth');
//     reviewRigthBlock.append(title);
//     reviewRigthBlock.append(comment);


//     let leftText = document.createElement('div');
//     leftText.classList.add('reviews__body-man-text');
//     let leftTextSpan = document.createElement('span');
//     leftTextSpan.textContent = document.querySelector('#name').value;
//     leftText.append(leftTextSpan);
//     leftText.append('Visited ' + users[users.length - 1].town);

//     let avatar = document.createElement('img');
//     avatar.src = 'https://sun9-77.userapi.com/impg/tnd21133-KFyjeO3ws1N77zZ5gXESoMVqfeu5g/8syAdEmQM-A.jpg?size=1242x1144&quality=96&sign=aeabf526259239ce75e8278a538defc3&type=album';

//     let reviewLeftBlock = document.createElement('div');
//     reviewLeftBlock.classList.add('reviews__body-man-left');
//     reviewLeftBlock.append(avatar, leftText);

//     let reviewBlock = document.createElement('div');
//     reviewBlock.classList.add('reviews__body-man');
//     reviewBlock.append(reviewLeftBlock, reviewRigthBlock);

//     const reviewBody = document.querySelector('.reviews__body-wrapper');

//     reviewBody.insertAdjacentElement(
//         'afterbegin',
//         reviewBlock,
//     );
// }

'use strict';