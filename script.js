document.addEventListener("DOMContentLoaded", () => {


    const timelineItems = document.querySelectorAll(".timeline-item");

    const progressBar = document.getElementById("progressBar");

    const topButton = document.getElementById("topButton");


    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.30

    });

    timelineItems.forEach(item => {

        observer.observe(item);

    });


    function updateProgressBar() {

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / documentHeight) * 100;

        progressBar.style.width = progress + "%";

    }

    function toggleTopButton() {

        if (window.scrollY > 300) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    }

    window.addEventListener("scroll", () => {

        updateProgressBar();

        toggleTopButton();

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});

    const modal = document.getElementById("modal");

    const modalTitle = document.getElementById("modalTitle");

    const modalDescription = document.getElementById("modalDescription");

    const closeModal = document.getElementById("closeModal");

    const buttons = document.querySelectorAll(".more");


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const title = button.dataset.title;

            const description = button.dataset.description;

            modalTitle.textContent = title;

            modalDescription.textContent = description;

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    function hideModal(){

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }



    closeModal.addEventListener("click", hideModal);

    modal.addEventListener("click",(e)=>{

        if(e.target===modal){

            hideModal();

        }

    });


    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            hideModal();

        }

    });

    buttons.forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transform="translateY(-4px) scale(1.05)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="";

        });

    });

const themeButton = document.getElementById("themeButton");


const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add("light");

    themeButton.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}

themeButton.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

        themeButton.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","dark");

        themeButton.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});



const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    const value = window.scrollY;

    header.style.transform =
        `translateY(${value*0.25}px)`;

});


const title = document.querySelector("header h1");

const originalText = title.textContent;

title.textContent="";

let index=0;

function typeWriter(){

    if(index < originalText.length){

        title.textContent += originalText.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

typeWriter();


const particles = document.getElementById("particles");

for(let i=0;i<45;i++){

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left=Math.random()*100+"%";

    particle.style.top=Math.random()*100+"%";

    particle.style.width=
        Math.random()*6+3+"px";

    particle.style.height=
        particle.style.width;

    particle.style.animationDuration=
        (Math.random()*18+8)+"s";

    particle.style.animationDelay=
        (Math.random()*8)+"s";

    particles.appendChild(particle);

}


const icons=document.querySelectorAll(".timeline-icon");

icons.forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform="scale(1.25) rotate(15deg)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="";

    });

});



const cards=document.querySelectorAll(".timeline-content");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.18),
rgba(255,255,255,.08))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="";

    });

});


window.addEventListener("scroll",()=>{

    const opacity = 1 - (window.scrollY/350);

    header.style.opacity=Math.max(opacity,0);

});


console.log("%cProyecto creado por Bayron Rojas",
"color:#38bdf8;font-size:18px;font-weight:bold;");
