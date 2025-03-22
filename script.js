document.addEventListener('DOMContentLoaded', () => {
    const cardsRow = document.getElementById('cards-row');
    const errorMessage = document.getElementById('error-message');

    fetch('./docs.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar docs.json');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(item => {
                // Determinar la URL según el tipo
                const isPdf = item.type === 'pdf';
                const href = isPdf 
                    ? `view_pdf.html?pdf=${encodeURIComponent(item.link)}` 
                    : item.link;

                const cardContainer = document.createElement('div');
                cardContainer.className = 'card-container';
                cardContainer.innerHTML = `
                    <a href="${href}" class="card-link" target="_blank">
                        <div class="card">
                            <div class="text-center mb-3">
                                <i class="${item.icon} fa-3x card-icon"></i>
                                <h5 class="card-title mt-2">${item.title}</h5>
                            </div>
                            <div class="card-flip">
                                <div class="card-front">
                                    <p class="card-text">${item.description}</p>
                                    ${item.tools ? `<p class="card-text"><strong>Herramientas usadas:</strong> ${item.tools.join(', ')}</p>` : ''}
                                </div>
                                <div class="card-back">
                                    ${item.objective ? `<p><strong>Objetivo:</strong> ${item.objective}</p>` : ''}
                                    ${item.difficulty ? `<p><strong>Dificultad:</strong> ${item.difficulty}</p>` : ''}
                                    ${item.date ? `<p><strong>Fecha:</strong> ${item.date}</p>` : ''}
                                    ${item.author ? `<p><strong>Autor:</strong> ${item.author}</p>` : ''}
                                    ${item.category ? `<p><strong>Categoría:</strong> ${item.category}</p>` : ''}
                                </div>
                            </div>
                        </div>
                    </a>
                `;
                cardsRow.appendChild(cardContainer);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            errorMessage.style.display = 'block';
            cardsRow.style.display = 'none';
        });
});