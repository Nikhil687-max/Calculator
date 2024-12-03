import calculate from './calculate';
import './Calculator.css'
export let s = "";
export let ans = 0;
export let prans = 0;

function Calculator(){
    function append(c)
    {
        if(c == 'c'){
            document.getElementById("PrevOutput").value = "";
            document.getElementById("Expression").value = 0;
            document.getElementById("Output").value = "";
        }
        else if(c == 'm'){
            document.getElementById("PrevOutput").value = ans;
            if(ans < 0){
                ans *= -1;
            }
            document.getElementById("Output").value = ans;
        }
        else if(c == '='){
            document.getElementById("PrevOutput").value = s;
            document.getElementById("Expression").value = ans;
            document.getElementById("Output").value = "";
        }
        else {
            s+= c;
            document.getElementById("PrevOutput").value = ans;
            document.getElementById("Expression").value = s;
            document.getElementById("Output").value = calculate(s);
        }
        

    }
    return (
        <>
            <div className="rows">
                <div className="row0">
                    <button className="btn" onClick="append('c')">
                        c
                    </button>
                    <button className="btn" onClick="append('m')">
                        mod
                    </button>
                    <button className="btn" onClick="append('%')">
                        %
                    </button>
                    <button className="btn" onClick="append('-')">
                        -
                    </button>
                </div>
                <div className="row1">
                    <button className="btn" onClick="append('1')">
                        1
                    </button>
                    <button className="btn" onClick="append('2')">
                        2
                    </button>
                    <button className="btn" onClick="append('3')">
                        3
                    </button>
                    <button className="btn" onClick="append('+')">
                        +
                    </button>
                </div>
                <div className="row2">
                    <button className="btn" onClick="append('4')">
                        4
                    </button>
                    <button className="btn" onClick="append('5')">
                        5
                    </button>
                    <button className="btn" onClick="append('6')">
                        6
                    </button>
                    <button className="btn" onClick="append('*')">
                        *
                    </button>
                </div>
                <div className="row3">
                    <button className="btn" onClick="append('7')">
                        7
                    </button>
                    <button className="btn" onClick="append('8')">
                        8
                    </button>
                    <button className="btn" onClick="append('9')">
                        9
                    </button>
                    <button className="btn" onClick="append('/')">
                        /
                    </button>
                </div>
                <div className="row4">
                    <div className="btn">
                        
                    </div>
                    <button className="btn" onClick="append('0')">
                        0
                    </button>
                    <div className="btn">
                        
                    </div>
                    <button className="btn" onClick="append('=')">
                        =
                    </button>
                </div>
            </div>
        </>
    )
}
export default Calculator