// ===============================
// FIRST PAGE BUTTONS
// ===============================

let size = 1;

const shiza = document.querySelector(".shiza");
const zoraiz = document.querySelector(".zoraiz");
const ibi = document.querySelector(".ibtihal");

function moveButton(button) {
    // Because the glass container has a backdrop-filter, it creates a new containing block.
    // We must move the button to the body so position: fixed is relative to the screen.
    if (button.parentElement !== document.body) {
        document.body.appendChild(button);
    }

    button.style.position = "fixed";
    button.style.zIndex = "999"; // Ensure it stays on top of other elements

    // Add a safety margin so it doesn't touch the very edges of the screen
    const margin = 30; 
    
    // Calculate max positions available, ensuring we don't go negative
    const maxX = Math.max(margin, window.innerWidth - button.offsetWidth - margin);
    const maxY = Math.max(margin, window.innerHeight - button.offsetHeight - margin);

    // Generate random coordinates between margin and max
    let x = margin + Math.random() * (maxX - margin);
    let y = margin + Math.random() * (maxY - margin);
    let rotation = (Math.random() - 0.5) * 60; // random rotation between -30 and 30 deg

    button.style.left = x + "px";
    button.style.top = y + "px";
    button.style.transform = `rotate(${rotation}deg)`;

    // Shiza button bigger
    if (shiza) {
        size += 0.1;
        shiza.style.transform = `scale(${size})`;
    }
}

// Zoraiz move
if (zoraiz) {
    // Add both hover and click for extra chaos
    zoraiz.addEventListener("mouseover", () => moveButton(zoraiz));
    zoraiz.addEventListener("click", () => moveButton(zoraiz));
}

// Ibtihal move
if (ibi) {
    ibi.addEventListener("mouseover", () => moveButton(ibi));
    ibi.addEventListener("click", () => moveButton(ibi));
}

// Shiza open second page
if (shiza) {
    shiza.addEventListener("click", () => {
        window.location.href = "shiza.html";
    });
}

// ===============================
// SECOND PAGE VIDEO + CONFETTI
// ===============================

const videoSection = document.querySelector("#video-area");
const video = document.querySelector("#birthday-video");

if (videoSection && video) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            console.log("Video visible");

            // fade animation class
            videoSection.classList.add("show");

            // play video
            video.play().catch(e => console.log("Autoplay blocked:", e));

            // confetti
            confetti({
                particleCount: 200,
                spread: 120,
                origin: { y: 0.6 }
            });

            // floating hearts
            for(let i = 0; i < 30; i++){
                setTimeout(() => {
                    createHeart();
                }, i * 150);
            }
        }
    }, { threshold: 0.5 });

    observer.observe(videoSection);
}

function createHeart(){
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    
    // Randomize initial rotation for floating hearts
    const initRotation = Math.random() * 360;
    heart.style.transform = `rotate(${initRotation}deg)`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}