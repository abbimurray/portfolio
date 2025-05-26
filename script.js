function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.getElementById('socials-container').addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;

    const action = target.querySelector('img').alt.toLowerCase();
    if (action.includes('cv')) {
        window.open('./assets/CV_AbbiMurray.pdf');
    } else if (action.includes('linkedin')) {
        location.href = 'https://www.linkedin.com/in/abbi-m-73286420b';
    } else if (action.includes('github')) {
        location.href = 'https://github.com/abbimurray';
    } 
    

});

// JavaScript to handle the email button click
document.getElementById("email-link").addEventListener("click", function () {
    const email = "abbimurray73";
    const domain = "gmail.com";
    window.location.href = `mailto:${email}@${domain}`;
});