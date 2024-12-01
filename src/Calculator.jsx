import calculate from './calculate';
import './Calculator.css'
export let s = "";
export let ans = 0;
export let prans = 0;
function Calculator(){
    function append(c)
    {

        if(c == 'c'){
            prans = ans;
            ans = 0;
            s = "";

        }
        else if(c == 'm'){
            prans = ans;
            if(ans < 0){
                ans *= -1;
            }
        }
    }
    return (
        <>
            <div className="rows">
                <div className="row0">
                    <div className="btn" onClick={append('c')}>
                        c
                    </div>
                    <div className="btn" onClick={append('m')}>
                        mod
                    </div>
                    <div className="btn" onClick={append('%')}>
                        %
                    </div>
                    <div className="btn" onClick={append('-')}>
                        -
                    </div>
                </div>
                <div className="row1">
                    <div className="btn" onClick={append('1')}>
                        1
                    </div>
                    <div className="btn" onClick={append('2')}>
                        2
                    </div>
                    <div className="btn" onClick={append('3')}>
                        3
                    </div>
                    <div className="btn" onClick={append('+')}>
                        +
                    </div>
                </div>
                <div className="row2">
                    <div className="btn" onClick={append('4')}>
                        4
                    </div>
                    <div className="btn" onClick={append('5')}>
                        5
                    </div>
                    <div className="btn" onClick={append('6')}>
                        6
                    </div>
                    <div className="btn" onClick={append('*')}>
                        *
                    </div>
                </div>
                <div className="row3">
                    <div className="btn" onClick={append('7')}>
                        7
                    </div>
                    <div className="btn" onClick={append('8')}>
                        8
                    </div>
                    <div className="btn" onClick={append('9')}>
                        9
                    </div>
                    <div className="btn" onClick={append('/')}>
                        /
                    </div>
                </div>
                <div className="row4">
                    <div className="btn">
                        
                    </div>
                    <div className="btn" onClick={append('0')}>
                        0
                    </div>
                    <div className="btn">
                        
                    </div>
                    <div className="btn" onClick={append('=')}>
                        =
                    </div>
                </div>
            </div>
        </>
    )
}
Calculator();


export default Calculator