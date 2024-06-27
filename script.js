document.getElementById('calculadoraForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores dos campos de entrada
    var homens = parseInt(document.getElementById('homens').value);
    var mulheres = parseInt(document.getElementById('mulheres').value);
    var criancas = parseInt(document.getElementById('criancas').value);

    // Calcular as quantidades necessárias
    var carneBovina = homens * 500 + mulheres * 300 + criancas * 200;
    var frango = homens * 200 + mulheres * 200 + criancas * 100;
    var linguica = homens * 200 + mulheres * 200 + criancas * 200;
    var refrigerante = homens * 300 + mulheres * 400 + criancas * 200;
    var cerveja = homens * 800 + mulheres * 500;

    // Mostrar os resultados na div de resultados
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <h2>Quantidade de itens a serem comprados:</h2>
        <p>Carne bovina: ${carneBovina}g</p>
        <p>Frango: ${frango}g</p>
        <p>Linguiça: ${linguica}g</p>
        <p>Refrigerante: ${refrigerante}ml</p>
        <p>Cerveja: ${cerveja}ml</p>
    `;
});
