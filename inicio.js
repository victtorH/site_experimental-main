// header
const tudo = document.getElementById('tudo')
const nav = document.querySelector('.respo')
const navbar = document.querySelector('#tudo')
const al = document.querySelectorAll('.al')
const btn = document.getElementById('pesquisa')
const graf = document.querySelector('div.graf')
var int = document.getElementById('int')
const rol = document.querySelector('div.rol')
var esp1 = document.querySelector('.esp1')
var esp2 = document.querySelector('.esp2')
var esp3 = document.querySelector('.esp3')
var esp4 = document.querySelector('.esp4')
var topo = document.querySelectorAll('[data-topo]')
var linear = document.querySelector('.linear')
var portas = document.querySelectorAll('[data-porta]')
let carrosel = document.querySelector('.carrosel')



window.addEventListener('load',()=>{

     linear.classList.add('baixo')
     portas.forEach(porta =>{
      porta.classList.add('baixoporta')
     })
     
  
})


 window.addEventListener('scroll', ( ) => {
 const windowof = window.pageYOffset
topo.forEach( Element => {   
    
if(windowof > Element.offsetTop +185 ){

     Element.classList.remove('baixo')
      navbar.style = ('box-shadow: 1px 1px 10px 0.5px rgba(0, 0, 0, 0.08);margin-top:0.5em;')
     
}else if(windowof > Element.offsetTop -200 ) {
  
      Element.classList.add('baixo')
    
      navbar.style = (' background-color: transparent; box-shadow:none;margin-top:0px;')
}})})

 window.addEventListener('scroll', ( ) => {
 const windowof = window.pageYOffset
portas.forEach( Element => {   
    
if(windowof > Element.offsetTop -150 ){

      Element.classList.remove('baixoporta')

}else{
  
      Element.classList.add('baixoporta')

     
}})})

var anime = document.querySelectorAll('[data-anime]')
 window.addEventListener('scroll', ( ) => {
 const windowof = window.pageYOffset
anime.forEach( Element => {   
    
if(windowof > Element.offsetTop - 350  ){
        Element.classList.add('entrou')
 
}else{
    Element.classList.remove('entrou')
}
})})



function click(clickando,a) {
    clickando.addEventListener('click',a)
}


click(tudo,puxando)
click(int,mexendo)


  let contador = 0
    let conta = 1

  function mexendo(){

    if(conta > contador){
   
graf.classList.add('grafstyle')
rol.classList.add('rolstyle')

esp1.classList.add('displayD')
esp2.classList.add('displayE')

esp3.classList.remove('displayD')
esp4.classList.remove('displayE')

esp1.style = ('transition:all 1s ease-in-out;')
esp2.style = ('transition:all 0.7s ease-in-out;')

esp3.style = ('transition:all 3s ease-in-out;')
esp4.style = ('transition:all 3s ease-in-out;')

      contador++
    }else{
  
   graf.classList.remove('grafstyle')
  rol.classList.remove('rolstyle')

  esp1.classList.remove('displayD')
esp2.classList.remove('displayE')

esp3.classList.add('displayD')
esp4.classList.add('displayE')

esp1.style = ('transition: all 3s ease-in-out;')
esp2.style = ('transition: all 3s ease-in-out;')

esp3.style = ('transition: all 1s ease-in-out;')
esp4.style = ('transition: all 0.7s ease-in-out;')

      contador--
    }

  }

  
let contaimg = 0


var topics = document.querySelectorAll('.topic')


  topics.forEach((topic, listaNum)=>{
    topic.addEventListener('click',()=>{
    contaimg = listaNum;
       if( contaimg  == listaNum){

        mostrarimg()
       }

  })
  
 })

