class postBlog {
    constructor (titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}


function buttonPostNovo () {
    let titulo = document.getElementById("titulo")
    let autor = document.getElementById("autor")
    let conteudo = document.getElementById("conteudo")

    const newPostBlog = new postBlog(
        titulo.value,
        autor.value,
        conteudo.value
    )

    let arrayPost = []
    arrayPost.push(titulo.value, autor.value, conteudo.value)
    console.log(arrayPost)


    let publicacao = document.getElementById("section-posts")
    publicacao.innerHTML += "<h2>" + arrayPost[0] + "</h2>" + "<p>" + arrayPost[1] + "</p>" +"<p>" + arrayPost[2] + "</p>"

    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
}
