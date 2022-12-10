const btn = document.querySelector("#button")

btn.addEventListener("click", function(e){
    
    e.preventDefault()

    const ask = prompt('Digite sua idade')
    console.log(ask)

    const diferenca = -1 * (ask - 18)
    console.log(diferenca)
    
    if (ask >= 18){
        result.innerHTML = 'Você tem idade para dirigir'
        console.log(`Você tem idade para dirigir`)
    } else{
        result.innerHTML = `Espere ${diferenca} anos para poder dirigir`
        console.log(`Espere ${diferenca} anos para poder dirigir`)
    }
  
})

const btnTwo = document.querySelector("#buttonTwo")

btnTwo.addEventListener("click", function(e){

    e.preventDefault()

    const minhaIdade = prompt('Digite minha idade:')
    console.log(minhaIdade)

    const suaIdade = prompt('Digite sua idade: ')
    console.log(suaIdade)

    const diferencaPos = minhaIdade - suaIdade
    

    const diferencaNeg = -1 * (minhaIdade - suaIdade)
    

    if (minhaIdade > suaIdade){
        resultTwo.innerHTML = `Eu sou mais velho que você por ${diferencaPos} anos!!`
        console.log('Eu sou mais velho que você por ' + diferencaPos + ' anos!')
    } else if (minhaIdade < suaIdade) {
        resultTwo.innerHTML = `Eu sou mais novo que você por ${diferencaNeg} anos!!`
        console.log('Eu sou mais novo que você por ' + diferencaNeg + ' anos!')
    } else if (minhaIdade == suaIdade) {
        resultTwo.innerHTML = `Temos a mesma idade`
        console.log('Temos a mesma idade')
    } 
    
})

const btnTree = document.querySelector("#buttonTree")

btnTree.addEventListener("click", function(e){

    e.preventDefault()

    const valueA = prompt('Digite o valor A: ')
    console.log(valueA)

    const valueB = prompt('Digite o valor B: ')
    console.log(valueB)

    if (valueA > valueB){
        resultTree.innerHTML = `${valueA} é maior que ${valueB}`
        console.log('Valor A é maior que valor B')
    } else if(valueA < valueB){
        resultTree.innerHTML = `${valueA} é menor que ${valueB}`
        console.log('Valor A é menor que valor B')
    }
    
})


const btnFour = document.querySelector("#buttonFour")

btnFour.addEventListener("click", function(e){

    e.preventDefault()

    const value = document.querySelector("#numero")
    const imparOrPar = value.value % 2
    console.log(value.value)
    console.log(imparOrPar)
    if(imparOrPar == 0){
        resultFour.innerHTML = `O número ${value.value} é par`
        console.log('O número ' + value.value + ' é par')
     
    } else{
        resultFour.innerHTML = `O número ${value.value} é ímpar`
        console.log('O número ' + value.value + ' é impar')
        
    }
    
})
