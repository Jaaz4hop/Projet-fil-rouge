const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-api-key': 'mAA8fg86dGMwAMZOU1T5f6PAKI8WfIEpvo2iqewC'
  }
};

async function chargerDonnees() {
    try {
        const reponse = await fetch('https://api.sportradar.com/rugby-union/trial/v3/en/competitions/sr%3Acompetition%3A302/info.json', options)
        const donnees = await reponse.json();
        console.log(donnees);
    }
    catch (erreur){
        console.log(`Une erreur est survenue : + ${erreur}`);
    }
}

