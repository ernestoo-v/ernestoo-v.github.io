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
          const col = document.createElement('div');
          col.className = 'col';
          col.innerHTML = `
            <div class="card h-100">
              <div class="card-body">
                <div class="text-center mb-3">
                  <i class="${item.icon} fa-3x text-primary"></i>
                  <h5 class="card-title mt-2">${item.title}</h5>
                </div>
                <p class="card-text">${item.description}</p>
                ${ item.tools ? `<p><strong>Herramientas usadas:</strong> ${item.tools.join(', ')}</p>` : '' }
                ${ item.objective ? `<p><strong>Objetivo:</strong> ${item.objective}</p>` : '' }
                ${ item.difficulty ? `<p><strong>Dificultad:</strong> ${item.difficulty}</p>` : '' }
                ${ item.date ? `<p><strong>Fecha:</strong> ${item.date}</p>` : '' }
                ${ item.author ? `<p><strong>Autor:</strong> ${item.author}</p>` : '' }
                ${ item.category ? `<p><strong>Categoría:</strong> ${item.category}</p>` : '' }
                <div class="text-center mt-3">
                  <a href="${item.link}" class="btn btn-primary">Leer más</a>
                </div>
              </div>
            </div>
          `;
          cardsRow.appendChild(col);
        });
      })
      .catch(error => {
        console.error('Error:', error);
        errorMessage.style.display = 'block';
        cardsRow.style.display = 'none';
      });
  });
  