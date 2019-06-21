import React, {Component} from 'react'

//if we have a function, it is an UI component (stateless)..
//class thakle container component
class NinjasContainer extends Component {
    render (){
        //storing this.props to ninjas array
        const {ninjas}= this.props;
        //mapping each array in the list of array to a single array ninja per iteration
        const ninjaList = ninjas.map(ninja=>{
            return(
                <div className="ninja" key={ninja.id}>
                    <div>Container component</div>
                    <div>{ninja.name}</div>
                    <div>{ninja.age}</div>
                    <button onClick={()=> {this.props.deleteNinja(ninja.id)}}>Delete Ninja</button>
                </div>
            )
        })
        return(
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
    }
}

export default NinjasContainer