import React from 'react'

//if we have a function, it is an UI component (stateless)..
//class thakle container component
const NinjasUI = ({ninjas, deleteNinja}) => {
        //storing this.props to ninjas array
        //const {ninjas}= props;
        //mapping each array in the list of array to a single array ninja per iteration
        const ninjaList = ninjas.map(ninja=>{
            return(
                <div className="ninja" key={ninja.id}>
                    <div>UI component</div>
                    <div>{ninja.name}</div>
                    <div>{ninja.age}</div>
                    <button onClick={()=> {deleteNinja(ninja.id)}}>Delete Ninja</button>
                </div>
            )
        })
        return(
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
    
}

export default NinjasUI