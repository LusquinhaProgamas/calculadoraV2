var butao = window.document.getElementById('calcular')
butao.addEventListener('click' , clicar)

function clicar () {
    var txtn1 = window.document.getElementById('txtn1')
    var txtn2 = window.document.getElementById('txtn2')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var res = window.document.getElementById('res')
    var radfn = window.document.getElementsByName('radn')
    var img = window.document.getElementById('imagem')
    
    
    
    if (txtn1.value.length == 0 || txtn2.value.length == 0) {
        alert('[ERRO] Faltam números')
    } else if ( radfn[3].checked && n2 == 0) {
        alert('Não dá pra dividir por 0 , bixo vei burro ')
        img.src = 'burras.png' 
        res.innerHTML = 'pqp'
    } else if (radfn[0].checked) {
        res.innerHTML = `${n1} + ${n2} = ${n1 + n2}`
        img.src = 'soumas.png'
    } else if (radfn[1].checked) {
        res.innerHTML = `${n1} - ${n2} = ${n1 - n2}`
        img.src = 'subtras.png' // subtras
    } else if (radfn[2].checked) {
        res.innerHTML = `${n1} x ${n2} = ${n1 * n2}`
        img.src = 'mult.png' // multiplicas
    } else if (radfn[3].checked) {
        res.innerHTML = `${n1} : ${n2} = ${n1 / n2}`
        img.src = 'dividas.png' // dividas 
    }    
    
    
    
        
       
    
}
  