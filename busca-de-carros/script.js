const input = document.querySelector("input");
    const p = document.querySelector("p");
    const img = document.querySelector("img");

    const cars = [
      {
        name: "Porsche",
        cor: "Vermelha",
        src:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqfeEQ_fNCX7axKk4c1IQvi_6WtAIdelb2lmqnmpfiDyUzyDO04G-ta2k261OoA3GGITxTRXIaFVi_zrgfTs98NKCAxoD67smdthyMnncsSlV6z5eP1XEDkpbCVS3Nmto_UCQU1Ofuon-7scHGQHLtr5yb9V85McVnzVtjtHjxnSnESTducaZ8OMmg/s2560/Porsche-911-GTS-2024.jpg"
      },
      {
        name: "Camaro",
        cor: "Amarelo",
        src: "https://images.alphacoders.com/150/thumb-1920-150443.jpg"
      },
      {
        name: "A3",
        cor: "Azul",
        src: "https://images2.alphacoders.com/106/1068212.jpg"
      },
      {
        name: "X1",
        cor: "Branca",
        src:
          "https://w.forfun.com/fetch/5f/5fe1db025541c1422a5dc89e8f63d803.jpeg"
      },
      {
        name: "Lamborghini",
        cor: "Laranja",
        src:
          "https://i.pinimg.com/originals/de/d3/ea/ded3ea467ffbe62bbd1a55c5922ce563.png"
      },
      {
        name: "Ferrari",
        cor: "Vermelha",
        src:
          "https://i.pinimg.com/1200x/6b/67/d0/6b67d0ea53720a12f4cc417bfecc0b56.jpg"
      },

      {
        name: "Golf",
        cor: "Cinza",
        src:
          "https://s1.1zoom.me/big0/243/Volkswagen_2019_Golf_GTI__Rabbit_Grey_561511_1280x853.jpg"
      },

      {
        name: "Up TSI",
        cor: "Prata",
        src:
          "https://2.bp.blogspot.com/-idWcCozanuA/XMr7DOY6ZhI/AAAAAAACa3k/BvGzFIiiwP8DI4JmB7k5dHvfrwVYCjqKQCLcBGAs/s1600/up__Xtreme__10_.jpg"
      },

      {
        name: "GTR",
        cor: "Laranja",
        src:
          "https://besthqwallpapers.com/Uploads/17-9-2019/104601/thumb2-nissan-gt-r-back-view-tuning-r35-4k.jpg"
      },

      {
        name: "Lancer",
        cor: "Branco",
        src: "https://wallpapercave.com/wp/wp9190023.jpg"
      }
    ];

    function pesquisar() {
      for (let i = 0; i < cars.length; i++)
        if (input.value.toLowerCase() === cars[i].name.toLowerCase()) {
          p.innerHTML = `Temos ${cars[i].name} na cor ${cars[i].cor}, venha ve-lo pessoalmente:`;
          img.src = cars[i].src;
          break;
        } else {
          p.innerHTML = `Infelizmente não temos ${input.value} em nossa loja, pesquise outro veiculo.`;
          img.src =
            "https://img.freepik.com/vetores-premium/icone-de-erro-minimo-moderno-nao-encontrado-oops-pagina-nao-encontrada-404-erro-a-pagina-nao-encontrada-com-conceito_599740-716.jpg?w=2000";
        }
    }