'use strict'

function contar()
{
    let inicio = document.querySelector('input#txtinicio')
    let fim = document.querySelector('input#txtfim')
    let passo = document.querySelector('input#txtpasso')
    let resultado = document.querySelector('div#resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        resultado.innerHTML = 'Impossível contar.'
    }
    else
    {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (passo < 0)
        {
            alert('Passo inválido. Considerando 1.')
            passo = 1
        }
        if (inicio < fim)
        {
            // Contagem crescente
            for (let contagem = i; contagem <= f; contagem += p)
            {
                resultado.innerHTML += ` ${contagem} \u{1F449}`
            }
        }
        else
        {
            // Contagem decrescente
            for (let contagem = i; contagem >= f; contagem -= p)
            {
                resultado.innerHTML += `${contagem} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}