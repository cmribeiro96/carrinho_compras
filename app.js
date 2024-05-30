let totalGeral = 0;
//Para que estes elementos sejam zerados, precisam estar fora da função
//Do contrário, cada vez que clicarmos, os valores serão zerados.
// document.getElementById('lista-produtos').innerHTML = '';
// document.getElementById('valor-total').textContent = '0';
//podemos adicionar no lugar das duas linhas de cima o seguinte:
limpar();

function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x </span>${nomeProduto}<span class="texto-azul">${preco}</span>
  </section>` 
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0; //esta nós queremos dentro da função
    //para zerar a contagem da quantidade cada vez que adicionamos o item no carrinho.

}

function limpar (){
    totalGeral = 0; //tira o let pois não precisa declarar novamente.
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = '0';
    document.getElementById('quantidade').value = 0;
}