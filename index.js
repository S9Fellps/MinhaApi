function Procurar() {
    let personagem = document.getElementById('personagem').value;

    let finalURL = `https://rickandmortyapi.com/api/character/?name=${personagem}`;
    console.log(finalURL);

    // Fetch para pegar os dados da API
    fetch(finalURL)
        .then(function (response) {
            return response.json();  // Retorna a resposta como JSON
        })
        .then(function (data) {
            console.log(data);  

            if (data.results && data.results.length > 0) {
                let personagemData = data.results[0];  // Seleciona o primeiro personagem encontrado

                // Atualizar os dados no HTML
                let nome = document.getElementById('nome');
                let status = document.getElementById('status');
                let especie = document.getElementById('especie');
                let tipo = document.getElementById('tipo');
                let genero = document.getElementById('genero');
                let imagem = document.getElementById('imagem');

                // Atualizando os dados com as informações da API
                nome.innerHTML = personagemData.name || "Nome não disponível";
                status.innerHTML = personagemData.status || "Desconhecido";
                especie.innerHTML = personagemData.species || "Desconhecido";
                tipo.innerHTML = personagemData.type || "Desconhecido";
                genero.innerHTML = personagemData.gender || "Desconhecido";
                imagem.src = personagemData.image || "url_da_imagem_padrão";  // Atualiza a imagem
            }
        })
}
