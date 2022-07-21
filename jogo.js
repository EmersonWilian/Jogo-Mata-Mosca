 
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '') //Replace serve para trocar de caractere

if(nivel === 'normal'){
    criaMoscaTempo = 2000
}else if (nivel === 'dificil'){
    criaMoscaTempo = 1000
}else if (nivel === 'extremo'){
    criaMoscaTempo = 500
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

 ajustaTamanhoPalcoJogo()
//============================================== criando o cronometro ===================================================
    var cronometro = setInterval(function(){
        tempo -=1 //Irá decrementar 1

        if (tempo < 0 ){
            clearInterval(cronometro) //Limpa o alerta depois que ele aparece (aparece uma vez só)
            clearInterval(criaMosca)  //Limpa e para o sistema de criar moscas
            window.location.href = 'vitoria_jogo.html'
        }else{
            document.getElementById('cronometro').innerHTML = tempo //o 'INNERHTML' é o valor entre as tags
        }

    }, 1000)

function posicaoRandomica() {

    //=================================== Removendo a mosca anterior (caso exista)=======================================
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        //Removendo os corações do jogo
        if(vidas > 3 ){
            
            window.location.href = 'fim_de_jogo.html'//Redirecionando o usuário para outra página quando ele perder

        }else{
        document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
        vidas++
        } 
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90


    // ========================== para n sair fora da tela a mosca ===================================================
    posicaoX = posicaoX < 0 ? 0 : posicaoX // se posix for menor que 0 ela recebe ela mesmo, para n desaparecer da tela
    posicaoY = posicaoY < 0 ? 0 : posicaoY // se posix for menor que 0 ela recebe ela mesmo, para n desaparecer da tela

    console.log(posicaoX, posicaoY)

    //Criando o elemento HTML
    var mosca = document.createElement('img') 

    mosca.src = 'imagens/mosca.png'  // criando a imagem de forma dinâmica

    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()  
        // Aplicando estilo na imagem da mosca aleatoriamente atraves de 3 classes
        // o tamanho do mosquito é aleatorio
        //chamando o ladoAleatorio para inversão do lado da mosca

    // ========= definindo onde a mosca vai aparecer aleatoriamente =====================================================
    mosca.style.left = posicaoX + 'px'  //atribuindo o valor da posição x para formar a cordenada a esquerda do navegador
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function () { 
        this.remove() // função de clicar sobre a mosca e remover a mosca sem perder vida -----------
    }

    document.body.appendChild(mosca)  //Estamos adicionando um filho para o body (adicionando esta imagem no corpo da page)


}


// =================================== criando tamanho de moscas diferentes =========================================

function tamanhoAleatorio(){
     var classe = Math.floor(Math.random()*3) // result entre 0 e 3

        switch(classe){
            case 0:
                return 'mosca1'
            case 1:
                return 'mosca2'    //Classe retornando de forma aleatória
            case 2:
                return 'mosca3'

        }

}

// =============================== mudando de lado o rosto da mosca aleatoriamente ==================================

function ladoAleatorio (){
    
    var classe = Math.floor(Math.random()*2) // result entre 0 e 3

        switch(classe){
            case 0:
                return 'ladoA'
            case 1:
                return 'ladoB'    
        }



}