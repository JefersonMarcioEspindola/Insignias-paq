function atualizarCracha() {
    // obter os valores dos campos de entrada
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    
    // atualizar o conteúdo do crachá
    document.getElementById('nome-cracha').innerHTML = nome;
    document.getElementById('idade-cracha').innerHTML = idade;
  }

function atualizarInsignias() {
    // Obter as opções selecionadas em cada select
    const select1 = document.querySelector('select[name="select1"]');
    const select2 = document.querySelector('select[name="select2"]');
    const select3 = document.querySelector('select[name="select3"]');
    const opcao1 = select1.options[select1.selectedIndex].value;
    const opcao2 = select2.options[select2.selectedIndex].value;
    const opcao3 = select3.options[select3.selectedIndex].value;
  
    // Definir o caminho das imagens de acordo com as opções selecionadas
    const caminho1 = './img/insignias/' + opcao1 + '.svg';
    const caminho2 = './img/insignias/' + opcao2 + '.svg';
    const caminho3 = './img/insignias/' + opcao3 + '.svg';
  
    // Atualizar as imagens de cada insignia
    const insignia1 = document.querySelector('#Insignia1');
    const insignia2 = document.querySelector('#Insignia2');
    const insignia3 = document.querySelector('#Insignia3');
    insignia1.src = caminho1;
    insignia2.src = caminho2;
    insignia3.src = caminho3;
  }
  
  
  
  
  
  