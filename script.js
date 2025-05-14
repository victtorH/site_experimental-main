
const tudo = document.getElementById('tudo')
const nav = document.querySelector('.respos')
const ul = document.querySelector('.ul')
var txt1 = document.getElementById("texto1")
var tx = document.getElementById("txtpr")
var titulo = document.querySelector("h1#Titulo")
var btn = document.getElementById("btn")
tx.addEventListener("mouseenter",passou)
tx.addEventListener("mouseleave",voltou)


function click(clickando,a) {
  clickando.addEventListener('click',a)
}


click(tudo,puxando)

  function passou(){
    titulo.style = "  font-size: 4em; color:orange;"
      tx.style.color = "orange"
  }
function voltou(){
  titulo.style = " color:transparent;-webkit-text-stroke: 1px white;font-size: 3.5em ; "
}
function entrou(){
  passou.apply()
}
function saiu(){
  voltou.apply()
}

let contador = 0
let conta = 1
function puxando(){
  if(conta > contador){
     
tudo.style = 'position:absolute;z-index:999;width:100%;height:100vh; top:0; left:0; trasition:all 2s;'
ul.style = 'position: relative; left:20em;top:1.7vh;trasition:all 2s;'
nav.style = 'position: relative; left:20em;top:1.6vh;trasition:all 2s'

 contador++

 }else{
     tudo.style='right:-7.5em;background-color: transparent;'
     ul.style = ' position: relative;left: 9em;'
     nav.style = 'position:relative;left: 0em;'
     conta++
 }

}
