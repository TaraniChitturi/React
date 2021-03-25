import React ,{Component} from 'react';
import CalculateScore from './Components/CalculateScore';

class App extends Component
{
  render()
  {
    return(
      <div className='container'>
        <center>
          <CalculateScore Name={"Steeve"}
          School={"ABC private school"}
          total={234}
          goal={3}
          />
          
        </center>
      </div>
    )
  }
}
export default App