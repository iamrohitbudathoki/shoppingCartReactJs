import React, { Component } from 'react';
import Counter from './counter';



class Counters extends Component {
    
    render() { 
         
      return (
            <div>
                <button 
                onClick={this.props.onReset} 
                className="btn btn btn-success btn-sm m-2"
                >Reset</button>
               
                {this.props.counters.map(counter => (
                   <Counter 
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}
                    key={counter.id} 
                    counter={counter}
                    />

                ))}

            </div>
          );
    }
}
 
export default Counters;