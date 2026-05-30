let pessoas = [];

function adicionarPessoa() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    if(nome === "" || idade === "") {
        alert("Preencha todos os campos!");
        return;
    }

    pessoas.push({
        nome,
        idade
    });

    atualizarTabela();

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
}

function atualizarTabela() {
    const tabela = document.getElementById("tabelaPessoas");

    tabela.innerHTML = "";

    pessoas.forEach((pessoa, index) => {
        tabela.innerHTML += `
            <tr>
                <td>${pessoa.nome}</td>
                <td>${pessoa.idade}</td>
                <td>
                    <button onclick="editarPessoa(${index})">Editar</button>
                    <button onclick="excluirPessoa(${index})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

function excluirPessoa(index) {
    pessoas.splice(index, 1);
    atualizarTabela();
}

function editarPessoa(index) {
    let novoNome = prompt("Novo nome:", pessoas[index].nome);
    let novaIdade = prompt("Nova idade:", pessoas[index].idade);

    if(novoNome && novaIdade) {
        pessoas[index].nome = novoNome;
        pessoas[index].idade = novaIdade;
        atualizarTabela();
    }
}