function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // Trocando a imagem de acordo com o tema

    // usar a tag img 
    const img = document.querySelector('#profile img')

    // Substituir a imagem 
    if (html.classList.contains('light')) {
         // Se tiver light-mode, adicionar imagem light
        img.setAttribute('src', './Projeto/assets/avatarlightemanuel.png')
    } else {
    // Se tiver sem light-mode, manter imagem normal
        img.setAttribute('src', './Projeto/assets/avataremanuel.png')
    }
}