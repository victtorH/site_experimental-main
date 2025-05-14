// header
const tudo = document.getElementById('tudo')
const nav = document.querySelector('.respo')
const ul = document.querySelector('.ul')
const btn = document.getElementById('pesquisa')
const graf = document.querySelector('div.graf')
var int = document.getElementById('int')
const rol = document.querySelector('div.rol')
var anime = document.querySelectorAll('[data-anime]')
const aqui = 4
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
click(int,apertou)
  let contador = 0
    let conta = 1
function apertou( ){
  
    if( conta > contador ){ 
        graf.classList.add('grafstyle')
        rol.classList.add('rolstyle')
        int.classList.add('intstyle')
        contador++
    }else{
   graf.classList.remove('grafstyle')
   rol.classList.remove('rolstyle')
   int.classList.remove('intstyle')
        conta++
    }
  
}
function puxando(){
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

