
//const JohnMass = '92';
// const JohnHeight = '1.95';
// const MarkMass = '78';
// const MarkHeight = '1.69';

const JohnMass = '85';
const JohnHeight = '1.76';

const MarkMass = '95';
const MarkHeight = '1.88';

let JohnBMI = JohnMass/ JohnHeight ** 2 
let JohnBMI2 = JohnMass / (JohnHeight * JohnHeight)
const JBMI = JohnBMI = JohnBMI2;


let MarkBMI =  MarkMass/ MarkHeight ** 2 
let MarkBMI2 = MarkMass / (MarkHeight * MarkHeight)
const MBMI = MarkBMI = MarkBMI2;


const markHigherBMI =  MBMI > JBMI;
console.log(MBMI, JBMI , markHigherBMI);


if (MBMI > JBMI){
    console.log("Mark's " + MBMI + "is higher than John's!" + JBMI);
}else{
    console.log( "Johns" +JBMI+ " is higher than Mark's!"+ MBMI);
}
