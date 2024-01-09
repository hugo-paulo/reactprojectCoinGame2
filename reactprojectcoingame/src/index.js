import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        {/* Change code below this line */ }
        return <h1>{this.props.fiftyFive ? "You Win!" : "You Lose!"}</h1>;
        {/* Change code above this line */ }
    }
}

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => {
            // Complete the return statement:
            return {
                counter: prevState.counter + 1
            }
        });
    }
    render() {
        const expression = Math.random() >= 0.5; // Change this line
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                {/* Change code below this line */}
                <Results fiftyFive={expression} />
                {/* Change code above this line */}
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <GameOfChance />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
