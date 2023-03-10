const prompt = require('prompt-sync')()
const css=[]
let resp = 'css'
while (resp!='SAIR'){
    resp = prompt('Digite uma Propiedade css: ').toUpperCase()
    if(resp!='SAIR'){
          css.sort()
          css.push(resp)
    }
}
console.log(`Propiedade css: ${css}`)