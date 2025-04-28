
function carregarCarrossel() {
    const carouselInner = document.getElementById('carousel-inner');
    const filmesDestaque = dados.filmes.filter(filme => filme.destaque);


    carouselInner.innerHTML = '';

    filmesDestaque.forEach((filme, index) => {
        const item = document.createElement('div');
        item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
    
        item.style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%), url('${filme.imagem_principal}')`;
        item.style.backgroundSize = 'cover';
        item.style.backgroundPosition = 'center';
        item.style.height = '80vh';
        item.style.minHeight = '500px';

        const caption = document.createElement('div');
        caption.className = 'carousel-caption';
        caption.innerHTML = `
            <div class="d-flex align-items-center mb-3">
                <span class="badge bg-dark me-2">DESTAQUE</span>
                <span class="text-white"><i class="fas fa-star text-warning"></i> ${filme.avaliacao}/10</span>
            </div>
            <h1 class="carousel-title">${filme.titulo}</h1>
            <p class="carousel-text">${filme.descricao}</p>
            <div class="d-flex flex-wrap">
                <a href="detalhes.html?id=${filme.id}" class="btn btn-danger carousel-btn">
                    <i class="fas fa-play me-2"></i> ASSISTIR
                </a>
                <a href="detalhes.html?id=${filme.id}" class="btn btn-outline-light carousel-btn">
                    <i class="fas fa-info-circle me-2"></i> DETALHES
                </a>
            </div>
            <div class="mt-3">
                ${filme.genero.map(g => `<span class="badge bg-dark me-2">${g}</span>`).join('')}
            </div>
        `;
        
        item.appendChild(caption);
        carouselInner.appendChild(item);
    });

    
    const carousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
        interval: 5000,
        ride: 'carousel',
        wrap: true
    });
}
