import React, {Component} from 'react';
import './Stylesheets/myStyle.css';
var percentToDecimal=(decimal)=>{
    return (decimal.toFixed(2)+'%');
};
const calcScore=(total,goal)=>{
    return percentToDecimal(total/goal);
};
class CalculateScore extends Component
{
   
    render()
    {
        return(
            <div>
                <h1 className="StudentDetails">Student Details</h1>
                <div className="Name">
                    <b><span>Name:</span></b>
                    <span>{this.props.Name}</span>
                </div>
                <div className="School">
                    <b><span>School:</span></b>
                    <span>{this.props.School}</span>
                </div>
                <div className="Total">
                    <b><span>Total:</span></b>
                    <span>{this.props.total}</span>
                    <span>Marks</span>
                </div>
                <div className="Score">
                    <b><span>Score:</span>
</b>
                    <span>
                        {calcScore(
                            this.props.total,
                            this.props.goal
                        )}
                    </span>
                </div>
            </div>
        )
    }
}
export default CalculateScore