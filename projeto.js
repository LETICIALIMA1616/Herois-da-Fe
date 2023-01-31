function carregaDicionario() {
    var biografias = {
        bio01: {
            nome: "ENOQUE",
            descricao: "Outra pessoa que viveu num período muito remoto da História da humanidade, antes mesmo do Dilúvio. Pela fé, Enoque obteve testemunho de haver agradado a Deus e foi transladado, sem ter conhecido a morte (Hebreus 11:5). Enoque e o profeta Elias foram as duas únicas pessoas que nunca morreram",
            citacao: "Hebreus 11:5",
            imagem: "imagens/enoque.jpg"
        },

        bio02: {
            nome: "NOÉ",
            descricao: "Noé: ele foi divinamente instruído por Deus a construir uma arca. O Senhor lhe avisou que a terra seria inundada por causa da pecaminosidade humana. Então Noé confiou em Deus acerca dos acontecimentos que ainda não se viam, por mais que aos olhos humanos, pareciam não fazer sentido. Pela fé, Noé construiu a arca e sobreviveu ao Dilúvio juntamente com sua família.",
            citacao: "Hebreus 11:7",
            imagem: "imagens/noe.png"
        },

        bio03: {
            nome: "Abraão",
            descricao: "Abraão: o grande patriarca do povo de Israel é um exemplo notável de fé genuína no Senhor. Ele creu verdadeiramente nas promessas de Deus. Por isto ele deixou sua terra, Ur, sem saber para onde iria exatamente. Depois ele passou a habitar na Terra Prometida como estrangeiro. Além disso, ele claramente entendeu que a promessa de Deus não se resumia apenas a uma pátria terrena, mas, sobretudo, a uma pátria celestial",
            citacao: "Hebreus 11:8-12",
            imagem: "imagens/abraao.jpg"
        },
        bio04: {
            nome: " Sara",
            descricao: "Sara: esposa de Abraão que era estéril. Quando Deus lhe prometeu um filho, Sara já tinha uma idade muito avançada. Apesar de já estar com mais de noventa anos de idade, pela fé Sara recebeu do Senhor a oportunidade de ser mãe (Hebreus 11:11)",
            citacao: "Hebreus 11:11",
            imagem: "imagens/Sara.png"
        },
        bio05: {
            nome: "Isaque",
            descricao: "Isaque: filho de Abraão e Sara e herdeiro da mesma promessa. Pela fé, ele abençoou seus filhos acerca de coisas que ainda estavam por vir",
            citacao: "Hebreus 11:20",
            imagem: "imagens/historia-de-isaque.jpg"
        },
        bio06: {
            nome: "Jacó",
            descricao: "Jacó: filho de Isaque e neto de Abraão. O escritor de Hebreus destaca que foi pela fé que ele abençoou os filhos de José, dizendo que o menor seria mais proeminente que o maior",
            citacao: "Hebreus 11:21",
            imagem: "imagens/jaco.jpg"
        }

    };

    var content = document.getElementById("content");

    for (var bio in biografias) {

        content.innerHTML +=

            '<div class="card">' +

            '<img src="' +

            biografias[bio].imagem +

            '"/>' +

            "<details>" +

            "<summary>" +

            biografias[bio].nome +

            "</summary>" +

            "<p>" +

            biografias[bio].descricao +

            "</p>" +

            "<blockquote><q>" +

            biografias[bio].citacao +

            "</q></blockquote>" +

            "</details></div>";

    }


}

carregaDicionario();

