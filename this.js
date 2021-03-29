
//this alone

this.name = "miguel";
console.log(this.name);



// this in a function

function myfuncion (){
    this.nom = "migue";
    console.log(nom);
    console.log(this.nom );
}
myfuncion()


//this in a objet method
let user = {
    firstname: "Miguel",
    lastname: "Angel",
    age: 26,
    intro: function(){
        return `${this.firstname} ${this.lastname} has = ${this.age}`
    }
};

console.log(user.intro());
