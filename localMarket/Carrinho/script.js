$(document).ready(function(){
    //recupera o carrinho do local storage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    //elemnto da lista
    const listaElement = $("#lista");

    //elemento de total
    const totalElement = $("#total");

    function exibirCarrinho(){
        listaElement.empty();

        //variavel para acumular o preco
        let totalPreco = 0;

        //Iteracao sobre os elementos do carrinho
        $.each(carrinho, function(index, item){
            //cria um elemento de lista para cada item
            const listItem = $("<li>").text(
                `${item.descricao} - Preço: R$ ${item.preco.toFixed(2)}`
            );

            const removeButton = $("<button>")
            .text("❌")
            .css("margin-left", "10px")
            .click(function(){
                removerItemDoCarrinho(index);
            })
            listItem.append(removeButton)
            listaElement.append(listItem);
            totalPreco += item.preco;
        });

        totalElement.text(`Total: R$ ${totalPreco.toFixed(2)}`);
    }
    function removerItemDoCarrinho(index){
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        exibirCarrinho();
    }

    exibirCarrinho();
});

function gerarDocumentoWord(){
    const listaElement = document.getElementById("lista");
    const totalElement = document.getElementById("total");

    //clona a lista para evitar modificacoes diretas na original
    const listaClone = listaElement.cloneNode(true);

    //remover o botao de remove do word
    $(listaClone).find("button").remove();

    const listaHtml = listaClone.innerHTML;
    const totalHtml = totalElement.innerHTML;

    const conteudoHtml = `
        <html>
            <head>
            <meta charset="UTF-8" />
            <style>
                body{
                    margin: 0 auto;
                }
            </style>
            </head>
            <body>
                <h1 style={color: "red"}>PEDIDO CONFIRMADO</h1>
                <h3>Agradecemos sua preferencia</h3>
                <br/>
                ${listaHtml}
                <br/><br/>
                ${totalHtml}
            </body>
        </html>
    `;

    const blob = new Blob([conteudoHtml], {type: "application/msword" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "carrinho.doc";
    link.click();
    document.getElementById("pedido").style.display = "block";
}

function successClose(){
    document.getElementById("pedido").style.display = "none";
    // $('#pedido').css({display: 'none'});
}


// document.addEventListener("DOMContentLoaded", function () {
//   // Recupera o carrinho do localStorage
//   const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

//   // Elemento onde a lista será exibida
//   const listaElement = document.getElementById("lista");

//   // Elemento para exibir o total em preço
//   const totalElement = document.getElementById("total");

//   // Função para exibir o carrinho
//   function exibirCarrinho() {
//     // Limpa o conteúdo atual da lista
//     listaElement.innerHTML = "";

//     // Variável para calcular o total em preço
//     let totalPreco = 0;

//     // Itera sobre os itens do carrinho
//     carrinho.forEach((item, index) => {
//       // Cria um elemento de lista para cada item
//       const listItem = document.createElement("li");
//       listItem.textContent = `${item.descricao} - Preço: $${item.preco.toFixed(
//         2
//       )}`;

//       // Cria um botão de remoção
//       const removeButton = document.createElement("button");
//       removeButton.textContent = "❌";
//       removeButton.style.marginLeft = "10px";
//       removeButton.addEventListener("click", function () {
//         removerItemDoCarrinho(index);
//       });

//       // Adiciona o botão à lista
//       listItem.appendChild(removeButton);

//       // Adiciona o item à lista
//       listaElement.appendChild(listItem);

//       // Adiciona o preço do item ao total
//       totalPreco += item.preco;
//     });

//     // Exibe o total em preço no elemento totalElement
//     totalElement.textContent = `Total: $${totalPreco.toFixed(2)}`;
//   }

//   // Função para remover um item do carrinho
//   function removerItemDoCarrinho(index) {
//     carrinho.splice(index, 1);
//     localStorage.setItem("carrinho", JSON.stringify(carrinho));
//     exibirCarrinho();
//   }

//   // Chama a função para exibir o carrinho
//   exibirCarrinho();
// });