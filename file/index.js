const btn = document.getElementById('no');
const btn_si= document.getElementById('si');
let div= document.getElementsByTagName('div');

function mia_function(){
    let div= document.getElementsByTagName('div');
    let img=document.createElement('img');
    img.src= ('pngegg.png');
    document.appendChild(img);
}

btn_si.onclick = mia_function();


btn.addEventListener('mouseover', () => {
    const container = document.querySelector('.container').getBoundingClientRect();
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;
    const maxX = container.width - btnWidth;
    const maxY = container.height - btnHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
});
