const projetos = [
  {
    nome: "Projeto 1 - Burgão Express",
    descricao: "É um aplicativo de fast-food para visualizar o cardápio e pedir lanches de forma rápida",
    link: "https://github.com/danielssantos2126-max/Documento-do-Aplicativo-Burg-o-Express-ideia-feita-por-Laila"
  },
  
  {
    nome: "Projeto 2 - Portifólio Profissional",
    descricao: "É um meu protifólio feito por HTML, CSS3 e JavaScript",
    link: "https://github.com/danielssantos2126-max/Portifolio-da-Laila-em-HTML-CSS-JavaScript"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver projeto</a>
  `;

  container.appendChild(card);
});

// DARK MODE + SALVAR
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("modo", "dark");
  } else {
    localStorage.setItem("modo", "light");
  }
}

// CARREGAR MODO SALVO
window.onload = () => {
  const modoSalvo = localStorage.getItem("modo");

  if (modoSalvo === "dark") {
    document.body.classList.add("dark");
  }
};

// MENSAGEM
const form = document.getElementById("form-contato");
const statusMsg = document.getElementById("status-msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
        statusMsg.textContent = "Por favor, preencha todos os campos.";
        statusMsg.style.color = "red";
        return;
    }

    statusMsg.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    statusMsg.style.color = "green";

    form.reset();
});
