import React, { Component } from 'react';

class Testcounter extends Component {
    state = { 
        count:0,
        tags:['tag1','tag2','tag3']

     }

     handleIncrement=()=>{
         this.setState({count:1})
     }
     mapcounter(){
    
            if (this.state.tags.length===0) return(<p>"null"</p>);
            return(
            <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}    
            </ul>);
            
        
     }

    render() { 
        return ( 
            <div>
               <span></span>
               <button>Increment</button>
                 {this.mapcounter()}

                 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn btn-sm m-2">increment</button>
        <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-secondary btn btn-danger btn-sm m-2">Delete</button>     */}

          
            </div>
         );
    }

    getBadgeClasses(){
        let classes="badge m-4 badge-"
        classes+= this.props.counter.value===0? "warning": "primary";
        return classes;
    }
    formatCount(){
        const {value}=this.props.counter;
     return value === 0 ? 'zero':value ;
 }
}
 
export default Testcounter
;