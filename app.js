const listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    if (nome) {
        listaAmigos.push(nome);
        atualizarLista();
        input.value = '';
    }
}

function atualizarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }
    const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: ${sorteado}`;
}
