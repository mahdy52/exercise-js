//*********ex1****** */
function permut(a,b){ 
    let ch;
    ch=a;
    a=b;
    b=ch;
    return "valeur de a " + a + " valeur de b " + b
}

console.log(permut(2,3))
//********ex2****** */
function appl(){
    let Nom="toto"
    let age="30"
    let homme= true 

    return 'your name is ' +Nom+' your age is ' +age+ ' years ' +homme

}
console.log(appl());
//*********ex3*** */
function fois(a){
    let p=a*a;
    return p
}
console.log(fois(5))
//********ex4**** */
function somm(a,b){
let so =a+b
    return so
}
console.log(somm(5,25))
//**********ex5***** */
function time(h){
let so =h*60;
    return so
}
console.log (time(10))
