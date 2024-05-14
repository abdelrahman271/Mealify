let toggle = document.querySelector('.change');
let icon = document.querySelector('.change');
let bar = document.querySelector('.fa-bars');
let xmark= document.querySelector('.fa-xmark');
let nav= document.getElementById('links');
let arrow=document.getElementById('bt');


toggle.onclick = () => {
    document.body.classList.toggle('dark');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
};

bar.onclick = () => {
    nav.classList.toggle('active');
};

xmark.onclick = () =>{
     nav.classList.toggle('active')

 };
arrow.onclick=() =>{
    scroll({
        top:0,
        behavior:"smooth"
    })
};

window.onscroll = () =>{
form.classList.remove('active');

if (window.scrollY >= 716) {
    arrow.style.display = 'block';
} else {
    arrow.style.display = 'none';
}
};

