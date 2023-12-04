// Test funzionamento

// 1) Chiedere all'utente l'età

const age = prompt('Inserisci la tua età');
const ageInNumber = parseInt(age)

console.log('età ' + age +' '+ typeof age);
console.log('Numero age ' + ageInNumber +' '+ typeof ageInNumber);



if (!isNaN(ageInNumber)) {

    // 2) Chiedere all'utente i km da percorrere
    const km = prompt('Inserisci i km da che vuoi percorrere');
    const kmInNumber = parseInt(km)

    console.log('km ' + km +' '+ typeof km);
    console.log('Numero km ' + kmInNumber +' '+ typeof kmInNumber);

    if (!isNaN(km)) {

        // 3) Fissare il prezzo del biglietto a 0.21€ al km
        const priceBasic = (kmInNumber * 0.21);
        console.log('Tariffa base: ' + priceBasic + '€' + typeof priceBasic);

        if (ageInNumber < 18 ) {
            const priceSald20 = ( priceBasic - ((priceBasic * 20) / 100)).toFixed(2);
            console.log('Prezzo scontato al 20%: ' + priceSald20 + '€'+ ' ' + typeof priceSald20 );

            document.getElementById('priceSald20').innerHTML = ('Prezzo col 20%: ' + priceSald20 + '€') ;
        }

        else if (ageInNumber > 65) {
            const priceSald40 = ( priceBasic - ((priceBasic * 40) / 100)).toFixed(2);
            console.log('Prezzo scontato al 40%: ' + priceSald40 + '€' + ' ' + typeof priceSald40 );

            document.getElementById('priceSald40').innerHTML = ('Prezzo col 40%: ' + priceSald40 + '€') ; 
        }
        
        else { 
            document.getElementById('priceBasic').innerHTML = ('Prezzo base: ' + priceBasic + '€') ;
        }
    }

    else {
        const errLetter = prompt('Non sono ammesse lettere');
    }

}

else {
    const errLetter = prompt('Non sono ammesse lettere');
}








