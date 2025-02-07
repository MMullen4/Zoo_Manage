class Animal {
    constructor(species, hungry, amount, weight) {
        this.species = species;
        this.hungry = hungry;
        this.amount = amount;
        this.weight = weight;
    }
    makeRollCall() {
        console.log(`There are ${this.amount} ${this.species} in the zoo, and are ${this.hungry ? 'hungry' : 'full'}!`);
    }
}
export default Animal;
