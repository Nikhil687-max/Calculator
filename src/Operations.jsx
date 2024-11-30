export function Add(a, b){
    return a+b;
}
export function Sub(a, b){
    return a-b;
}
export function Mul(a, b){
    return a*b;
}
export function Div(a, b){
    if(b === 0){return 'Syntax Error';}
    return a/b;
}
export function PerCent(a, b){
    return a*b/100;
}