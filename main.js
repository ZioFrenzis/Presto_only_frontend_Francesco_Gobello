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
let swiperWrapper=document.querySelector('.swiper-wrapper')


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

let observer=new IntersectionObserver ( (entries)=>{
    entries.forEach((el)=>{
        if (el.isIntersecting) {
            incremento(94, 1, fnum, 40);
            incremento(8000, 100, snum, 50);
            incremento(873, 10, tnum, 45);
            
            observer.disconnect()
        }
    })
})

observer.observe(tnum)


let articoli=[
    {nome:"chitarra", categoria:"Musica", prezzo:'60' },
    {nome:"palla", categoria:"Giochi", prezzo:'10' },
    {nome:"spugna", categoria:"Pulizie", prezzo:'1,50' },
    {nome:"Arpa", categoria:"Musica", prezzo:'80' },
    {nome:"Risiko", categoria:"Giochi", prezzo:'45' },
    {nome:"Gamba di legno", categoria:"Garpez", prezzo:'60.000' },
    {nome:"Joystick", categoria:"Giochi", prezzo:'70' },
]

articoli.forEach((el,i)=>{
    if (i>=(articoli.length -3)) {
        
        let div=document.createElement('div')
        div.classList.add("col-12", 'col-md-3', 'cardAnnunci',  'p-2', 'b-card', "w3-hover-shadow", 'mx-1', 'mt-2')
        div.innerHTML=`
        <img class="card-img-top imgAnnunci shadow " src="http://picsum.photos/${200+i}" alt="">
        <p class="text-center fs-4">${el.nome}</p>
        <p class="text-center opacity-50">${el.categoria}</p>
        <p class="text-center fs-2">${el.prezzo} €</p>
        </div>
        `
        rowAnnunci.appendChild(div)
    }
})


let reviews = [ 

    {name: 'David', description: 'Bellissimo e sublime', vote: 5},
    {name: 'Luca', description: "Loris l'avrebbe fatto meglio", vote: 3},
    {name: 'Loris', description: 'Rivoglio i miei soldi indietro', vote: 1},
    {name: 'Francesco', description: 'sciapo', vote: 4},
    {name: 'Vercingetorige', description: "L'impero romano fa schifo e ci penso spesso", vote: 2 }

]




reviews.forEach( (review)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide', 'p-2',  'd-flex', 'flex-column', 'justify-content-around' );
    div.innerHTML= `
    <p class="text-center fs-3 mt-2">${review.name}</p>
                    <p class="text-center w3-medium ">${review.description}</p>
                    <div class= "d-flex justify-content-center align-bottom mt-2>
            ${createStar(review.vote)}
        </div>
        
                </div>
    `
    swiperWrapper.appendChild(div)
} )


// FUNZIONE CREA STELLE
function createStar(fullStars) {
    let final = '';



// funzione crea stelle piene
        //ricordarsi che fullStars equivale al voto, quindi se l'utente mette 0 al voto, il primo ciclo non se lo guarda proprio perché la i parte da 0 e quindi 0 è minore di 0? no! ergo va al secondo ciclo che mi genera le stelle vuote
    for(let i = 0; i <= fullStars; i ++){
    final = final + `<i class="fa-solid fa-star"></i>`;
    }


// funzione crea stelle vuote
        // 5 stelle totali, meno le stelle piene che ho già trovato su, ad  esempio 5 - 2 stelle piene, mi avanzano 3 stelle vuote, è lì che questo nuovo ciclo si deve fermare e mi deve generare le restanti stelle vacanti
        for(let i = 0; i < 5 - fullStars; i++ ){
            final = final + `<i class="fa-regular fa-star"></i>`
        }
    // mi devo ricordare di ritornare il valore di final, altrimenti avrò in console un undefined
    return final;
}

//L'INVOCAZIONE E' NELL INNERHTML DI REVIEWS.FOREACH
































var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
});