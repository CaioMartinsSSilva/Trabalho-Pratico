// Função para carregar os cards de filmes
function carregarCardsFilmes() {
    const filmesContainer = document.getElementById('filmes-container');
    
    dados.filmes.forEach(filme => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 mb-4';
        
        col.innerHTML = `
            <div class="filme-card h-100">
                <img src="${filme.imagem_principal}" class="filme-img" alt="${filme.titulo}">
                <div class="filme-body">
                    <h3 class="filme-title">${filme.titulo}</h3>
                    <p class="filme-text">${filme.descricao}</p>
                    <div class="filme-meta">
                        <span class="filme-ano">${filme.ano}</span>
                        <span class="filme-avaliacao"><i class="fas fa-star"></i> ${filme.avaliacao}</span>
                    </div>
                    <div class="mb-3">
                        ${filme.genero.map(g => `<span class="badge bg-dark me-1">${g}</span>`).join('')}
                    </div>
                    <a href="detalhes.html?id=${filme.id}" class="btn btn-outline-danger w-100">
                        <i class="fas fa-info-circle me-2"></i> Detalhes
                    </a>
                </div>
            </div>
        `;
        
        filmesContainer.appendChild(col);
    });
}

// Função para carregar os detalhes do filme
function carregarDetalhesFilme() {
    const urlParams = new URLSearchParams(window.location.search);
    const filmeId = parseInt(urlParams.get('id'));
    const filme = dados.filmes.find(f => f.id === filmeId);
    const detalhesContainer = document.getElementById('detalhes-container');

    if (filme) {
        detalhesContainer.innerHTML = `
            <div class="row">
                <div class="col-md-4 mb-4 mb-md-0">
                    <img src="${filme.imagem_principal}" class="img-fluid rounded shadow" alt="${filme.titulo}">
                </div>
                <div class="col-md-8">
                    <h1 class="text-vermelho mb-3">${filme.titulo} <span class="text-white">(${filme.ano})</span></h1>
                    <div class="d-flex flex-wrap align-items-center mb-3">
                        <span class="badge bg-dark me-3"><i class="fas fa-star text-warning me-1"></i> ${filme.avaliacao}/10</span>
                        <span class="me-3">${filme.duracao}</span>
                        <span>Classificação: ${filme.classificacao}</span>
                    </div>
                    <div class="mb-4">
                        ${filme.genero.map(g => `<span class="badge bg-dark me-2">${g}</span>`).join('')}
                    </div>
                    <h3 class="text-vermelho mb-2">Sinopse</h3>
                    <p class="mb-4">${filme.sinopse}</p>
                    <h3 class="text-vermelho mb-2">Elenco Principal</h3>
                    <ul class="mb-4">
                        ${filme.elenco.map(ator => `<li>${ator}</li>`).join('')}
                    </ul>
                    <p class="mb-4"><strong>Diretor:</strong> ${filme.diretor}</p>
                    <a href="index.html" class="btn btn-danger">
                        <i class="fas fa-arrow-left me-2"></i> Voltar
                    </a>
                </div>
            </div>
            
            <div class="mt-5">
                <h3 class="text-vermelho mb-4">Galeria de Imagens</h3>
                <div class="row">
                    ${filme.imagens_complementares.map(img => `
                        <div class="col-md-4 mb-4">
                            <div class="card border-0 bg-cinza-escuro h-100">
                                <img src="${img.src}" class="card-img-top" alt="${img.descricao}">
                                <div class="card-body">
                                    <p class="card-text text-center">${img.descricao}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        detalhesContainer.innerHTML = `
            <div class="alert alert-danger text-center py-4">
                <h3 class="mb-3"><i class="fas fa-exclamation-triangle me-2"></i> Filme não encontrado</h3>
                <p class="mb-3">O filme que você está procurando não foi encontrado em nosso catálogo.</p>
                <a href="index.html" class="btn btn-danger">
                    <i class="fas fa-arrow-left me-2"></i> Voltar para a lista
                </a>
            </div>
        `;
    }
}

// Função para animar a navbar ao scroll
function animarNavbar() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Verificar qual página está sendo carregada
document.addEventListener('DOMContentLoaded', function() {
    animarNavbar();
    
    if (document.getElementById('carousel-inner')) {
        carregarCarrossel();
        carregarCardsFilmes();
    } else if (document.getElementById('detalhes-container')) {
        carregarDetalhesFilme();
    }
});