import React, {Component} from 'react';

class Counter extends Component {
    //remove state from counter and make it as controlled component
    // state = {
    //     count: this.props.counter.value,
    //     tags: ['tag1','tag2','tag3']
    // };

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
    //if there is not state property no need of handleIncrement method
    // handleIncrement= () => { 
    //     console.log("clicked on increment", this);
    //     this.setState({count: this.state.count + 1});
    // }


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
                <span>{this.props.children}</span>
                <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                
                {/* <button onClick={() => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button> */}
                {/* <div>
                {this.state.tags.length === 0 && "Please add tags!"}
                {this.renderTags()}
                </div> */}
                {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    //because of no state comment below
    // renderTags(){
    //     if(this.state.tags.length ===0) return <p>There are no tags</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value; 
    }
}

export default Counter;