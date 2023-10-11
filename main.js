let navbar=document.querySelector("#navbar");
let link=document.querySelectorAll('.link');
let logo=document.querySelector('.logocustom');
let ul=document.querySelector('.ul');
let button=document.querySelector('.button');


navbar.style.height="170px";
navbar.classList.remove("bverde")
navbar.classList.add("bblack")
link.forEach((el)=>{
el.style.color='#d8dbe2'
el.addEventListener(("mouseenter"),()=>{
    el.style.color='#A9BCD0'
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
                el.style.color='#A9BCD0'
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
                el.style.color='#A9BCD0'
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

