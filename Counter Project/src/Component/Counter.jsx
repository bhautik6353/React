import React,{ useEffect , useState} from 'react'


export default function Counter() {
const [count , setCount] = useState(0)   
    return (
    <div className='s1'>
      <center>
      <section class="cd-intro">
		<h1 class="cd-headline clip is-full-width">
			<span>Counter</span> 
			<span class="cd-words-wrapper">
				<b style={{color:"red"}} class="is-visible">&nbsp;App</b>
                <b style={{color:"red"}} class="is-visible">&nbsp;Project</b>
				
			</span>
		</h1>
	</section>
      </center>
        
        <div className="counter">
            <div className="main1">
<div className="s2">
    <h1><span style={{color:"red"}}>C</span>ounter</h1>
</div>
<div className="s3">
    <div className="s4">
        <h1>{count}</h1>
    </div>
</div>
            </div>
            <div className="incress">
                <span className='span1'>- &nbsp;<span style={{color:"red"}}>I</span>ncrease Number</span>
                <button className="btn" onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div className="incress">
                <span className='span1'>- &nbsp;<span style={{color:"red"}}>D</span>ecrease Number</span>
                <button className="btn1" onClick={() => setCount(count - 1)}>-</button>
            </div>
            <div className="incress">
                <span className='span3'>- &nbsp;<span style={{color:"red"}}>R</span>eset Counter</span>
                <button className="btn3" onClick={() => setCount(0)}>

                <i className="icon fa-solid fa-repeat" style={{color:"#0f0f0f"}}/>
                </button>
            </div>
        </div>

    </div>
    
  )
}
