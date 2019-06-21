import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
class Post extends Component{
    //WE ARE AGAIN GONNA PUT REDUX HERE

    // state = {
    //     post : null
    // }
    
    // componentDidMount () {
    //     console.log(this.props)
    //     let id = this.props.match.params.post_id
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res=>{
    //             console.log(res);
    //             this.setState({
    //                 post : res.data
    //             })
    //         })
    // }
    render(){
        const post = this.props.post ? (
            <div className="div post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        );
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

//ownParams are the initial params that get passed on before we used redux..see commented code above
const mapStateToProps = (state, ownProps) =>{
    let id = ownProps.match.params.post_id;
    return ({
        post : state.posts.find((post) => {
            return post.id === id
        })
    })
}

export default  connect(mapStateToProps)(Post)