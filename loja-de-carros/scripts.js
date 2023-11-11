function mostrarCores(marca) {
    const volkswagem = document.getElementById("volkswagem")
    const audi = document.getElementById("audi")
    const preco = document.getElementById("preco");
    let novoPreco;
    let novoSite;

    if (marca === 'volkswagem'){
        volkswagem.style.display = "block";
        audi.style.display = "none"
        bmw.style.display = "none"
        trocaFoto.src = "./img/volkswagem-showroom.jpg"
        novoPreco = "Golf GTi MK7 2.0 Turbo, a partir de R$117.990,00"
        novoSite = "https://www.vw.com.br/pt.html"
    }
    else if (marca === 'audi') {
        volkswagem.style.display = "none"
        bmw.style.display = "none"
        audi.style.display = "block"
        audi.style.marginLeft = "1000px"
        trocaFoto.src = "./img/audi-showrrom.jpg"
        novoPreco = "Audi A3 2.0 Turbo, a partir de R$139.990,00"
        novoSite = "https://www.audi.com.br/br/web/pt.html"
    }
    else if (marca === 'bmw') {
        volkswagem.style.display = "none"
        audi.style.display = "none"
        bmw.style.display = "block"
        bmw.style.marginLeft = "1000px"
        trocaFoto.src = "./img/bmw-showroom.jpg"
        novoPreco = "BMW M3 Coupé 2.0 Turbo, a partir de R$269.990,00"
        novoSite = "https://www.bmw.com.br/pt/index.html"
    }

    preco.textContent = novoPreco;
    linkSite.href = novoSite;
}

function alterarImagem(carro) {
    const foto = document.getElementById("trocaFoto")
    trocaFoto.src = carro
}

// adicionar bmw mesmo modelo, trocar os titulos para cada carro respectivo
//inserir href no html e linkar com java script botão "comprar agora"