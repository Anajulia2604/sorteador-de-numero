function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value); //parseint parametro o recebimento de um numero inteiro
    let ate = parseInt(document.getElementById('ate').value);
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }


let sorteados = [];
let numero;


for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);


    while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
    }

    sorteados.push(numero);
}

let resultado = document.getElementById('resultado');
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
alterarStatusBotao();
}

//push é para incluir o valor no array sorteados , Array[]
//while para repetir um bloco de código ENQUANTO/ sorteados variavel array / todo array tem a variavel includes e ela vai devolver true ou false/ ou seja enquanto variavel sorteados ja tenha incluido esse numero enquanto der true ele irá gerar um novo 
//getelementebyid para acessar e manupular elementos para seu atributo Id
//.value quando queremos recuperar o valor que recebemos em um campo de texto
//innerHTML utilizamos quando precisamos manipular o conteudo HTML interno de um elemento
// .textcContent quando queremos inserir ou modificar um texto simples dentro de um elemento HTML
// ELE VAI DE ZERO ATÉ A QUANTIDADE //for é um loop /i = 0 (ela começa no zero) / i<quantidader (enquanto ela for menor que a quantidade que a pessoa digitou) / i++ (de um em um) 

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

//toda tag HTML quando recuperamos com javascript e guarda em uma variavel,então o classlist da uma lista de de classes
// a condição if irá realizar a varificação da classe do botão e se a 'container__botao-desabilitado' estiver ,chamaremos o botão.classList.remove para remover , e chamaremos para adicionar a classe do botão comum(para o botão não ficar fora do padrão) usando botao.classList.add('container__botao'); usando o container__botao que é a mesma classe do botão sortear, o .add irá adicionar

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

// Nesse chamaremos a função reiniciar do botão do HTML
// '' string vazia
//document.getElementById('resultado').innerHTML nesse caso estou chamando novamente o <div class="container__texto" id="resultado"> do HTML porem pedindo que ele retorne a mensagem de nenhum umero sorteado , uma vez que estamos reiniciando o campo e todos devem está vazios

