const galleryContainer = document.querySelector('.gallery-container');
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
        this.currentIndex = 0;
        this.updateGallery();
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3');
        });

        const indicesToShow = [
            this.currentIndex % this.carouselArray.length,
            (this.currentIndex + 1) % this.carouselArray.length,
            (this.currentIndex + 2) % this.carouselArray.length,
        ];

        indicesToShow.forEach((index, i) => {
            this.carouselArray[index].classList.add(`gallery-item-${i + 1}`);
        });
    }

    nextImage() {
        this.currentIndex++;
        this.updateGallery();
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems);

setInterval(() => exampleCarousel.nextImage(), 3000);

const textToType = 'META WAVE NFT is your pass to Meta Record Label ecosystem. It is your access to our industry experts, established artists, and partners.';
const typingSpeed = 20;
const typedTextElement = document.getElementById('typed-text');

let currentIndex = 0;

function typeText() {
    if (currentIndex < textToType.length) {
        typedTextElement.textContent += textToType.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeText, typingSpeed);
    }
}

typeText();

function viewDiv1(){
    document.getElementById("story-1").style.display = "flex";
    document.getElementById('button-1').style = `background: #222222; color: #8DFD1B`;
    document.getElementById("story-2").style.display = "none";
    document.getElementById('button-2').style = `background: #000000; color: #ffffff`;
    document.getElementById("story-3").style.display = "none";
    document.getElementById('button-3').style = `background: #000000; color: #ffffff`;
};

function viewDiv2(){
    document.getElementById("story-1").style.display = "none";
    document.getElementById('button-1').style = `background: #000000; color: #ffffff`;
    document.getElementById("story-2").style.display = "flex";
    document.getElementById('button-2').style = `background: #222222; color: #8DFD1B`;
    document.getElementById("story-3").style.display = "none";
    document.getElementById('button-3').style = `background: #000000; color: #ffffff`;
};

function viewDiv3(){
    document.getElementById("story-1").style.display = "none";
    document.getElementById('button-1').style = `background: #000000; color: #ffffff`;
    document.getElementById("story-2").style.display = "none";
    document.getElementById('button-2').style = `background: #000000; color: #ffffff`;
    document.getElementById("story-3").style.display = "flex";
    document.getElementById('button-3').style = `background: #222222; color: #8DFD1B`;
};

let roadmap = document.querySelector(".roadmap");

function animationCircle1() {
    setInterval(() => {
        document.querySelector(".anim1").classList.add('hover')
        let div = document.createElement('div');
        div.classList.add('anim1');
        roadmap.prepend(div);
        setTimeout(function(){div.remove()}, 10000);
    }, 1000);
}
animationCircle1();

function animationCircle2() {
    setInterval(() => {
        document.querySelector(".anim2").classList.add('hover')
        let div = document.createElement('div');
        div.classList.add('anim2');
        roadmap.prepend(div);
        setTimeout(function(){div.remove()}, 10000);
    }, 1000);
}
animationCircle2();

function animationCircle3() {
    setInterval(() => {
        document.querySelector(".anim3").classList.add('hover')
        let div = document.createElement('div');
        div.classList.add('anim3');
        roadmap.prepend(div);
        setTimeout(function(){div.remove()}, 10000);
    }, 1000);
}
animationCircle3();

function viewDiv4(){
    document.getElementById("answer-1").style.display = "flex";
    document.getElementById('mark-1').style = `background: #A8A8A8`;
    document.getElementById("answer-2").style.display = "none";
    document.getElementById('mark-2').style = `background: #ffffff`;
    document.getElementById("answer-3").style.display = "none";
    document.getElementById('mark-3').style = `background: #ffffff`;
};

function viewDiv5(){
    document.getElementById("answer-1").style.display = "none";
    document.getElementById('mark-1').style = `background: #ffffff`;
    document.getElementById("answer-2").style.display = "flex";
    document.getElementById('mark-2').style = `background: #A8A8A8`;
    document.getElementById("answer-3").style.display = "none";
    document.getElementById('mark-3').style = `background: #ffffff`;
};

function viewDiv6(){
    document.getElementById("answer-1").style.display = "none";
    document.getElementById('mark-1').style = `background: #ffffff`;
    document.getElementById("answer-2").style.display = "none";
    document.getElementById('mark-2').style = `background: #ffffff`;
    document.getElementById("answer-3").style.display = "flex";
    document.getElementById('mark-3').style = `background: #A8A8A8`;
};

gsap.registerPlugin(ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })
}