document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("modoToggle");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
      toggleBtn.textContent = "🌞";
    } else {
      toggleBtn.textContent = "🌙";
    }
  });
});

// Modal de imagem
const imagens = document.querySelectorAll('.card img');
const modal = document.getElementById('imagemModal');
const imagemExpandida = document.getElementById('imagemExpandida');
const fechar = document.querySelector('.fechar');

imagens.forEach(img => {
  img.addEventListener('click', () => {
    imagemExpandida.src = img.src;
    modal.style.display = 'block';
  });
});

fechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
