import './Display.css'
import calculate from './calculate';
import './Calculator.css'
let s = "";
let ans = 0;
let prans = 0;



function append(c)
{
    if(c == 'c'){
        document.getElementById("PrevOutput").value = "";
        prans = ans;
        document.getElementById("Expression").value = 0;
        s = "";
        document.getElementById("Output").value = "";
        ans = 0;
    }
    else if(c == 'm'){
        prans = ans;
        document.getElementById("PrevOutput").value = ans;
        if(ans < 0){
            ans *= -1;
        }
        s = "";
        document.getElementById("Expression").value = ans;
        document.getElementById("Output").value = "";
    }
    else if(c == '='){
        document.getElementById("PrevOutput").value = s;
        document.getElementById("Expression").value = ans;
        document.getElementById("Output").value = "";
        s = "";

    }
    else {
        s+= c;
        document.getElementById("PrevOutput").value = ans;
        document.getElementById("Expression").value = s;
        document.getElementById("Output").value = calculate(s);
        prans = ans;
        ans = document.getElementById("Output");
    }
}

function Display()
{

    return(
        <>
            <h1 style={{marginTop: "50px"}}></h1>
            <h3 className="PrevOutput">ans = {prans}</h3>
            <div className="mainExpression" style={{display:'flex',justifyContent:'flex-end'}}>
                <input type="text" className="specialInput" placeholder='|' name="" onInput="append('document.getElementById('specialInput').value[0]')" id="" onInputCapture="append('document.getElementById('specialInput').value[0]')" style={{border: 2,zIndex: 1,opacity: 1,minHeight: 90,minWidth:330,maxWidth:400}} />
                <h1 className="Expression" style={{paddingRight: 13}}>{s}</h1>
            </div>
            <h3 className="Output">{ans}</h3>
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
export default Display