"use strict"
// BURGER
console.log('привет!')

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})

// POPAP
let headerBtn = document.querySelector('.header__btn');
let popap = document.querySelector('.popap');
let popapClose = document.querySelector('.popap__close');

headerBtn.onclick = function() {
    popap.style.display = "block"
}

popapClose.onclick = function() {
    popap.style.display = "none"
}

window.onclick = function(event) {
    let target = event.target

    if (target === popap) {
        popap.style.display = "none"
    }
}

// TABS
const headerItem = document.querySelectorAll('.tabs__item');
const mainContent = document.querySelectorAll('.main__content');

for (let item of headerItem) {
    item.addEventListener('click', function() {
        for (let element of mainContent) {
            element.classList.add('hidden')
        }
        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove('hidden')
    })
}

// ACCORDION
const titles = document.querySelectorAll('.accordion__title');
const contents = document.querySelectorAll('.accordion__content');

    titles.forEach(item => item.addEventListener('click', () => {
        const activeContent = document.querySelector('#' + item.dataset.tab);

        if (activeContent.classList.contains('opened')) {
            activeContent.classList.remove('opened');
            item.classList.remove('opened');
            activeContent.style.maxHeight = 0;
        } else {
            contents.forEach(element => {
                element.classList.remove('opened');
                element.style.maxHeight = 0;
            });

            titles.forEach(element => element.classList.remove('opened'));

            item.classList.add('opened');
            activeContent.classList.add('opened');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
    }))


    
// SLIDER

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();


// FILTER
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const objects = document.querySelectorAll('.object');
  
    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');
  
        objects.forEach(function (object) {
          object.classList.remove('active');
          if (filter === 'all' || object.classList.contains(filter)) {
            object.classList.add('active');
          }
        });
      });
    });
  });
  
