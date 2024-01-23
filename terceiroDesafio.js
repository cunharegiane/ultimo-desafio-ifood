class hero{
    constructor( kind, attack ){
        this.attack = attack
        this.kind = kind
    }
    atacar(){
        console.log(`o extraordinário  ${this.kind} atacou usando ${this.attack}` )
        console.log(`Enquanto isso o glamuroso ${this.kind} atacou friamente com um único golpe com ${this.attack}`)
    }
}
let wizard = new hero( 'mago', 'magia')
let warrior = new hero('guerreiro', 'espada')
wizard.atacar()
warrior.atacar()