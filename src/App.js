import React from 'react';
import './App.css';
import { VictoryLine, VictoryChart } from 'victory';
const graphData = [{ x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 6 },
            { x: 3, y: 7 }];

//Table 1/2 Padi Dive table implementation
//TODO complete the other Dive group tables abd their corresponding rest time array
var table1 = [[10, 9, 7, 6, 5, 4, 4, 3, 3, 3, 3],[19, 16, 13, 11, 9, 8, 7, 6, 6, 5, 5, 4], [25, 22, 17, 14, 12, 10, 9, 8, 7, 6, 5, 5], [29, 25, 19, 16, 13, 11, 10, 9, 8, 7, 7, 6]];
var table2 = [[300],[47, 348],[21, 109, 410], [8, 30, 118, 419]];

//Table 3 Padi Dive table implementation
//TODO complete the arrays for each depth and complete this example depth array of 35 feet
var table3 = ["Z", 205, null, "Y", 188, 17, "X", 168, 37, "W", 152, 53, "V", 139, 66, "U", 127, 78, "T", 117, 88, "S", 108, 97, "R", 100, 105, "Q", 92, 113, "P", 85, 120, "O", 79, 126, "N", 73, 132, 
                "M", 67, 138, "L", 62, 143, "K", 57, 148, "J", 52, 153, "I", 48, 157, "H", 44, 161, "G", 40, 165, "F", 36, 169, "E", 32, 173, "D", 29, 176, "C", 25, 180, "B", 19, 186, "A", 10, 195];

var row = null;
var col = null;

//sets row to corresponding row in table 1 from group input, returns false if invalid
function getR(r){
  if (r == "A"){
    row = 0;
  }
  else if (r == "B"){
    row = 1;
  }
  else if (r == "C"){
    row = 2;
  }
  else if (r == "D"){
    row = 3;
  }
  else if (r == "E"){
    row = 4;
  }
  else if (r == "F"){
    row = 5;
  }
  else if (r == "G"){
    row = 6;
  }
  else if (r == "H"){
    row = 7;
  }
  else if (r == "I"){
    row = 8;
  }
  else if (r == "J"){
    row = 9;
  }
  else if (r == "K"){
    row = 10;
  }
  else if (r == "L"){
    row = 11;
  }
  else if (r == "M"){
    row = 12;
  }
  else if (r == "N"){
    row = 13;
  }
  else if (r == "O"){
    row = 14;
  }
  else if (r == "P"){
    row = 15;
  }
  else if (r == "Q"){
    row = 16;
  }
  else if (r == "R"){
    row = 17;
  }
  else if (r == "S"){
    row = 18;
  }
  else if (r == "T"){
    row = 19;
  }
  else if (r == "U"){
    row = 20;
  }
  else if (r == "V"){
    row = 21;
  }
  else if (r == "W"){
    row = 22;
  }
  else if (r == "X"){
    row = 23;
  }
  else if (r == "Y"){
    row = 24;
  }
  else if (r == "Z"){
    row = 25;
  }
  else
    return false;
}
//returns row of target depth/dive from table1 and getc , c = column t = time
function getR1(col, t){
  console.log("test");
  var i = 0;
  while (i < 24) {
  if (table1[i][col] >= t){
    console.log(i);
    console.log(table1[i][col]);
    return i;
  }

  i++;
  }
  return false;
}


//sets column to corresponding column in table 1 from depth input, returns false if invalid
function getC(c){
  if (c <= 35){
    col = 0;
  }
  else if (c <= 40){
    col = 1;
  }
  else if (c <= 50){
    col = 2;
  }
  else if (c <= 60){
    col = 3;
  }
  else if (c <= 70){
    col = 4;
  }
  else if (c <= 80){
    col = 5;
  }
  else if (c <= 90){
    col = 6;
  }
  else if (c <= 100){
    col = 7;
  }
  else if (c <= 110){
    col = 8;
  }
  else if (c <= 120){
    col = 9;
  }
  else if (c <= 130){
    col = 10;
  }
  else if (c <= 140){
    col = 11;
  }
  else
    return false;
}
//returns 
function surfaceGroup(x){
  if (x == 0){
    return "A";
  }
  else if (x == 1){
    return "B";
  }
  else if (x == 2){
    return "C";
  }
  else if (x == 3){
    return "D";
  }
  else if (x == 4){
    return "E";
  }
  else if (x == 5){
    return "F";
  }
  else if (x == 6){
    return "G";
  }
  else if (x == 7){
    return "H";
  }
  else if (x == 8){
    return "I";
  }
  else if (x == 9){
    return "J";
  }
  else if (x == 10){
    return "K";
  }
  else if (x == 11){
    return "L";
  }
  else if (x == 12){
    return "M";
  }
  else if (x == 13){
    return "N";
  }
  else if (x == 14){
    return "O";
  }
  else if (x == 15){
    return "P";
  }
  else if (x == 16){
    return "Q";
  }
  else if (x == 17){
    return "R";
  }
  else if (x == 18){
    return "S";
  }
  else if (x == 19){
    return "T";
  }
  else if (x == 20){
    return "U";
  }
  else if (x == 21){
    return "V";
  }
  else if (x == 22){
    return "W";
  }
  else if (x == 23){
    return "X";
  }
  else if (x == 24){
    return "Y";
  }
  else if (x == 25){
    return "Z";
  }
  else
    return false;
}
function App (props) {
  return (
    <div className="App">
        <div className="Form0">
        <h1>Testing not for Actual Use</h1>
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
      out: 'Group: previous dive group(leave blank if N/A) Rest: Planned time out of water after dive',
      nextG: ''
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
                   + this.state.rest + " " 
                   + this.state.nextG);
    event.preventDefault();
    this.setState({out: `
    Group: \"${this.state.group}\"
    Depth: \"${this.state.depth}\"
    Time: \"${this.state.time}\"
    Rest: \"${this.state.rest}\"
    `});

    getC(this.state.depth);
    this.setState({nextG: surfaceGroup(getR1(col, this.state.time))});
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
        <br/>
        <b>Next group: {this.state.nextG}</b>
        <br/>

      </form>
    );
  }
}
//
export default App;
