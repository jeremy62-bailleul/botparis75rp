const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('OK ! Ce bot est développer par Jérémy');
});


client.on('message', (message) => {
    if(message.content === `${prefix}ip`) {
        message.channel.send('@here voici pour vous connecter : connect 85.10.224.186:30676');
    }
    else if (message.content === `${prefix}mdp`) {
        message.channel.send(`@everyone, voici le mot de passe de notre Paris 75 RP : "Paris" ! 
    Bon jeu a tous`);
    }
    else if (message.content === `${prefix}serveurouvert`) {
        message.channel.send(`@Citoyen(ne), Votre serveur est ouvert ! 
    Bon jeu a tous`);
    }
    else if (message.content === `${prefix}patchnote`) {
        message.channel.send(`@here, Un nouveau patch note va bientot etre en ligne d'ici ce soir !`);
    }
    else if (message.content === `${prefix}informationdev`) {
        message.channel.send(`@everyone, je tiens que le serveur sera ferme dans la soiree pour Mise a jour, et regarder aussi toutes les ressources,
        Cordialement,
        Jeremy`);
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`Nom du serveur : ${message.guild.name}\n Nombre d'utilisateurs : ${message.guild.memberCount}`);
    }
    else if (message.content === `${prefix}annonces`) {
        message.channel.send(`Ici @everyone, seront mise toutes les mises  à jour du bot Paris 75 RP Officiel !`);
    }
    else if (message.content === `${prefix}vote`) {
        message.channel.send(`Voici le lien pour voter pour le serveur : https://top-serveurs.net/gta/paris-75000-rp`);
    }
    else if (message.content === `${prefix}tic`) {
        message.channel.send(`Merci d'avoir ouvert un ticket, un staff viendra bientôt`);
    }
    else if (message.content === `${prefix}annonceserveuron`) {
        message.channel.send(`Votre serveur Paris 75 RP est ouvert ! Bon jeu à tous. @here`);
    }
    else if (message.content === `${prefix}annonceserveuroff`) {
        message.channel.send(`Votre serveur Paris 75 RP est fermée ! Bon jeu à tous. @here`);
    }
    else if (message.content === `${prefix}dev`) {
        message.channel.send(`@everyone,le developpeur du serveur est entrain de toucher à la machine, ne pas vous inquietez !`);
    }
    else if (message.content === `${prefix}reboot`) {
        message.channel.send(`@here, une tempête est en cours !, merci de vouloir quitter le serveur !`);
    }
    else if (message.content === `${prefix}staffon`) {
        message.channel.send(`Un staff est disponible pour vous aider, profitez en ! @here`);
    }
    else if (message.content === `${prefix}staffoff`) {
        message.channel.send(`Un staff n'est pas disponible pour le moment ! @here`);
    }
    else if (message.content === `${prefix}pub`) {
        message.channel.send(`Voici le lien pour pouvoir pub : https://discord.gg/49tzj4JSJt`);
    }
    else if (message.content === `${prefix}avatar`) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Votre avatar est : ${message.author.displayAvatarURL({ format: 'png' })}`);
        }
        const avatarList = message.mentions.users.map(user => {
            return `L'avatar de ${user.username} est : ${user.displayAvatarURL({ format: 'png' })}`;
        });
    }
});

client.login(token);

 