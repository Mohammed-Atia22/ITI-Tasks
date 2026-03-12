class Game {
  plan() {
    throw new Error("plan Not detected");
  }
}

class Attack extends Game {
    constructor() {
        super()
    }
    plan() {
        console.log(
        `you are playing on Attack mode`
        );
    }
}
class Defense extends Game {
    constructor() {
        super()
    }
    plan() {
        console.log(
        `you are playing on Defense mode`
        );
    }
}
class Medium extends Game {
    constructor() {
        super()
    }
    plan() {
        console.log(
        `you are playing on Medium mode`
        );
    }
}


class PlayStrategy {
    constructor(playMethod) {
        this.playMethod = playMethod;
    }

    changePlayWay(newPlayMethod){
        this.playMethod=newPlayMethod
    }

    processPlay() {
        return this.playMethod.plan();
    }
}

let play1=new PlayStrategy(new Attack())
play1.changePlayWay(new Defense())
play1.processPlay()

