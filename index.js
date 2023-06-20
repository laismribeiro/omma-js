// 1 - exibir nome da empresa
console.log("**Omma - Receitas com afeto**");

// variável com objeto que armazena os atributos no formato indice: valor
// um objeto pode armazenar diferentes tipos de dados
let receita = {
  titulo: "Bolo de cenoura",
  nivelDificuldade: "fácil",
  listaIngredientes: ["cenoura", "farinha de trigo", "ovos", "leite"],
  preparo: "mistura tudo e coloca numa forma untada pra assar a 200C",
  linkVideo: "http://youtube.com",
  vegana: false,
};

// console.log(receita.titulo + receita.vegana);

// Template String com IF Ternário
// console.log(`
// Titulo: ${receita.titulo}
// Vegana: ${receita.vegana ? "sim" : "não"}
// `);

// console.log("Titulo: "  + receita.titulo + "\nVegana: " + (receita.vegana ? 'sim' : 'não'));

// 2 - criar lista de receitas (array)

let receitas = [
  {
    id: 1,
    titulo: "Bolo de cenoura",
    nivelDificuldade: "fácil",
    listaIngredientes: ["cenoura", "farinha de trigo", "ovos", "leite"],
    preparo: "mistura tudo e coloca numa forma untada pra assar a 200C",
    linkVideo: "http://youtube.com",
    vegana: false,
  },
  {
    id: 2,
    titulo: "Tabule",
    nivelDificuldade: "fácil",
    listaIngredientes: [
      "trigo hidratado",
      "tomate",
      "pepino",
      "suco de limão",
      "azeite",
    ],
    preparo: "corta tudo bem pequeno e mistura com suco de limão e azeite",
    linkVideo: "http://youtube.com",
    vegana: true,
  },
];

// nomeArray[INDICE].atributo
//console.log(receitas[0].titulo);

// 3 - criar uma função para cadastrar receitar
// Arrow Function
const cadastrarReceita = (
  titulo,
  nivelDificuldade,
  listaIngredientes,
  preparo,
  linkVideo,
  vegana
) => {
  let novaReceita = {
    id: receitas.length + 1,
    titulo,
    nivelDificuldade,
    listaIngredientes,
    preparo,
    linkVideo,
    vegana,
  };

  // ARRAY.push() adiciona um novo item no array
  receitas.push(novaReceita);

  // Feedback para o usuário
  console.log(`Nova receita cadastrada: ${novaReceita.titulo}`);
};

cadastrarReceita(
  "Misto Quente",
  "fácil",
  ["pão", "queijo", "presunto"],
  "junto tudo e esquenta",
  "https://youtube.com",
  false
);

const exibirReceitas = () => {
  // Também pode ser feito com Array.forEach
  for (let index = 0; index < receitas.length; index++) {
    let receitaAtual = receitas[index];
    console.log(`
    --------------------------------
    Receita : ${receitaAtual.titulo} (id: ${receitaAtual.id})
    Ingredientes: ${receitaAtual.listaIngredientes.join(", ")}
    É vegano? " ${receita.vegana ? "sim" : "não"}
    --------------------------------`);
  }
};

// exibirReceitas();

const deletarReceita = (id) => {
  // o método filter usa uma comparação (nesse caso mantem todos as receitas com id diferente do parâmetro)
  receitas = receitas.filter((receita) => receita.id != id);

  console.log("Receita deletada com sucesso!");
};

// deletarReceita(2);
// exibirReceitas();