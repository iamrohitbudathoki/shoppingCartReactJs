import React, { Component } from 'react';
import Counters from './counters';
import Navbar from './navbar';


class AppCounter extends Component {
    state = { 
        counters:[
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:3},
            {id:4,value:0},
        ]
     }

     handleReset=()=>{
        console.log("reset clicked")
        const resetcounters= this.state.counters.map(c=>{c.value=0; 
            return c;})
        this.setState({counters:resetcounters})
        
     }
     handleIncrement=counter=>{
        const counters=[...this.state.counters]
        const index=[counters.indexOf(counter)]
        counters[index]={...counter};
        counters[index].value++;
        this.setState({counters});

    }

    handleDecrement=counter=>{
        const counters=[...this.state.counters]
        const index=[counters.indexOf(counter)]
        counters[index]={...counter};
        counters[index].value--;
        this.setState({counters});

    }
     
     handleDelete = (counterId) => {
         console.log("delete event called",counterId)
         const newcounters= this.state.counters.filter(counter=>counterId!==counter.id)
         this.setState({counters:newcounters})
     }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar
                    totalCounters={this.state.counters.filter(c=>c.value>0).length}
                />

                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onDecrement={this.handleDecrement}
                    />
                </main>
            </React.Fragment>
         );
    }
}
 
export default AppCounter ;