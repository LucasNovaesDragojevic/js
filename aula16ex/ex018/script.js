'use strict'

let numero = document.querySelector('input#txtnumero')
let lista = document.querySelector('select#lista')
let resultado = document.querySelector('div#resultado')
let valores = []

function isNumero (numero)
{
    if (Number(numero) >= 1 && Number(numero) <= 100)
    {
        return true
    }
    else
    {
        return false
    }
}

function inLista(numero, lista)
{
    if (lista.indexOf(Number(numero)) != -1)
    {
        return true
    }
    else
    {
        return false
    }
}

function adicionar()
{
    if (isNumero(numero.value) && !inLista(numero.value, valores))
    {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    }
    else
    {
        alert('Valor inválido ou já adicionado na lista')
    }
    numero.value = ''
    numero.focus()
}

function finalizar()
{
    if (valores.length == 0)
    {
        alert('Adicione valores antes de finalizar.')
    }
    else
    {
        valores.sort()
        let total = valores.length
        let maior = valores[valores.length - 1]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let posicao in valores) {
            soma += valores[posicao]
        }
        media = soma / total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
