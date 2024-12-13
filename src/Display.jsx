import './Display.css'

let s = "";
let ans = 0;
let pans = 0;

function ifError(s){return 1;}
function isCalculate(s){return 1;}
var calculate = function (s) {
    let number = 0;
    let signValue = 1;
    let result = 0;
    let operationsStack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if (!isNaN(parseInt(c))) {
            number = number * 10 + parseInt(c);
        } else if (c === '+' || c === '-') {
            result += number * signValue;
            signValue = (c === '-') ? -1 : 1;
            number = 0;
        } else if (c === '(') {
            operationsStack.push(result);
            operationsStack.push(signValue);
            result = 0;
            signValue = 1;
        } else if (c === ')') {
            result += signValue * number;
            result *= operationsStack.pop();
            result += operationsStack.pop();
            number = 0;
        }
    }

    return result + number * signValue;
}

function append(x){
    console.log(x);
    if(x === 'C'){
        document.getElementById('prev').textContent = ans;
        document.getElementById('exp').textContent = "";
        document.getElementById('ans').textContent = 0;
        s = "";
        pans = ans;
        ans = 0;
    }
    else if(x === 'M'){
        if(ans < 0){
            ans *= -1;
            document.getElementById('ans').textContent = ans;
        }
    }
    else if(x === '='){
        document.getElementById('prev').textContent = pans;
        document.getElementById('exp').textContent = ans;
        document.getElementById('ans').textContent = "";
    }
    else if(x === 'b'){
        let s2 = "";
        let i = 1;
        if(s.length > 1){
            while(s[i] != '\0'){
                s2+= s[i-1];
                i++;
            }
        }
        s = s2;
        document.getElementById('prev').textContent = pans;
        document.getElementById('exp').textContent = s;
        ans = calculate(s);
        document.getElementById('ans').textContent = ans;
    }
    else 
    {
        s+= x;
        document.getElementById('exp').textContent = s;
        if(isCalculate(s)){
            ans = calculate(s);
            document.getElementById('ans').textContent = ans;
        }
        else if(ifError(s)){
            document.getElementById('prev').textContent = "";
            document.getElementById('exp').textContent = "SYNTeX ERROR";
            document.getElementById('ans').textContent = "";
        }
    }

}


function Display(){
    return (
        <>
            <div id='n'>
                <h1 id="prev" className="main"></h1>
                <h1 id="exp" className="main"></h1>
                <h1 id="ans" className="main"></h1>
            </div>
            <div id="row0" style={{display:"flex"}}>
                <div id="btn" onClick={() => append('')}>M+</div>
                <div id="btn" onClick={() => append('')}>M-</div>
                <div id="btn" onClick={() => append('')}>MR(recall)</div>
                <div id="btn" onClick={() => append('')}>MC</div>
            </div>





            <div id="row1" style={{display:"flex"}}>
                <div id="btn" onClick={() => append('C')}>C</div>
                <div id="btn" onClick={() => append('M')}>Mod</div>
                <div id="btn" onClick={() => append('%')}>%</div>
                <div id="btn" onClick={() => append('+')}>+</div>
            </div>
            <div id="row2" style={{display:"flex"}}>
                <div id="btn" onClick={() => append('9')}>9</div>
                <div id="btn" onClick={() => append('8')}>8</div>
                <div id="btn" onClick={() => append('7')}>7</div>
                <div id="btn" onClick={() => append('-')}>-</div>
            </div>
            <div id="row3" style={{display:"flex"}}>
                <div id="btn" onClick={() => append('6')}>6</div>
                <div id="btn" onClick={() => append('5')}>5</div>
                <div id="btn" onClick={() => append('4')}>4</div>
                <div id="btn" onClick={() => append('*')}>*</div>
            </div>
            <div id="row4" style={{display:"flex"}}>
                <div id="btn" onClick={() => append('3')}>3</div>
                <div id="btn" onClick={() => append('2')}>2</div>
                <div id="btn" onClick={() => append('1')}>1</div>
                <div id="btn" onClick={() => append('/')}>/</div>
            </div>
            <div id="row5" style={{display:"flex"}}>
                <div id="btn" onClick={() => append('(')}>(</div>
                <div id="btn" onClick={() => append('0')}>0</div>
                <div id="btn" onClick={() => append(')')}>)</div>
                <div id="btn" onClick={() => append('=')}>=</div>
            </div>
        </>
    )
}
export default Display