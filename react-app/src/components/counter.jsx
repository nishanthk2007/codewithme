import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
        tags: ['tag1','tag2','tag3']
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);//able to get object of class
    // }

    // handleIncrement(){
    //     console.log("clicked on increment",this); //will give undefind
    // }

    //Instead of writing constructor and method to get object use lambda expressions
    //arrow functions don't  remaind this keyword they will inherit it
    // handleIncrement= (product) => { 
    //     console.log(product);
    //     console.log("clicked on increment", this);
    //     this.setState({count: this.state.count + 1});
    // }
    
    //commented above since as per now we are not using product argument
    handleIncrement= () => { 
        console.log("clicked on increment", this);
        this.setState({count: this.state.count + 1});
    }


    //to pass arguments from onClick event we need other function
    //as in button we can not write this.handleIncrement({id: 1}) directly
    // doHandleIncrement(){
    //     this.handleIncrement({id: 1});
    // }
    //and after this modify handleIncrement method as below
    //handleIncrement= (e) => { console.log(e); } --> here e is event
    //Instead of above we can write arrow function in button tag directly

    render(){
        console.log("props",this.props);
        return(
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                
                {/* <button onClick={() => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button> */}
                {/* <div>
                {this.state.tags.length === 0 && "Please add tags!"}
                {this.renderTags()}
                </div> */}
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
        return classes;
    }

formatCounter(){
    const { count } = this.state;
    return count === 0 ? 'Zero' : count; 
}
}

export default Counter;