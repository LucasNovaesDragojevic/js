'use strict'
function verificar()
{
    var anoSistema = new Date().getFullYear()
    var anoInformado = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')
    if (anoInformado.value.length == 0 || Number(anoInformado.value) > anoSistema)
    {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else
    {
        var sexoInformado = document.getElementsByName('radsex')
        var idade = Number(anoSistema) - Number(anoInformado.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (sexoInformado[0].checked) 
        {
            genero = 'Homem'
            if (idade >= 0 && idade < 10)
            {
                // Criança
                imagem.setAttribute('src', 'foto-crianca-m.png')
            }
            else if (idade < 21)
            {
                // Jovem
                imagem.setAttribute('src', 'foto-jovem-m.png')
            }
            else if (idade < 50)
            {
                // Adulto
                imagem.setAttribute('src', 'foto-adulto-m.png')
            }
            else
            {
                // Idoso
                imagem.setAttribute('src', 'foto-idoso-m.png')
            }
        } 
        else 
        {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10)
            {
                // Criança
                imagem.setAttribute('src', 'foto-crianca-f.png')
            }
            else if (idade < 21)
            {
                // Jovem
                imagem.setAttribute('src', 'foto-jovem-f.png')
            }
            else if (idade < 50)
            {
                // Adulto
                imagem.setAttribute('src', 'foto-adulto-f.png')
            }
            else
            {
                // Idoso
                imagem.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(imagem)
    }
}