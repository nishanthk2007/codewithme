import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1','tag2','tag3']
    };

    handleIncrement(){
        console.log("clicked on increment", this); //will give undefind
    }
    
    render(){
        return(
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <div>
                {this.state.tags.length === 0 && "Please add tags!"}
                {this.renderTags()}
                </div>
                {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
            </div>
        );
    }

    renderTags(){
        if(this.state.tags.length ===0) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        console.log("classes:",classes);
        return classes;
    }

formatCounter(){
    const { count } = this.state;
    return count === 0 ? 'Zero' : count; 
}
}

export default Counter;