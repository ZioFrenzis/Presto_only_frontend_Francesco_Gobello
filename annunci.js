let navbar=document.querySelector("#navbar");
let link=document.querySelectorAll('.link');
let logo=document.querySelector('.logocustom');
let ul=document.querySelector('.ul');
let button=document.querySelector('.button');
let imgSfondo=document.querySelector('.imgSfondo')
let titolo=document.querySelector('.titolo');
let bordo=document.querySelector('.bordo');
let imgNum=document.querySelector('#imgNum');
let fnum=document.querySelector('#fnum');
let snum=document.querySelector('#snum');
let tnum=document.querySelector('#tnum');
let swiperWrapper=document.querySelector('.swiper-wrapper');


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
imgSfondo.src="http://127.0.0.1:5500/media/img-sfondo-scura.png"

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

    }
})

button.addEventListener(('click'),()=>{
    logo.classList.toggle('animazione')
})

// JSON : acronimo di JavaScript Object Notification


// 1. COLLEGARCI ALLA RISORSA
// Collegare file JSON:
// fetch() -> chiamata asincrona che permette di collegarci ad un dato esterno e ci restituisce una PROMISE, una promessa
// PROMISE -> é un tipo di dato che ci viene restituito dalla fetch


// 2. CONVERTIRE LA RISORSA
// Questo sará possibile attraverso la concatenazione di un metodo delle promise ->  .then()
// Attraverso questo metodo potremo operare su una promise o un oggetto json
// Da qui avremo dunque il nostro oggetto JSON


// 3. UTILIZZARE LA RISORSA

// FETCH -> mi da la PROMISE
// il primo .then() lo converte da promise ad oggetto JSON
// il secondo .then() ci permette di utilizzare l'oggetto restituito sottoforma di OGGETTO e non piú di file JSON


fetch('./annunci.json')
.then( (response)=> response.json()  )
.then( (data)=> {
    
    let radioWrapper = document.querySelector('#radioWrapper');
    let cardsWrapper = document.querySelector('#cardsWrapper');

    let inputRange = document.querySelector('#inputRange');
    let numberPrice = document.querySelector('#numberPrice');
    
    
    function setRadios() {
        let categories = data.map((annuncio)=> annuncio.category);
        
        // let uniqueCategories = [];
        
        // categories.forEach( (categoria)=>{
        //     if (!uniqueCategories.includes(categoria)) {
        //         uniqueCategories.push(categoria)
        //     }
        // } ) 
        // console.log(uniqueCategories);
        
        let uniqueCategories = Array.from(new Set(categories))
        // console.log(uniqueCategories);
        
        uniqueCategories.forEach( (el)=>{
            let div = document.createElement('div');
            div.classList.add("form-check");
            div.innerHTML= `
            <input class="form-check-input" type="radio" name="categories" id="${el}">
            <label class="form-check-label" for="${el}">
            ${el}
            </label>           
            `
            radioWrapper.appendChild(div)
        }  )
        
    }
    

    setRadios();

    // catturiamo con un queryselectorAll i RADIOS, sotto l'invocazione della funzione setRadios, perché é qui il punto in cui vengono creati, quindi prima dell'invocazione i radios non esistevano.

    
    
    function showCards(array) {
        cardsWrapper.innerHTML= '';
        array.forEach( (annuncio)=>{
            let div = document.createElement('div');
            div.classList.add('ann-card', "col-12", 'col-md-3', 'cardAnnunci',  'p-2', 'b-card', "w3-hover-shadow", 'mx-1', 'mt-2');
            div.innerHTML= `
            <p class="h3 text-center">${annuncio.name}</p>
            <p class="lead">${annuncio.category}</p>
            <p class="lead">${annuncio.price} €</p>
            
            `
            cardsWrapper.appendChild(div)
        } )
    }
    
    
    
    
    
    let radios = document.querySelectorAll('.form-check-input');
    // console.log(radios);

    function filterByCategory() {
        
        let checked = Array.from(radios).find( (button)=> button.checked )
        let categoria = checked.id;
        

        if (categoria == 'All') {
            showCards(data)
        } else {
            let filtered = data.filter( (annuncio)=> annuncio.category == categoria );
        ;
        showCards(filtered)
        }

        
    }

        radios.forEach( (button)=>{
            button.addEventListener('click', ()=>{
                filterByCategory();
                
            })
        })


        function setInputPrice() {
            let prices = data.map( annuncio => +annuncio.price)
            
            let maxPrice = Math.ceil(Math.max(...prices))
            // console.log(maxPrice);

            inputRange.max = maxPrice;
            inputRange.value = maxPrice;
            numberPrice.innerHTML = (`${maxPrice} €`)
        }

        setInputPrice()

        function filterByPrice() {
            let filtered = data.filter( (annuncio)=>{
                return Number(annuncio.price) <= Number(inputRange.value)});

                // console.log(filtered);
                showCards(filtered);
            }
            
            
            
            


        
        inputRange.addEventListener('input', ()=>{
            filterByPrice();
            numberPrice.innerHTML = inputRange.value;
        })
        
    
        


        showCards(data)
    
})