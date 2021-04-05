// Objet de configuration game
var game = {
    max: 100,
    // nombre d'essais
    // On creer/initialise un compteur du nombre d'essai de user
    count: 0,
    // nombre à chercher
    getRandom: function(){
        var randomNumber = Math.round(Math.random() * game.max);
        return randomNumber;
    },
    getNumber: function(message){
        var userNumber = parseInt(window.prompt(message));
        // Tant que la valeur d'entrée n'est pas un nombre on redemande une saisie
        while(isNaN(userNumber)){
            userNumber = parseInt(window.prompt(message));
        }
        return userNumber;
    }
};



//On va créer un programme pour demander à l'utilisateur d'identifier un nombre aléatoire, tant qu'il n'a pas trouvé on lui redemandera. Pour l'aider on lui dira si c'est plus ou si c'est moins.



// // On creer/initialise un compteur du nombre d'essai de user
// var count = 0;

// On créer un nombre aléatoire grace à l'objet Math
// La méthode random() permet de générer ce nombre aléatoire qui par défaut est une decimal (float) compris entre 0 et 1
// La méthode round permet d'obtenir un entier (integer)

//FONCTION getRandom
// var getRandom = function(){
//     var randomNumber = Math.round(Math.random() * max);
//     return randomNumber;
// };


// FONCTION getNumber
// On demande à l'user de saisir un nombre
// La méthode Window.prompt() affiche une boîte de dialogue, éventuellement avec un message, qui invite l'utilisateur à saisir un texte.
// La méthode parseInt() permet de convertir la valeur de prompt en entier (integer)
// var getNumber = function(message){
//     var userNumber = parseInt(window.prompt(message));
//     // Tant que la valeur d'entrée n'est pas un nombre on redemande une saisie
//     while(isNaN(userNumber)){
//         userNumber = parseInt(window.prompt(message));
//     }
//     return userNumber;
// };

var play = function(){
    var randomNumber = game.getRandom();
    console.log(randomNumber);
    
    
    var userNumber = game.getNumber('Veuillez-saisir un nombre compris entre 0 et ' + game.max);
    game.count++;
    // Backdoor
    console.log('saisie utilisateur : ' + userNumber);
    
    
    // Tant que l'utilisateur n'a pas trouvé le nombre aléatoire on lui redemande
    // On ne connait pas a l'avance le nombre d'iteration nécessaire donc j'utilise la boucle WHILE
    while(userNumber !== randomNumber){
        // Pour aider user on lui dira si c'est plus ou si c'est moins
        // Si c'est plus alors prompt(...)
        if(userNumber < randomNumber){
            userNumber = parseInt(window.prompt('C\'est plus : '));
            console.log('saisie utilisateur : ' + userNumber);
        }
        // Si c'est moins alors prompt(...)
        else if(userNumber > randomNumber){
            userNumber = parseInt(window.prompt('C\'est moins : '));
            console.log('saisie utilisateur : ' + userNumber);
        }
        game.count++;
    }
    
    
    // On sort de la boucle cela signifie que user trouve le nombre aleatoire
    // autrement dit que la condition dans la boucle while est passée de true à false
    // La méthode alert() permet d'afficher un message d'alerte
    alert('C\'est Gagné !');
    alert('Votre nombre de tentatives est de : ' + game.count);
};

play();
