function scroLLToElement(elementSelector, instance = 0){
    const element = document.querySelectorALL(elementSelector);
    if (elements.lenght > instance){
        elements[instance].scroLLIntoView({ behavior:'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () =>{
    scroLLToElement('.header');
});

link2.addEventListener('click', () =>{
    scroLLToElement('.header, 1');
});

link3.addEventListener('click', () =>{
    scroLLToElement('.column');
});