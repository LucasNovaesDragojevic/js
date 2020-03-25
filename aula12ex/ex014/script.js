'use strict'
function carregar()
{
    document.querySelector('div#mensagem').innerHTML = `Agora são ${new Date().getHours()} horas.`
    if (new Date().getHours() >= 0 && new Date().getHours() < 12) 
    {
        document.querySelector('img#imagem').src = 'fotomanha.png'
        document.body.style.background = '#ADD8E6'
    } 
    else if (new Date().getHours() >= 12 && new Date().getHours() < 18) 
    {
        document.querySelector('img#imagem').src = 'fototarde.png'
        document.body.style.background = '#FF8C00'    
    }
    else
    {
        document.querySelector('img#imagem').src = 'fotonoite.png'
        document.body.style.background = '#708090'
    }
}