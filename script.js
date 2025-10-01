const body = document.body;
const cores = ['#57534dff', '#4a0000ff', '#20525dff', '#003c64ff', '#686868ff'];

// Função para mudar a cor conforme o scroll
function atualizarCorFundo() {
    // Calcula a porcentagem de scroll
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Calcula o índice da cor, garantindo que não ultrapasse o array
    const index = Math.min(Math.floor(scrollPercent * cores.length), cores.length - 1);

    // Aplica a cor ao body
    body.style.backgroundColor = cores[index];
}

// Evento de scroll
window.addEventListener('scroll', atualizarCorFundo);
