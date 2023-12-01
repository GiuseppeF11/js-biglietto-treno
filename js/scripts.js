// Test funzionamento

console.log('Template html css js');

/* const errNumber = prompt('Non sono ammesse cifre') */

const eta = prompt('Inserisci la tua età');
console.log('età ' + eta +' '+ typeof eta);

if (!isNaN(eta)) {
    const nKm = prompt('Inserisci i km da che vuoi percorrere');
    console.log('Numero Km ' + nKm +' '+ typeof nKm);

    if (!isNaN(nKm)) {
        const priceBasic = (nKm * 0.21);
        console.log('Tariffa base: ' + priceBasic + '€')

        const priceSald20 = ( priceBasic - ((priceBasic * 20) / 100)).toFixed(2)
        console.log('Prezzo scontato al 20: ' + priceSald20 + '€' )

        const priceSald40 = ( priceBasic - ((priceBasic * 40) / 100)).toFixed(2)
        console.log('Prezzo scontato al 40: ' + priceSald40 + '€' )

        if (eta < 18 ) {
            document.getElementById('priceSald20').innerHTML = 'Prezzo col 20%: ' + priceSald20 + '€'
        }

        else if (eta > 65) {
            document.getElementById('priceSald40').innerHTML = 'Prezzo col 40%: ' + priceSald40 + '€'
        }
        
        else { 
            document.getElementById('priceBasic').innerHTML = 'Prezzo base: ' + priceBasic + '€'
        }
    }

    else {
        const errLetter = prompt('Non sono ammesse lettere');
    }

}

else {
    const errLetter = prompt('Non sono ammesse lettere');
}








