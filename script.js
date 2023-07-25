function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add('light')
  // }

  html.classList.toggle("light")

  //pegar img
  const img = document.querySelector("#profile img")

  //aí substituir a imagem
  //porém a condição é se tiver light mode, adicionar imagem light, se tivem sem, manter a normal
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  //tente mudar o alt
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "foto de óculos escuros com Mayk Brito")
  } else {
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
