// Estrutura de dados JSON para os filmes
const dados = {
    "filmes": [
        {
            "id": 1,
            "titulo": "Vingadores: Ultimato",
            "descricao": "Os heróis se reúnem para desfazer as ações de Thanos e restaurar o universo.",
            "ano": 2019,
            "diretor": "Anthony Russo, Joe Russo",
            "elenco": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
            "genero": ["Ação", "Aventura", "Ficção Científica"],
            "duracao": "181 min",
            "classificacao": "12+",
            "avaliacao": 8.4,
            "sinopse": "Após Thanos eliminar metade das criaturas vivas, os Vingadores precisam lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
            "destaque": true,
            "imagem_principal": "https://image.tmdb.org/t/p/original/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg",
            "imagens_complementares": [
                { 
                    "id": 1,
                    "src": "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
                    "descricao": "Cena dos Vingadores reunidos"
                },
                { 
                    "id": 2,
                    "src": "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
                    "descricao": "Thanos enfrentando os heróis"
                }
            ]
        },
        {
            "id": 2,
            "titulo": "John Wick 4",
            "descricao": "John Wick descobre um caminho para derrotar a Alta Cúpula.",
            "ano": 2023,
            "diretor": "Chad Stahelski",
            "elenco": ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
            "genero": ["Ação", "Thriller", "Crime"],
            "duracao": "169 min",
            "classificacao": "16+",
            "avaliacao": 7.8,
            "sinopse": "Com o preço por sua cabeça cada vez maior, John Wick descobre um caminho para derrotar a Alta Cúpula. Mas antes que ele possa ganhar sua liberdade, Wick deve enfrentar um novo inimigo com poderosas alianças em todo o mundo.",
            "destaque": true,
            "imagem_principal": "https://image.tmdb.org/t/p/original/rXTqhpkpj6E0YilQ49PK1SSqLhm.jpg",
            "imagens_complementares": [
                { 
                    "id": 1,
                    "src": "https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
                    "descricao": "John Wick em cena de ação"
                }
            ]
        },
        {
            "id": 3,
            "titulo": "Duna",
            "descricao": "Paul Atreides viaja para o planeta mais perigoso do universo.",
            "ano": 2021,
            "diretor": "Denis Villeneuve",
            "elenco": ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
            "genero": ["Ficção Científica", "Aventura"],
            "duracao": "155 min",
            "classificacao": "12+",
            "avaliacao": 7.9,
            "sinopse": "Em um futuro distante, nobres famílias disputam o controle do planeta deserto Arrakis, também conhecido como Duna, a única fonte da substância mais valiosa do universo, a especiaria Melange.",
            "destaque": true,
            "imagem_principal": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg",
            "imagens_complementares": [
                { 
                    "id": 1,
                    "src": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg",
                    "descricao": "Paul Atreides em Arrakis"
                }
            ]
        },
        {
            "id": 4,
            "titulo": "Oppenheimer",
            "descricao": "A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.",
            "ano": 2023,
            "diretor": "Christopher Nolan",
            "elenco": ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
            "genero": ["Drama", "Histórico"],
            "duracao": "180 min",
            "classificacao": "16+",
            "avaliacao": 8.2,
            "sinopse": "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.",
            "destaque": false,
            "imagem_principal": "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
            "imagens_complementares": [
                { 
                    "id": 1,
                    "src": "https://image.tmdb.org/t/p/original/3WjbxaqY4judc7aDqctR4PeIh5C.jpg",
                    "descricao": "Oppenheimer em seu laboratório"
                }
            ]
        },
        {
            "id": 5,
            "titulo": "O Poderoso Chefão",
            "descricao": "A saga da família Corleone, uma das mais poderosas famílias da máfia italiana.",
            "ano": 1972,
            "diretor": "Francis Ford Coppola",
            "elenco": ["Marlon Brando", "Al Pacino", "James Caan"],
            "genero": ["Drama", "Crime"],
            "duracao": "175 min",
            "classificacao": "16+",
            "avaliacao": 8.7,
            "sinopse": "Don Vito Corleone é o chefe de uma 'família' de Nova York que está feliz, pois Connie, sua filha, se casou com Carlo. Michael, seu filho, que foi combatente de guerra, chegou para o casamento. Porém, Vito é atingido por tiros e fica gravemente ferido.",
            "destaque": false,
            "imagem_principal": "https://image.tmdb.org/t/p/original/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg",
            "imagens_complementares": [
                { 
                    "id": 1,
                    "src": "https://image.tmdb.org/t/p/original/9n2pIFHovQm4CdNH2A6M5qYgUfz.jpg",
                    "descricao": "Marlon Brando como Don Corleone"
                }
            ]
        }
    ]
};