import React from 'react';
import './stopwatch.css';
import dpad from './dpad.png';


const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)
  

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0, 
      laps: [],
      lastClearedIncrementer: null,
      goal: [],
    };
    this.incrementer = null;
  }  
    
  handleStartClick() {
    this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
  }
  
  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }
  
  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      laps: []
    });
  }
  
  handleLapClick() {
    this.setState({
      laps: this.state.laps.concat([this.state.secondsElapsed])
    })
  }

  handleSetGoal() {
    /*Voeg hier SetGoal functionaliteit toe*/
  }

  
  render() {
    return (
        <div className="stopwatch">
          <div className="stopwatch-bg">
            <h2 className="stopwatch-title">[NAME]</h2>
            <div  className="stopwatch-screen">
              <h1  className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>
              <ul className="stopwatch-laps">
              { this.state.laps.map((lap, i) =>
                  <li key={i} className="stopwatch-lap"><strong>{formattedSeconds(lap)} added to your progress {i + 1}</strong></li>)
              }
              </ul>
            </div>
           </div>
           <div className="controller"><img className="dpad" src={dpad} alt="dpad" width="150px" height="150px"></img>
            {(this.state.secondsElapsed === 0 ||
              this.incrementer === this.state.lastClearedIncrementer
              ? <Button className="start-btn" onClick={this.handleStartClick.bind(this)}>start</Button>
              : <Button className="stop-btn" onClick={this.handleStopClick.bind(this)}>pause</Button>
            )}
            {(this.state.secondsElapsed !== 0 &&
              this.incrementer !== this.state.lastClearedIncrementer
              ? <Button className="lap-btn" onClick={this.handleLapClick.bind(this)}>lap</Button>
              : <Button className="lap-btn">set goal</Button>
            )}
            {(this.state.secondsElapsed !== 0 &&
              this.incrementer === this.state.lastClearedIncrementer
              ? <Button className="reset-btn" onClick={this.handleResetClick.bind(this)}>reset</Button>
              : null
            )}</div>
            {/*<ul className="stopwatch-laps">
              { this.state.laps.map((lap, i) =>
                  <li className="stopwatch-lap"><strong>Added to your progress {i + 1}</strong>/ {formattedSeconds(lap)}</li>)
              }
            </ul>*/}
        </div>
    );
  }
}

/** verbose component before 0.14
class Button extends React.Component {
  render() {
    return <button type="button" {...this.props}
                   className={"btn " + this.props.className } />;
  }
}
*/

const Button = (props) =>
  <button type="button" {...props} className={"btn " + props.className } />;

export default Stopwatch;