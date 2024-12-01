import './Display.css'
import * as data from './Calculator'
function Display()
{
    let prans = data.prans;
    let ans = data.ans;
    let s = data.s;
    return(
        <>
            <h1 style={{marginTop: "50px"}}></h1>
            <h3 className="PrevOutput">ans = {prans}</h3>
            <div className="mainExpression" style={{display:'flex',justifyContent:'flex-end'}}>
                <input type="text" className="specialInput" placeholder='|' name="" id="" style={{border: 2,zIndex: 1,opacity: 0.25,minHeight: 90,minWidth:330,maxWidth:400}} />
                <h1 className="Expression" style={{paddingRight: 13}}>{s}</h1>
            </div>
            <h3 className="Output">new ans = {ans}</h3>
        </>
    )
}
export default Display