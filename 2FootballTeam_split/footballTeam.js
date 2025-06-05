class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        footballPlayers.forEach(player => {
        let [name, age, playerValue] = player.split('/');
        age = Number(age);
        playerValue = Number(playerValue);

        let foundPlayer = this.invitedPlayers.find(p => p.name === name);
        if(foundPlayer) {
            foundPlayer.playerValue = playerValue;
        } else {
            this.invitedPlayers.push({name, age, playerValue});
        }  
    });
     let result = [];
        this.invitedPlayers.forEach(p => result.push(`${p.name}`));
        let joined = result.join(', ');
        return `You successfully invite ${joined}.`; 
}

     signContract(selectedPlayer) {
            let [name, playerOffer] = selectedPlayer.split('/');
            playerOffer = Number(playerOffer);

            let foundPlayer = this.invitedPlayers.find(p => p.name === name);
            if(!foundPlayer) {
                throw new Error(`${name} is not invited to the selection list!`);
            } else if(foundPlayer) {
                if(playerOffer < foundPlayer.playerValue) {
                let priceDifference = Math.abs(foundPlayer.playerValue - playerOffer);
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
                } else {
                    foundPlayer.playerValue = "Bought";
                }
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
            }
            
        };
    ageLimit(name, age) {
        let foundPlayer = this.invitedPlayers.find(p => p.name === name);
        if(!foundPlayer) {
           throw new Error(`${name} is not invited to the selection list!`)
        }
        if(foundPlayer.age < age) {
            let ageDifference = Math.abs(foundPlayer.age - age);
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else if (ageDifference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }
        if(foundPlayer.age >= age) {
          return `${name} is above age limit!`
        }
    }
    transferWindowResult() {
        let players = [];
        players.push("Players list:");
        let sorted = this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));
        sorted.forEach(p => players.push(`Player ${p.name}-${p.playerValue}`));
        return players.join('\n');
    }

}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
    
     

