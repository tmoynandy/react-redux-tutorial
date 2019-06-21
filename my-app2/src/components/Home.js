import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

//now what we are going to do is, have all our data(state) taken from one single place, called the store
// we are going to connect the component to root-reducer, which is in turn connected to store in indexed.js
import {connect} from 'react-redux'

class Home extends Component {
    // state = {
    //     posts : [ ]
    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res);
    //             this.setState({
    //                 posts : res.data.slice(0,10)
    //             })
    //         })
    // }
    render(){
        console.log(this.props)
        //const {posts} = this.state
        const {posts} = this.props
        const postList = posts.length ? (
            posts.map(post=>{
                return(
                    <div className="post card" key = {post.id}>
                        <div className="card-content">
                            <Link to={'/'+post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No Posts yet</div>
        )
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
    
}

//for a component to get acces to data from store, we take data from store and map it to props of the component
//inside the function, we get access to the state of the store, same state mentioned in params
const mapStateToProps = (state) =>{
    return {
        posts : state.posts
    }
}

//const mapStateToProps  = (state)

//the connect function retrns a Higer order component & that HRC wraps the Home component to make it higher order
export default connect(mapStateToProps)(Home)

//by passing mapStateTOProps, we tell redux to grab posts data from its store and map it to posts props of home.js component
//basically what redux does is,
//have a centralised place to store data..
//the rootReducer connects to that store
//now we do not have individual state of components from where data is fetched..
//instead components fetch data from reducers..
//how?
//the mapStateTOProps tells the reducer which data to grab from the store state and pass on as props to the component
//then we use that props as this.props