function mostrarimg(){
  let imgativa = document.querySelector('.img.ativo');
  var img = document.querySelectorAll('.img')

    let topicativo = document.querySelector('.sessao .topic.ativo')


  if(imgativa == img[contaimg]){  

   if(contaimg < 3 ){

      contaimg++
  }else{
    contaimg = 0
  }

  }else{
  
    topicativo.classList.remove('ativo')
    topics[contaimg].classList.add('ativo')
    

  carrosel.style = ('left:47%;opacity:0;trasnform:scale(.9)')
  imgativa = imgativa.classList.remove('ativo')

    setTimeout(()=>{
carrosel.style = ('left:30%;opacity:0; trasnform:scale(1.2);')
  },700)

  setTimeout(()=>{
img = img[contaimg].classList.add('ativo')
carrosel.style = ('left:45%;opacity:1; trasnform:scale(1);')
  },900)
  

}
    
}



let pause = document.querySelector('.pause')
let despuse = document.querySelector('.despause')

carroselTime = setInterval(mostrarimg, 2000)

carrosel.addEventListener('mouseenter', ()=>{

  despuse.classList.remove('ativo')
  pause.classList.add('ativo')

  clearInterval(carroselTime)
  
})



carrosel.addEventListener('mouseleave', ()=>{

  pause.classList.remove('ativo')
  despuse.classList.add('ativo')

  carroselTime = setInterval(mostrarimg, 2000)
})




  let arrowesquerda = document.querySelector('.arrow.esquerda') 
  let arrowdireita = document.querySelector('.arrow.direita')  
  let slidegeral = document.querySelector('.slides')
  let slides = document.querySelectorAll('.slide')
  let ver = document.querySelectorAll('.ver')
  let penumbra = document.querySelectorAll('.penumbra')
  let penumbradois = document.querySelectorAll('.penumbradois')

  let contando = 1
  
function projetosMovimento(){
  let slideativo = document.querySelectorAll('.slide.ativo')
  slideativo.forEach((ativos)=>{

  ativos.classList.remove('ativo')
 slides[contando].classList.add('ativo')

 if(contando == 0){
  slidegeral.classList.remove('centro', 'direita')
  slidegeral.classList.add('esquerda')
 }else if(contando == 1){
  slidegeral.classList.remove('esquerda', 'direita')
  slidegeral.classList.add('centro')
 }else if(contando == 2){
  slidegeral.classList.remove('esquerda', 'centro')
  slidegeral.classList.add('direita')
 }

  })

}

arrowdireita.addEventListener('click',()=>{
contando++
if(contando > 2){
  contando = 0

}

projetosMovimento()
})
arrowesquerda.addEventListener('click',()=>{
contando--
if(contando < 0){
contando = 2

}

projetosMovimento()
})


ver.forEach((Elemento, Numelemento)=>{

Elemento.addEventListener('mouseenter',( )=>{
  
  let penumbra = document.querySelectorAll('.penumbra')
  let penumbradois = document.querySelectorAll('.penumbradois')


    penumbra[Numelemento].classList.add('verhover')
    penumbradois[Numelemento].classList.add('verhover')
    setTimeout(()=>{
      Elemento.innerHTML = ('<p class="projeto">ver projeto </p> <div class="seta"><i class="fa-solid fa-location-arrow"></i></div> ')
      setTimeout(()=>{
      let paragrafo = Elemento.querySelector('p')
      paragrafo.style = ('color:rgb(255, 255, 255);')

      },500) },100)
    
  })
    
  Elemento.addEventListener('mouseleave',( )=>{
    let paragrafo = Elemento.querySelector('p')
    setTimeout(()=>{
      let paragrafo = Elemento.querySelector('p')
      paragrafo.style = ('color:transparent;')
   paragrafo.remove()
    },200)
    
   setTimeout(()=>{

      penumbra[Numelemento].classList.remove('verhover')
    penumbradois[Numelemento].classList.remove('verhover')
    
    
    
   },500)
    

  })

})

  


function puxando(){
  //controla a ida e volta das tres barras no responsivo
     if(conta > contador){
        
 tudo.classList.add('tudostyle')
  navbar.classList.add('navbarstyle')
   nav.classList.add('navbarstyle')


    contador++
    }else{
      tudo.classList.remove('tudostyle')
      navbar.classList.remove('navbarstyle')
      nav.classList.remove('navstyle')

        conta++
    }

 }
