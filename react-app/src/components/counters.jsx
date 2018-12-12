import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component{

    render(){
        const { onReset, onIncrement, onDecrement, onDelete, counters } = this.props;

        return (
            <div>
                <button onClick={ onReset } className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter => 
                <Counter key={counter.id} onDecrement={onDecrement} onIncrement={onIncrement} onDelete={onDelete} counter={counter}>
                <h4>Counter {counter.id}</h4>    
                </Counter>
                )}
            </div>
        );
    }
}

export default Counters;