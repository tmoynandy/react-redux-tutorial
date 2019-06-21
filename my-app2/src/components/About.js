import React from 'react';
import Rainbow from '../higher-order-components/Rainbow'

const About = (props) =>{
    //console.log(props)
    //AN EXAMPLE OF PROGRAMMATIC REDIRECT
    setTimeout ( () => {
        props.history.push('/contact')
    },2000);
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repellendus accusantium earum modi voluptas sunt distinctio nostrum labore tempore reiciendis ad dolores itaque sapiente, eos, quam voluptatibus possimus enim dolore.</p>
        </div>
    )
}

export default Rainbow(About)