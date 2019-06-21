import React, {Component} from 'react'

//if we have a function, it is an UI component (stateless)..
//class thakle container component
class NinjasConditional extends Component {
    render (){
        //storing this.props to ninjas array
        const {ninjas}= this.props;
        //mapping each array in the list of array to a single array ninja per iteration

//USING IF STATEMENT
//...
        /*const ninjaList = ninjas.map(ninja=>{
            if(ninja.age>=18){
                return(
                    <div className="ninja" key={ninja.id}>
                        <div>Conditional example</div>
                        <div>{ninja.name}</div>
                        <div>{ninja.age}</div>
                    </div>
                )
            }
            else{
                return(
                    null
                )
            }  
        })*/

        //USING TERNARY OPERATOR
        //...
        const ninjaList = ninjas.map(ninja=>{
            return ninja.age>=18 ? (
            <div className="ninja" key={ninja.id}>
                <div>Conditional example</div>
                <div>{ninja.name}</div>
                <div>{ninja.age}</div>
            </div>
          ) : null;
        })

        
        return(
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
    }
}

export default NinjasConditional