//Função para adicionar uma nova linha na tabela
function addToTable() {

    //Definindo as variaveis e recebendo os dados
    let titulo = document.getElementById('titulo').value;
    let descricao = document.getElementById('descricao').value;
    let professor = document.getElementById('professor').value;
    let lista = document.getElementById('lista').value;
    let table = document.getElementById("myTable");

    let tableSize = table.rows.length; //Calculando o tamanho da Tabela
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    row.id = tableSize; //Adicionando o id no elemento a ser criado

    //Criando o codigo do botão para remover a linha
    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Remover</button>";
    let btnEdit = "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>Editar</button>";

    //Preenchendo as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = titulo;
    cell3.innerHTML = descricao;
    cell4.innerHTML = professor;
    cell5.innerHTML = lista;
    cell6.innerHTML = btnCode;   
    cell7.innerHTML = btnEdit;   

    //Limpando os campos de inserção de dados
    document.getElementById('titulo').value = "";
    document.getElementById('descricao').value = "";
    document.getElementById('professor').value = "";
    document.getElementById('lista').value = "";

    //Retornando 'false' para impedir o reload da pagina
    return false;
}

function removeToTable(id){

    let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
    row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
    row.parentNode.removeChild(row); //Removendo a linha

    //Retornando 'false' para impedir o reload da pagina
    return false;
}

