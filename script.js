// ===============================
// FIRST PAGE BUTTONS
// ===============================

let size = 1;

const shiza = document.querySelector(".shiza");
const zoraiz = document.querySelector(".zoraiz");
const ibi = document.querySelector(".ibtihal");


function moveButton(button) {

    button.style.position = "fixed";

    let x = Math.random() * (window.innerWidth - button.offsetWidth);
    let y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = x + "px";
    button.style.top = y + "px";


    // Shiza button bigger
    if(shiza){

        size += 0.1;
        shiza.style.transform = `scale(${size})`;

    }

}


// Zoraiz move

if(zoraiz){

    zoraiz.addEventListener("click", ()=>{

        moveButton(zoraiz);

    });

}


// Ibtihal move

if(ibi){

    ibi.addEventListener("click", ()=>{

        moveButton(ibi);

    });

}


// Shiza open second page

if(shiza){

    shiza.addEventListener("click", ()=>{

        window.location.href = "shiza.html";

    });

}





// ===============================
// SECOND PAGE VIDEO + CONFETTI
// ===============================

const videoSection = document.querySelector("#video-area");
const video = document.querySelector("#birthday-video");


if(videoSection && video){

    const observer = new IntersectionObserver((entries)=>{

        if(entries[0].isIntersecting){

            console.log("Video visible");


            // fade animation class
            videoSection.classList.add("show");


            // play video
            video.play();


            // confetti
            confetti({

                particleCount: 200,
                spread: 120,
                origin: {
                    y: 0.6
                }

            });


            // floating hearts
            for(let i = 0; i < 30; i++){

                setTimeout(()=>{

                    createHeart();

                }, i * 100);

            }


        }

    },{
        threshold: 0.5
    });


    observer.observe(videoSection);

}
function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";


    document.body.appendChild(heart);


    setTimeout(()=>{
        heart.remove();
    },5000);

}