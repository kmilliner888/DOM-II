// Your code goes here
const link = document.querySelector('nav');
link.addEventListener('mouseover', (event) => {
    event.target.style.color="teal";
    event.preventDefault();
});

window.addEventListener('resize', () => {
const changeHeader = document.querySelector('.intro img');
changeHeader.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
});

const blockColor1 = document.querySelector('.content-section h2');
blockColor1.addEventListener('mousedown', (event) => {
    event.target.style.backgroundColor= "teal";
    event.target.style.color= 'white';
});

const blockColor2 = document.querySelector('.inverse-content h2');
blockColor2.addEventListener('mousedown', (event) => {
    event.target.style.backgroundColor= "teal";
    event.target.style.color= 'white';
});

const bodyColor = document.querySelector('body');
bodyColor.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = "teal";
    event.target.style.color = "pink";
})


const picChange1 = document.querySelector('.img-content img');
picChange1.addEventListener('mouseenter', (event) => {
    event.target.style.transform = 'scale(1.1)';
    event.target.style.transistion = 'all 0.3s';
})

picChange1.addEventListener('mouseleave', (event) => {
    event.target.style.transform = 'scale(1)';
})

const picChange2 = document.querySelector('.inverse-content .img-content img');
picChange2.addEventListener('mouseenter', (event) => {
    event.target.style.transform = 'scale(1.1)';
    event.target.style.transistion = 'all 0.3s';
})

picChange2.addEventListener('mouseleave', (event) => {
    event.target.style.transform = 'scale(1)';
})

const bottomPicBlur = document.querySelector('.content-destination img');
bottomPicBlur.addEventListener('dblclick', (event) => {
    event.target.style.transform = 'rotate(180deg)';
})


window.addEventListener('scroll', () => {
    const pageBlack = document.querySelector('body')
    pageBlack.style.backgroundColor = "black";
    pageBlack.style.color = "white";
    });

window.addEventListener('scroll', () => {
    const navBlack = document.querySelector('.main-navigation')
    navBlack.style.backgroundColor = "black";        
    navBlack.style.color = "white";
    });

window.addEventListener('scroll', () => {        
    const navLinks = document.querySelector('.nav a');      
    navLinks.style.color = "white";
    });


const submitButton = document.querySelector('.content-pick .btn');
submitButton.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "yellow";
    event.target.style.color = "black";
})

const footerColor = document.querySelector('.footer');
footerColor.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'hotpink';
})

const bodyColor2 = document.querySelector('body');
bodyColor2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'hotpink';
    event.target.style.color= 'black';
    
})

const inversePColor = document.querySelector('.inverse-content p');
inversePColor.addEventListener('click', (event) => {
    event.target.style.backgroundColor= 'yellow';
    event.target.style.color = "black";
    event.stopPropagation();
})