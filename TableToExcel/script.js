function adicionarItem(){
    // obter os valores dos campos de entrada
    var nome = document.getElementById("nome").value; 
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;

    // validar se os campos estão preenchidos
    if(!nome || !valor || !quantidade){
        alert("Preencha todos os campos");
        return;
    }

    // criar uma linha na tabela com 3 celulas
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    var celulaNome = novaLinha.insertCell(0);
    var celulaValor = novaLinha.insertCell(1);
    var celulaQuantidade = novaLinha.insertCell(2);

    //Atribuir as celulas os valores digitados.
    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade;

    // limpar os campos
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";
}
