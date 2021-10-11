var destaqueHover = document.querySelectorAll(".itens");

for (let i of destaqueHover){
    i.addEventListener("mouseover", function(){
            this.style.color = "#e43f41"
            this.style.fontSize = "41px"}
)};

for (let i of destaqueHover){
     i.addEventListener("mouseout", function(){
            this.style.color = "black"
            this.style.fontSize = "40px"}
)};



var itensEsconder = document.querySelectorAll(".itens");
var descricoes = document.querySelectorAll("aside");

var item1 = document.querySelector("#item1");
item1.addEventListener("mouseover", function() {
    var descricao1 = document.querySelector("#descricao1");
    descricao1.classList.remove("esconder");
});
item1.addEventListener("mouseout", function() {
    var descricao1 = document.querySelector("#descricao1");
    descricao1.classList.add("esconder");
});
//
var item2 = document.querySelector("#item2");
item2.addEventListener("mouseover", function() {
    var descricao2 = document.querySelector("#descricao2");
    descricao2.classList.remove("esconder");
});
item2.addEventListener("mouseout", function() {
    var descricao2 = document.querySelector("#descricao2");
    descricao2.classList.add("esconder");
});
//
var item3 = document.querySelector("#item3");
item3.addEventListener("mouseover", function() {
    var descricao3 = document.querySelector("#descricao3");
    descricao3.classList.remove("esconder");
});
item3.addEventListener("mouseout", function() {
    var descricao3 = document.querySelector("#descricao3");
    descricao3.classList.add("esconder");
});
//
var item4 = document.querySelector("#item4");
item4.addEventListener("mouseover", function() {
    var descricao4 = document.querySelector("#descricao4");
    descricao4.classList.remove("esconder");
});
item4.addEventListener("mouseout", function() {
    var descricao4 = document.querySelector("#descricao4");
    descricao4.classList.add("esconder");
});
//
var item5 = document.querySelector("#item5");
item5.addEventListener("mouseover", function() {
    var descricao5 = document.querySelector("#descricao5");
    descricao5.classList.remove("esconder");
});
item5.addEventListener("mouseout", function() {
    var descricao5 = document.querySelector("#descricao5");
    descricao5.classList.add("esconder");
});
//
var item6 = document.querySelector("#item6");
item6.addEventListener("mouseover", function() {
    var descricao6 = document.querySelector("#descricao6");
    descricao6.classList.remove("esconder");
});
item6.addEventListener("mouseout", function() {
    var descricao6 = document.querySelector("#descricao6");
    descricao6.classList.add("esconder");
});