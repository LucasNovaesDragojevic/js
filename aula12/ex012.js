'use strict'
console.log(`Agora são exatamente ${new Date().getHours()} horas.`)
if (new Date().getHours() < 12)
{
    console.log('Bom dia.')
}
else if (new Date().getHours() <= 17)
{
    console.log('Boa tarde.')
}
else
{
    console.log('Boa noite.')
}