// ===============================
// ELEMENTS
// ===============================

const envelope = document.getElementById("envelope");
const opening = document.getElementById("opening");

const letterSection = document.getElementById("letterSection");
const gallery = document.getElementById("gallery");
const timerSection = document.getElementById("timerSection");
const ending = document.getElementById("ending");

const typedText = document.getElementById("typedText");
const timer = document.getElementById("timer");

const music = document.getElementById("bgMusic");
const hearts = document.getElementById("hearts");
const surpriseButton = document.getElementById("surpriseButton");
const volumeSlider = document.getElementById("volumeSlider"); // Added slider element

// ===============================
// YOUR LETTER ❤️
// Change this to your own words
// ===============================

const message = `

I don't think words can ever fully describe how much you mean to me.

Thank you for making ordinary days feel extraordinary.

Thank you for every smile,
every laugh,
every memory,
and every little moment we have shared.

You're not my what if. You're my even if.
Even if nothing goes as planned.
Even if we are tired and the words come out wrong.
Even if the days are long and our patience is short.
Even if everything goes wrong and it feels like the whole world is falling apart.
I promise to always appreciate you,
support you,
and love you with all my heart.

You truly are my favorite person.

I love you so so much.

❤️

Forever Yours,
Hazim

`;

// ===============================
// Typing Effect
// ===============================

let index = 0;

function typeLetter(){

    if(index < message.length){

        typedText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,100);

    }

}

// ===============================
// Envelope Click
// ===============================

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        opening.style.display="none";

        letterSection.style.display="flex";
        gallery.style.display="flex";
        timerSection.style.display="flex";
        ending.style.display="flex";

        letterSection.classList.add("fadeIn");
        gallery.classList.add("fadeIn");
        timerSection.classList.add("fadeIn");
        ending.classList.add("fadeIn");

        typeLetter();

        // Sets the audio volume to whatever the slider is currently pointing to right before playing
        if (music && volumeSlider) {
            music.volume = parseFloat(volumeSlider.value);
        }
        
        music.play().catch(()=>{});

    },900);

});

// ===============================
// Floating Hearts
// ===============================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animationDuration=(4+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,300);

// ===============================
// Relationship Timer
// CHANGE THE DATE BELOW
// ===============================

const anniversary = new Date("2026-03-21");

function updateTimer(){

    const now=new Date();

    const difference=now-anniversary;

    const days=Math.floor(difference/(1000*60*60*24));

    const hours=Math.floor(
        (difference%(1000*60*60*24))
        /(1000*60*60)
    );

    const minutes=Math.floor(
        (difference%(1000*60*60))
        /(1000*60)
    );

    timer.innerHTML=
        `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes`;

}

updateTimer();

setInterval(updateTimer,60000);

// ===============================
// Surprise Button
// ===============================

surpriseButton.addEventListener("click",()=>{

    document.body.style.background="#111";

    document.body.style.color="white";

    // Smoothly update the slider container style to blend in with dark mode
    const sliderBox = document.querySelector(".fixed-volume-control");
    if (sliderBox) {
        sliderBox.style.background = "rgba(0, 0, 0, 0.4)";
    }

    alert("❤️ I will always choose you cayangggg. ❤️");

    startFireworks();

});

// ===============================
// Simple Fireworks
// ===============================

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

});

function firework(){

    const x=Math.random()*canvas.width;

    const y=Math.random()*canvas.height*0.6;

    for(let i=0;i<60;i++){

        const angle=Math.random()*Math.PI*2;

        const radius=Math.random()*100;

        ctx.beginPath();

        ctx.arc(
            x+Math.cos(angle)*radius,
            y+Math.sin(angle)*radius,
            2,
            0,
            Math.PI*2
        );

        ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

        ctx.fill();

    }

}

function startFireworks(){

    let count=0;

    const interval=setInterval(()=>{

        ctx.clearRect(0,0,canvas.width,canvas.height);

        firework();

        count++;

        if(count>20){

            clearInterval(interval);

            ctx.clearRect(0,0,canvas.width,canvas.height);

        }

    },300);

}

// ===============================
// Dynamic Volume Control Event
// ===============================
if (volumeSlider && music) {
    volumeSlider.addEventListener("input", (e) => {
        music.volume = parseFloat(e.target.value);
    });
}
