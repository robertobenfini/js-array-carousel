PROBLEMA:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

1-creare una struttura html e css per fare il markup statico;
2-creare un'array che contenga le 5 immagini;
3-rimuovere il markup statico;
4-creare un ciclo for;
5-creare all'interno del ciclo il div con l'immagine dentro e inserirlo nell'html;
6-creare una classe e dichiararla nello script da assegnare alle immagini;
7-creare una classe e dichiararla nello script da assegnare solo all'immagine da visualizzare;
8-prendiamo i bottoni e aggiungiamo la funzione click;