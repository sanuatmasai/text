
function createObj (a, b, c) {
    this.name = a;
    this.skill = b;
    this.location = c;
}

function changeSkill(n) {
    this.skill = n;
}
let Amarinfo = new createObj("Amar", "singer", "goa");
let Akbarinfo = new createObj("Akbar", "chef", "mumbai");
let Anthonyinfo = new createObj("Anthony", "magician", "kashmir");

let am = Amarinfo.skill, ak = Akbarinfo.skill, an = Anthonyinfo.skill;
changeSkill.call(Amarinfo, ak);
console.log(Amarinfo);

changeSkill.call(Akbarinfo, am);
console.log(Akbarinfo);

changeSkill.call(Anthonyinfo, ak);
console.log(Anthonyinfo);




