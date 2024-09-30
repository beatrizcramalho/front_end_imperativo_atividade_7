alert("Bem-vindo ao Console do Navegador!");
console.log("Olá mundo!");

console.log("Largura da janela:", window.innerWidth);
console.log("Altura da janela:", window.innerHeight);

localStorage.setItem('fruta', 'melancia');
let valor = localStorage.getItem('fruta');
console.log("Valor recuperado do Local Storage:", valor);

let div = document.createElement('div');
div.id = 'div';
document.body.appendChild(div);

div.innerHTML = "Este é um texto dentro da div!";
div.style.color = 'white';
div.style.backgroundColor = 'blue';
div.style.padding = '10px';
div.style.fontSize = '20px';

let paragrafo = document.getElementById('paragrafo');
paragrafo.innerHTML = "Texto alterado com JavaScript!";
paragrafo.style.backgroundColor = 'yellow';

let imagem = document.getElementById('imagem');
imagem.setAttribute('title', 'Imagem dinâmica');

let botao = document.createElement('button');
botao.innerHTML = "Clique para alterar o conteúdo";
document.body.appendChild(botao);
botao.addEventListener('click', function() {
    div.innerHTML = "O conteúdo foi alterado!";
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log("A tecla Enter foi pressionada!");
    }
});

let lista = document.createElement('ul');
document.body.appendChild(lista);

function adicionar_item_lista(texto) {
    let item = document.createElement('li');
    
    item.innerHTML = texto + " ";

    let botao_remover = document.createElement('button');
    botao_remover.innerHTML = "Remover";
    
    botao_remover.addEventListener('click', function() {
        lista.removeChild(item);
    });
    
    item.appendChild(botao_remover);
    lista.appendChild(item);
}

adicionar_item_lista("Item 1");
adicionar_item_lista("Item 2");
adicionar_item_lista("Item 3");

