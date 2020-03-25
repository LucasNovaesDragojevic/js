'use strict'

function tabuada()
{
    if (document.querySelector('input#txtnumero').value.length == 0)
    {
        alert('Por favor digite um número.')
    }
    else
    {
        let numero = Number(document.querySelector('input#txtnumero').value)
        let tabuada = document.querySelector('select#seltab')
        tabuada.innerHTML = ''
        for (let contador = 0; contador < 10; contador++)
        {
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero * contador}`
            item.value = `tab${contador}`
            tabuada.appendChild(item)
        }
    }
}