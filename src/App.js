import React from 'react';
import './App.css';
import { VictoryLine, VictoryChart } from 'victory';
const graphData = [{ x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 6 },
            { x: 3, y: 7 }];
function App (props) {
  return (
    <div className="App">
        <div className="Form0">
        <DataForm/>
        </div>
        <div className="Form1">
        <DataForm/>
        </div>
        <div className="Form2">
        <DataForm/>
        </div>
        <div className="Graph">
         <VictoryChart>
          <VictoryLine
          style={{
            data: { stroke: "#c43a31" }
          }}
            data={graphData}
        />
      </VictoryChart>       
        </div>
    </div>
  );
}
//
class DataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: '',
      depth: '',
      time: '',
      rest: '',
      out: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //will update and refresh the class props live
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    alert('output: ' + this.state.group + " " 
                   + this.state.depth + " " 
                   + this.state.time + " "
                   + this.state.rest);
    event.preventDefault();
    this.setState({out: `
    Group: \"${this.state.group}\"
    depth: \"${this.state.depth}\"
    time: \"${this.state.time}\"
    rest: \"${this.state.rest}\"
    `});

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>group</label>
        <input type="text" name="group" onChange={this.handleChange} />
        <br/>
        <label>depth</label>
        <input type="text" name="depth" onChange={this.handleChange} />
        <br/>
        <label>time</label>
        <input type="text" name="time" onChange={this.handleChange} />
        <br/>
        <label>rest</label>
        <input type="text" name="rest" onChange={this.handleChange} />
        <br/>
        <input type="submit" value="Submit" />
        <br/>
        {this.state.out}
      </form>
    );
  }
}
//
export default App;
