const baseUrl = "http://localhost:3000/cadastros";

// async function consultaBase() {
//     const response = await fetch(baseUrl);
//     const data = await response.json();

//     console.log(data);
// }

async function consulta() {
    const response = await fetch(baseUrl);
    const data = await response.json();

    data.forEach((element) => {
        console.log(element);
        document.querySelector(
            "#nome"
        ).innerHTML += `Nome: ${element.Nome} <br> Endereço: ${element.endereco}  - ${element.numero} <br> ${element.bairro} <br><br>`;
    });
}



consulta()