function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      (alt =
        "Foto de Mayk Brito sorrindo, usando oculos e camisa preta, barba e fundo amarelo.")
    )
  } else {
    //Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      (alt =
        "Foto de Mayk Brito sorrindo, usando oculos e camisa preta, barba e fundo branco.")
    )
  }
}