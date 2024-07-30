let hamberBergerClick = (document.querySelector(".hambergerIcon")) as HTMLButtonElement;
let hamBerger = (document.querySelector(".hamBerger")) as HTMLButtonElement;
let leftArrow = (document.querySelector(".leftArrow")) as HTMLButtonElement;
let leftBar = (document.querySelector(".leftBar")) as HTMLAreaElement;
let labelNone =  (document.querySelectorAll("h3"));

let leftBarOpen : boolean;

hamberBergerClick.addEventListener("click",() =>{

    leftBarOpen = true;
    hamBerger.style.backgroundColor = "white"
    leftBar.classList.add('jsWidth');

    labelNone.forEach(lable => {
        lable.classList.add('labelNone');
    });

    hamberBergerClick.classList.add('hamBergerNone');
    hamBerger.classList.add('jsWidth');

    leftArrow.classList.add('leftArrowShow')
})

leftArrow.addEventListener("click",()=>{
    leftBar.classList.toggle('jsWidth');
    labelNone.forEach(lable => {
        lable.classList.toggle('labelNone');
    });
    hamBerger.classList.toggle('jsWidth');
    leftArrow.classList.toggle('leftArrowShow')

    hamberBergerClick.classList.toggle('hamBergerNone');
    hamBerger.style.backgroundColor = "#024f5b22";

})