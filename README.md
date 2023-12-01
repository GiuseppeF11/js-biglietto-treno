# html-css-js-template

js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

STEP

1) Chiedere all'utente il numero di km da percorrere
2) Chiedere all'utente l'età
3) Fissare il prezzo del biglietto a 0.21€ al km
4) 
    SE età <= 18 allora applica il 20% di sconto
    INVECE SE età > 65 allora applica il 40% di sconto
    ALTRIMENTI tariffa piena

5) Mostra il prezzo
