// Objet de configuration game
var game = {
    min: 0,
    max: 10,
    // nombre d'essais
    // On creer/initialise un compteur du nombre d'essai de user
    count: 0,
    scores: [],
    // nombre à chercher
    getRandom: function(minParam, maxParam){
        var randomNumber = Math.round(minParam + Math.random() * (maxParam - minParam));
        return randomNumber;
    },
    getNumber: function(message){
        var userNumber = parseInt(window.prompt(message));
        // Tant que la valeur d'entrée n'est pas un nombre on redemande une saisie
        while(isNaN(userNumber)){
            userNumber = parseInt(window.prompt(message));
        }
        return userNumber;
    },
    play: function(){
        var randomNumber = game.getRandom(game.min, game.max);
        console.log(randomNumber);
        
        
        var userNumber = game.getNumber('Veuillez-saisir un nombre compris entre ' + game.min + ' et ' + game.max);
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

        game.scores.push(game.count);

        alert('C\'est Gagné !');
        alert('Votre nombre de tentatives est de : ' + game.count);

        var retry = confirm('voulez-vous faire une autre partie ?');

        if(retry){
            game.count = 0;
            game.play();
        } else{
            for(var i = 0; i < game['scores'].length; i++){
                var partieEnCours = i + 1;
                console.log('Partie ' + partieEnCours + ' : ' + game.scores[i] + ' essais');
            }
        }

    }
    
};
    


// var retry = window.confirm('Voulez-vous jouer ?');
// while(retry === true){
//     game['scores'].push(game.count);
//     play();
// }

game.play();

// On sort de la boucle cela signifie que user trouve le nombre aleatoire
// autrement dit que la condition dans la boucle while est passée de true à false
// La méthode alert() permet d'afficher un message d'alerte
// alert('C\'est Gagné !');
// alert('Votre nombre de tentatives est de : ' + game.count);