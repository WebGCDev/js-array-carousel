# CAROUSEL

```

Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
MILESTONE 2
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
BONUS 3:
Al click sulla thumbnail, viene visualizzata l'immagine selezionata;

```

---

1. Su JS svuoto elementi nel DOM , poi li genero automaticamente con JS
2. Creo array con le immagini 01-02-03-04-05
3. Creando un loop con elementi da aggiungere, nascondo tutti(hide) escludendo solamente la prima immagine
4. Per far si che l'indice array avanzi creo appositamente un contatore
5. Genero **listnerEvent** per i bottoni prev e next cosi' da poter switchare da un'immagine all'altra
6. Quando cliccherò cambio l'immagine mostrata eseguendo un hide,mentre quella dell'indice successivo la vedrò con un remove hide.
