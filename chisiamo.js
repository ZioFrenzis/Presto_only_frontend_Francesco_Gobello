let navbar=document.querySelector("#navbar");
let link=document.querySelectorAll('.link');
let logo=document.querySelector('.logocustom');
let ul=document.querySelector('.ul');
let button=document.querySelector('.button');

navbar.style.height="170px";
navbar.classList.remove("bverde");
navbar.classList.add("bblack");

link.forEach((el)=>{
    el.style.color='#d8dbe2'
    el.addEventListener(("mouseenter"),()=>{
        el.style.color='#8cc5c2'
    })
    el.addEventListener(("mouseleave"),()=>{
        el.style.color='#d8dbe2'
        
    })
})
logo.src="http://127.0.0.1:5500/media/logobianco.png"

ul.classList.add('bblack')

window.addEventListener(("scroll"), ()=>{
    if (window.scrollY > 0) {
        navbar.style.height="82px";
        navbar.classList.remove("bblack");
        navbar.classList.add("bverde");
        ul.classList.remove('bblack')
        ul.classList.add('bverde')
        link.forEach((el)=>{
            el.style.color='#373f51'
            el.addEventListener(("mouseenter"),()=>{
                el.style.color='#1b1b1e'
            })
            el.addEventListener(("mouseleave"),()=>{
                el.style.color='#373f51'
            })
        });
        logo.src="http://127.0.0.1:5500/media/logonero.png";

        
    } else {
        navbar.style.height="170px";
        navbar.classList.remove("bverde");
        navbar.classList.add("bblack");
        ul.classList.remove('bverde')
        ul.classList.add('bblack')
        link.forEach((el)=>{
            el.style.color='#d8dbe2'
            el.addEventListener(("mouseenter"),()=>{
                el.style.color='#8cc5c2'
            })
            el.addEventListener(("mouseleave"),()=>{
                el.style.color='#d8dbe2'
                
                
            })
        });
        logo.src="http://127.0.0.1:5500/media/logobianco.png";

    }
})

button.addEventListener(('click'),()=>{
    logo.classList.toggle('animazione')
})

let opener = document.querySelector('#opener');
let circle = document.querySelector('#circle');
let teacherCard = document.querySelector('#teacherCard');
let cardDescription = document.querySelector('#cardDescription');
let cardTitle = document.querySelector('#cardTitle');
let cardImg = document.querySelector('#cardImg');





let teachers = [
    {name: 'Marco', description:'Docente frontend', url: 'https://picsum.photos/200' },
    {name: 'Valerio', description:'Docente frontend', url: 'https://picsum.photos/201' },
    {name: 'Carlo', description:'Docente frontend', url: 'https://picsum.photos/202' },
    {name: 'Donato', description:'Docente backend', url: 'https://picsum.photos/203' },


]


teachers.forEach( (teacher)=>{
    let div= document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${teacher.url})`
    circle.appendChild(div)
} )


let movedDivs = document.querySelectorAll('.moved');

let check = true
opener.addEventListener('click', ()=>{
    
    if (check) {
        opener.style.transform = 'rotate(45deg)';
        movedDivs.forEach((div, i)=>{
            let angle = (360/movedDivs.length)*i;
            div.style.transform= `rotate(${angle}deg) translate(150px) rotate(-${angle}deg) `
        })
        check = false
    }else{
        opener.style.transform= 'rotate(0deg)';
        movedDivs.forEach((div, i)=>{
            
            div.style.transform= `rotate(0deg) translate(0px) rotate(0deg) `
        })
        check = true
        teacherCard.classList.add('d-none');
    }

})

movedDivs.forEach( (moved, i)=>{
    moved.addEventListener('click', ()=>{
        teacherCard.classList.remove('d-none')
        cardImg.src = teachers[i].url
        cardTitle.innerHTML= teachers[i].name;
        cardDescription.innerHTML= teachers[i].description;

    })
} ) 