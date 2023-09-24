const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom-section');

let slideNum = 1;
const length = images.length;

// creating buttons
for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.className = 'button';
    bottom.append(div);  
}

const buttons =document.querySelectorAll('.button');
// keeping first pointer in white
buttons[0].style.backgroundColor = "white";

// resetting the colors to all pointers after adding the color to pointer in given function
const resetBg = () => {
    buttons.forEach(button =>{
        button.style.backgroundColor = "transparent";
    })
}

//pointer functionality
buttons.forEach((button,idx)=>{
    button.addEventListener('click',()=>{
        slider.style.transform = `translateX(-${idx * 500}px)`;
        slideNum = idx+1;
        resetBg();
        button.style.backgroundColor = "white";
    })
})


// next slide
const nextSlide = () =>{
    slider.style.transform = `translateX(-${slideNum * 500}px)`;
    slideNum++;
};

const prevSlide = () =>{
    // you are in 3 slide => (slideNum-2) means 1
    // (slideNum-2) * 500 means you reach 2nd slide
    // bcz first slide starts at 0px and 2nd slide starts at 500px[consider the width...] 
    slider.style.transform = `translateX(-${(slideNum - 2) * 500}px)`;
    slideNum--;
};
const getFirstSlide = () =>{
    slider.style.transform = `translateX(0px)`;
    slideNum = 1;
};

const getLastSlide = () =>{
    slider.style.transform = `translateX(-${(length -1) * 500}px)`;
    slideNum = length;
};

// reset color and add color
const changeColor = () =>{
    resetBg();
    buttons[slideNum - 1].style.backgroundColor = "white";
}

right.addEventListener('click',() =>{
    slideNum < length ? nextSlide() : getFirstSlide();
    changeColor();
});

left.addEventListener('click',() =>{
    slideNum > 1 ? prevSlide() : getLastSlide();
    changeColor();
});

// Automatic
let slide = 1;
function automaticSlider(){
    setTimeout(()=>{
        automaticSlider();
    },2000);
    if (slide >= length) {
        slide = 0;
    }
    slider.style.transform = `translateX(-${slide * 500}px)`;
    slide++;
};
// automaticSlider();

