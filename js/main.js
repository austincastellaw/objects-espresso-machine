//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class MakeEspresso {
    constructor(espressoType, espressoShots, espressoMilk, espressoTemp) {
        this.type = espressoType
        this.shots = espressoShots
        this.milk = espressoMilk
        this.temp = espressoTemp
    }
    start() {
        alert('starting up')
    }
    grinding() {
        alert('grinding the beans')
    }
    pouring() {
        alert('swishhh coffee ready')
    }
}

let strongCofee = new MakeEspresso('latte', 3, 'almond', 'hot')