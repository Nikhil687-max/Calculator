import './Display.css'


function Display()
{
    let prans = 0;
    let op = '+';
    let ans = prans+7+5;
    return(
        <>
            <h1 style={{marginTop: "50px"}}></h1>
            <h3 className="PrevOutput">ans = {prans}</h3>
            <div className="mainExpression" style={{display:'flex',justifyContent:'flex-end'}}>
                <h1 className="Expression" style={{paddingRight: 13}}>ans{op}5+7</h1>
                <input className="specialInput" type="text" placeholder='|' name="" id="" style={{border: 2,minHeight: 90,minWidth:330,maxWidth:400}} />
            </div>
            <h3 className="Output">new ans = {ans}</h3>
        </>
    )
}
export default Display