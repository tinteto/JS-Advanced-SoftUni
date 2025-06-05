class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        candidates.map(person => {
            let [name, education, yearsExperience] = person.split('-');
            yearsExperience = Number(yearsExperience);
            let existingPerson = this.jobCandidates.find(person => person.name === name);

            if(existingPerson) {
                if(yearsExperience > existingPerson.yearsExperience) {
                    existingPerson.yearsExperience = yearsExperience;
                }
            } else {
            this.jobCandidates.push({name, education, yearsExperience}); // [{}, {}, {}]
            }
         });

         let result = [];
         this.jobCandidates.map(person => {
            result.push(person.name);
         });
         return `You successfully added candidates: ${result.join(', ')}.`;  
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);
        
        let existingPerson = this.jobCandidates.find(person => person.name === name);
       
        if(!existingPerson) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if(minimalExperience > existingPerson.yearsExperience) {
            throw new Error (`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years."`)
        } else {
            existingPerson.yearsExperience = 'hired';
        }
        return `Welcome aboard, our newest employee is ${name}.`
    }

    salaryBonus(name) {
        let existingPerson = this.jobCandidates.find(person => person.name === name);

        if(!existingPerson) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if(existingPerson) {
        if(existingPerson.education == 'Bachelor') {
           return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if (existingPerson.education == 'Master') {
           return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
           return`${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }
    }

    candidatesDatabase() {
        let result = [];
        if(this.jobCandidates.length == 0) {
            throw new Error("Candidate Database is empty!")
        }
        result.push("Candidates list:");
        this.jobCandidates.sort((a,b) => (a.name).localeCompare(b.name)).map(person => result.push(`${person.name}-${person.yearsExperience}`));
        return result.join('\n');
    }
    
}
let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());



