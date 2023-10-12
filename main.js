let navbar=document.querySelector("#navbar");
let link=document.querySelectorAll('.link');
let logo=document.querySelector('.logocustom');
let ul=document.querySelector('.ul');
let button=document.querySelector('.button');
let imgSfondo=document.querySelector('.imgSfondo')
let titolo=document.querySelector('.titolo')
let bordo=document.querySelector('.bordo')
let imgNum=document.querySelector('#imgNum')
let fnum=document.querySelector('#fnum')
let snum=document.querySelector('#snum')
let tnum=document.querySelector('#tnum')


navbar.style.height="170px";
navbar.classList.remove("bverde")
navbar.classList.add("bblack")
titolo.classList.add('black')
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
imgSfondo.src="http://127.0.0.1:5500/media/img-sfondo-scura.png"
bordo.classList.add('bordon')
imgNum.src="http://127.0.0.1:5500/media/bwink_tsp_06_single_01.png"

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
        imgSfondo.src="http://127.0.0.1:5500/media/img-sfondo.png"
        bordo.classList.remove('bordon')
        bordo.classList.add('bordov')
        imgNum.src="http://127.0.0.1:5500/media/bwink_tsp_06_single_02.png"


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
        imgSfondo.src="http://127.0.0.1:5500/media/img-sfondo-scura.png"
        bordo.classList.remove('bordov')
        bordo.classList.add('bordon')
        imgNum.src="http://127.0.0.1:5500/media/bwink_tsp_06_single_01.png"
    }
})

button.addEventListener(('click'),()=>{
    logo.classList.toggle('animazione')
})

function incremento(valore, incremento, numIncrementare, intervallo) {
    let counter=0;
    let interval = setInterval( ()=>{
        if (counter<valore) {
            counter=counter+incremento;
            numIncrementare.innerHTML= counter;
        } else {
            clearInterval(interval)
        }
    },intervallo)
}
// observer.observe(tnum)

// let observer=new IntersectionObserver ( (entries)=>{
//     entries.forEach((el)=>{
//         if (el.isIntersecting) {
            // incremento(94, 1, fnum, 20);
            // incremento(8000, 100, snum, 25);
            // incremento(873, 10, tnum, 22.5);
            
//             observer.disconnect()
//         }
//     })
// })

// let observer= new IntersectionObserver ((entries)=>{
//     entries.forEach(element => {
        
//     });
// })

            incremento(94, 1, fnum, 20);
            incremento(8000, 100, snum, 25);
            incremento(873, 10, tnum, 22.5);
    
