
//const JohnMass = '92';
// const JohnHeight = '1.95';
// const MarkMass = '78';
// const MarkHeight = '1.69';

/*
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

//Challenge#3
//Data1
const DophinScoreAverage = (96 + 108 + 89)/3;
const KoalasScoreAverage = (88 + 91 + 110)/3;
console.log(DophinScoreAverage);
console.log(KoalasScoreAverage);
if(DophinScoreAverage > KoalasScoreAverage ){
    console.log('congratuation~!! , Dophins win!!')
} else if (DophinScoreAverage === KoalasScoreAverage){
    console.log('Amazing ! neck and neck!!')
}
else{
    console.log('congratuation~!! , Koalas wins!!')
}

const DSA1 = 97;
const DSA2 = 112;
const DSA3 = 101;

const KSA1 = 109;
const KSA2 = 95;
const KSA3 = 106;

const DSAverage = (DSA1 + DSA2 + DSA3)/3;
const KSAverage = (KSA1 + KSA2 + KSA3)/3;
console.log(DSAverage ,  KSAverage)

if(DSAverage > KSAverage && DSAverage >= 100 ){
    console.log('Dophins win!!');
}else if (DSAverage < KSAverage && KSAverage >= 100 ){
    console.log('Koala win!!');
}else if(DSAverage === KSAverage && (KSAverage && DSAverage) >=100){
    console.log('both win!! ^^');
} else {
    console.log('No one win ㅜㅜ ^^');
} 
// !!! finish #3 I won!

// tip : 15% bill value 50~300 , else tip : 20% 
const bill =  40;
//const tip1 = bill * (15/100);
//const tip2 = bill * (20/100);
const tip = bill <= 300 && bill >=50 ? bill * (15/100):bill * (20/100); // it is better setence!
bill >= 50  && bill <= 300  ? console.log('the bill was' + bill +'the tip was ' + tip1 + 'and total value' + (bill + tip1)) : console.log('the bill was' + bill +'the tip was ' + tip2 + 'and total value' + (bill + tip2));


//challenge 1 (function)
const calcAverage = (a,b ,c) => (a + b + c)/3;
const DSA = calcAverage(85,54,41);
const KSA = calcAverage(23,34,27);
function checkWinner(DSA, KSA){
    if (DSA >= KSA*2){
        console.log('Dophins win!'+ '(' +DSA +'vs'+KSA +')');
    }else if (DSA*2 <= KSA){
        console.log('Koalas win!'+'(' +DSA +'vs'+KSA +')')
    }else{
        console.log('no one win');
    }
} 
checkWinner(DSA ,KSA);
//clear!!!!!!!

//challenge 2 Array

const calcTip = function(bill){
   if(bill <= 300 && bill >=50 ){
    return Tip = bill * (15/100);
}else{
    return Tip = bill * (20/100)
}
}
const bill = 100;
console.log(calcTip(bill));

const bills =[125,555,44];
const tips =[calcTip(bills[0]) ,calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
console.log(total);
*/

//Challenge #3 
const MBmiFactors = {
    name : 'Marks',
    mass : 78,
    height: 1.69 ,
    
    calcBMI : function() {
       return  this.mass / this.height ** 2 , 
        this.mass / (this.height * this.height)
    }
    
}
const JBmiFactors ={
    name : 'John',
    mass : 92 ,
    height :1.95,

    calcBMI : function() {
        return  this.mass / this.height ** 2 , 
        this.mass / (this.height * this.height)
     }
     
}

console.log(MBmiFactors.calcBMI() , JBmiFactors.calcBMI());
    if(MBmiFactors.calcBMI() > JBmiFactors.calcBMI() ){
        console.log('Marks BMI is higher than Marks')
    }else if (MBmiFactors.calcBMI() < JBmiFactors.calcBMI()){
        console.log('Johns is higher than Marks')
    }else{
        console.log('J&M bmi is same !')
    }

