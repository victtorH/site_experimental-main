// header
const tudo = document.getElementById('tudo')
const nav = document.querySelector('.respo')
const ul = document.querySelector('.ul')
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



window.addEventListener('load',()=>{

     linear.classList.add('baixo')
     portas.forEach(porta =>{
      porta.classList.add('baixoporta')
     })
     
  
})


 window.addEventListener('scroll', ( ) => {
 const windowof = window.pageYOffset
topo.forEach( Element => {   
    
if(windowof > Element.offsetTop +385 ){

     Element.classList.remove('baixo')
      ul.style = ('box-shadow: 1px 1px 10px 0.5px rgba(0, 0, 0, 0.18);margin-top:2em;')
     
}else if(windowof > Element.offsetTop -200 ) {
  
      Element.classList.add('baixo')
    
      ul.style = (' background-color: transparent; box-shadow:none;margin-top:0px;')
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
    
if(windowof > Element.offsetTop - 400  ){
        Element.classList.add('entrou')
 
}else{
    Element.classList.remove('entrou')
}
})})



function movimento(valor,a,b) {
        valor.addEventListener('mouseenter',a)
        valor.addEventListener('mouseleave',b)
}
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
    console.log(contaimg)
   topics[contaimg].classList.add('ativo')
    topicativo.classList.remove('ativo')

  imgativa = imgativa.classList.remove('ativo')
  setTimeout(()=>{
img = img[contaimg].classList.add('ativo')
  },500)

}
    
}

setInterval(mostrarimg,6000)

  topics.forEach((topic, listaNum)=>{

    topic.addEventListener('dblclick',()=>{
    contaimg = listaNum;
     mostrarimg()
  })
    topic.addEventListener('click',()=>{
    contaimg = listaNum;
   
    mostrarimg()

    
  })
  
 })



function puxando(){
  //controla a ida e volta das tres barras no responsivo
     if(conta > contador){
        
 tudo.classList.add('tudostyle')
  ul.classList.add('ulstyle')
   nav.classList.add('navstyle')


    contador++
    }else{
      tudo.classList.remove('tudostyle')
      ul.classList.remove('ulstyle')
      nav.classList.remove('navstyle')

        conta++
    }

 }
