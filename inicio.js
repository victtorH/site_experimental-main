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



window.addEventListener('load',()=>{
  linear.classList.add('baixo')
})


 window.addEventListener('scroll', ( ) => {
 const windowof = window.pageYOffset
topo.forEach( Element => {   
    
if(windowof > Element.offsetTop +385 ){

     Element.classList.remove('baixo')
}else if(windowof > Element.offsetTop -200 ) {
  
      Element.classList.add('baixo')

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

      conta++
    }

  }

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
