import React, {Component} from 'react';
import "./CountPeople.css";

class CountPeople extends Component{
    state={
            entrycount:0,
            exitcount:0,
            c:0
        };
    updateEntry=()=>{
        this.setState({
            entrycount:this.state.entrycount+1,
            c:this.state.c++
        });
    }
    updateExit=()=>{
        this.setState({
            exitcount:this.state.exitcount-1,
            c:this.state.c--
        });
    }
    render(){
        return(
            <div classname="people">
                <div className="div2">
                    <button id="id1" onClick={this.updateEntry}>Login</button><span id="logincount">{this.state.entrycount} People Entered!!!</span>
                </div>
                <div className="div2">
                <button id="id2" onClick={this.updateExit}>Exit</button><span id="exitcount">{this.state.exitcount} People Left!!!</span>
                </div>
            </div>
        )
    }
}
export default CountPeople;