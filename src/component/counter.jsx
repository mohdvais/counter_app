import React, { Component } from 'react';

class counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    // render() {  
    //     return (
    //       <div>
    //           <span className ={this.getBadgeClasses()}>{this.formateCount()}</span>
    //         <h1> itismdvais </h1>
    //         <button className="btn btn-secondary btn-sm">Increment</button>
    //         <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    //       </div>
    //     );
    // }
    renderTags(){
      if (this.state.tags.length === 0) return <p> there are no tags! </p>;
      return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    render(){
      return(
        <div>
          {this.state.length ===0 && "Please create a new tag"}
          {this.renderTags()}
        </div>
      );
    }
    getBadgeClasses(){
      let classes = "badge m-2 badge-";
      classes += this.state.count === 0 ? "worning": "primary";
    }



    formateCount(){
        const {count}= this.state;
        return count ===0 ? "zero" : count;
}


}
 
export default counter;