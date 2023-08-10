function valid(){

    let nom=document.querySelector('#sm');

    let email=document.querySelector('#rm');

    let prenom=document.querySelector('#ir');

    let patternnom=/[a-zA-Z]{3,15}/;
    let patternprenom=/[a-zA-Z]{3,15}/;
    let patternemail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!patternnom.test(nom.value)) {
        alert("Nom incorrect!");
    }

    if (!patternprenom.test(prenom.value)) {
        alert("Prénom invalide!");
    }

    if (!patternemail.test(email.value)) {
        alert("Email invalide!");
    } else {
        alert("Confirmation avec succès!");
    }

}