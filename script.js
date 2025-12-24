// Countdown target - today 10:10 PM
const countdownDate = new Date(2025, 11, 24, 22, 36, 0); 

const countdownScreen = document.getElementById('countdownScreen');
const countdownText = document.getElementById('countdownText');
const openScreen = document.getElementById('openScreen');
const openBtn = document.getElementById('openBtn');
const messageScreen = document.getElementById('messageScreen');
const typingText = document.getElementById('typingText');
const nextBtn = document.getElementById('nextBtn');
const photoScreen = document.getElementById('photoScreen');
const happyBirthdayText = document.getElementById('happyBirthdayText');

// Fireworks/confetti canvas
const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

// Demo message (~200 words, pseudo romantic)
const messageContent = `
   			🎂🌷🥳HAPPYYYY  BIRTHDAYYYYYYY🎂🌷🥳
Hey MADAM JI🎀, today is all about you! I hope your birthday is as amazing as your smile. 
I want to tell you how much I cherish every single moment with you. 
You make my life brighter, happier, and so much more fun. 
I love your laugh, your silly jokes, your care, your warmth, everything. 
I hope this year brings you endless joy, surprises, and happiness. 
You deserve all the love in the world. I promise to always be there for you, 
to make you smile when you’re down, and to celebrate every moment of life with you. 
Never forget that you are loved beyond words. 
I love you babe 🌷💓
`;

// Countdown function
let countdownInterval = setInterval(() => {
    let now = new Date();
    let distance = countdownDate - now;
    if(distance <= 0){
        clearInterval(countdownInterval);
        countdownScreen.classList.add('hidden');
        openScreen.classList.remove('hidden');
        startFireworks(); // start fireworks immediately
    } else {
        let hrs = Math.floor(distance / (1000*60*60));
        let mins = Math.floor((distance % (1000*60*60)) / (1000*60));
        let secs = Math.floor((distance % (1000*60)) / 1000);
        countdownText.innerText = 
            `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    }
}, 1000);

// Button to show message
openBtn.addEventListener('click', () => {
    openScreen.classList.add('hidden');
    messageScreen.classList.remove('hidden');
    typeMessage();
});

// Typing effect
function typeMessage() {
    let i = 0;
    typingText.innerHTML = '';
    nextBtn.classList.add('hidden');
    let interval = setInterval(() => {
        if(i < messageContent.length){
            typingText.innerHTML += messageContent[i];
            i++;
        } else {
            clearInterval(interval);
            nextBtn.classList.remove('hidden');
        }
    }, 20); // adjust speed here
}

// Next button to show photo + Happy Birthday
nextBtn.addEventListener('click', () => {
    messageScreen.classList.add('hidden');
    photoScreen.classList.remove('hidden');
    animateHappyBirthday();
});

// Happy Birthday Animation
function animateHappyBirthday(){
    const text = 'H A P P Y   B I R T H D A Y';
    let i = 0;
    function step(){
        if(i < text.length){
            happyBirthdayText.innerHTML += text[i];
            i++;
            setTimeout(step, 200);
        }
    }
    step();
}

// Simple fireworks/confetti
function startFireworks(){
    let particles = [];
    for(let i=0;i<100;i++){
        particles.push({
            x: Math.random()*confettiCanvas.width,
            y: Math.random()*confettiCanvas.height,
            dx: (Math.random()-0.5)*4,
            dy: (Math.random()-0.5)*4,
            color: `hsl(${Math.random()*360},100%,50%)`,
            radius: Math.random()*3+2
        });
    }
    function draw(){
        ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
        particles.forEach(p=>{
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.radius,0,2*Math.PI);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.x += p.dx;
            p.y += p.dy;
            if(p.x <0 || p.x>confettiCanvas.width) p.dx*=-1;
            if(p.y<0 || p.y>confettiCanvas.height) p.dy*=-1;
        });
        requestAnimationFrame(draw);
    }
    draw();
}
function checkPassword(){
  const input = document.getElementById("passwordInput").value;
  const correctPassword = "Tarunn2422";

  if(input === correctPassword){
    document.getElementById("passwordScreen").classList.add("hidden");
    document.getElementById("mainWebsite").classList.remove("hidden");
  } else {
    document.getElementById("errorText").innerText = "Wrong password ❌";
  }
}
