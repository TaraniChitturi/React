import React,{Component} from 'react';
import './App.css';
import OfficeSpace from './OfficeSpace/OfficeSpace';
class App extends Component{
    state={
        item:[
            {Name:"DBS",Rent:50000,Address:"Chennai",
                image:"https://images.unsplash.com/photo-1594732832278-abd644401426?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlJTIwc3BhY2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"},
            {Name:"Wipro",Rent:65000,Address:"Hyderabad",
                image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZSUyMHNwYWNlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"},
            {Name:"TCS",Rent:50000,Address:"Bangalore",
                image:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fG9mZmljZSUyMHNwYWNlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"},
            {Name:"Cognizant",Rent:70000,Address:"Pune",
                image:"https://images.unsplash.com/photo-1495576775051-8af0d10f19b1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG9mZmljZSUyMHNwYWNlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"}
        ]
    }
    render(){
        const element = "Office Space"
        return(
            <div>
                <h1>{element}, at Affordable Range</h1>
                <div className="div1">
                    <OfficeSpace item={this.state.item}/>
                </div>
            </div>
        )
    }
}
export default App;