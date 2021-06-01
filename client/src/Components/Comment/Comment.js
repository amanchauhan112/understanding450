import React,{Component} from 'react'
import axios from 'axios';
import './Comment.css';
class Comment extends Component {
      
    state={
        comment:'',
        posts:[],
        // name:'',
    };

    componentDidMount=()=>{
        this.getComment();
    }
    componentDidUpdate=()=>{
this.getComment();
    }
    


    getComment=()=>{

  

        axios.get('http://localhost:8080/api',{
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
        })
        .then((response)=>{
          const data = response.data;
          
           this.setState({posts:data})
       
        })
       .catch(()=>{
           alert('Error retireiving data!!');
       });
    }

    // getComment=()=>{
    //     axios.get('http://localhost:8080/api/')
    
    //     .then((response)=>{
    //       const data = response.data;
    //       this.setState({posts:data})
    //       // history.push('/')
    //     })
    //    .catch(()=>{
    //        alert('Error retireiving data!!');
    //    });
    // }

    
    displayComment = (posts) =>{

        if(!posts.length) return null;

        return posts.map((post,index)=>(

            <div key={index}>
            <h4 className='comment' >{post.postedBy.name}:{post.comment}</h4>
             </div>
        ));
    };

    handleChange=(event)=>{
        const target=event.target;
        const name=target.name;
        const value=target.value;

        this.setState({
            [name]:value,
            postedBy:localStorage.user
        });

    }
    
    resetUserInput=()=>{

        this.setState({
            comment:'',
        });
    };

    submit=(event) =>{

        event.preventDefault();

        // console.log(this.state);

        const payload={
            comment:this.state.comment,
            postedBy:localStorage.user,
        };

        console.log(payload.comment);

        // axios({
        //     url:'http://localhost:8080/gooo',
        //     method:'GET',
        //     // data: payload
        // })
        // .then((response)=>{
        //    console.log(response);
        //     // if( res2.status!=='400'){
        //     // console.log(jsondata[0].displayName)
        //     // this.setState({name:jsondata[0].displayName})
        //     // history.push("/login")
        //     // }
        // })
        //   .catch(()=>{
        //         console.log("incorrect")
        //     });

        axios({
            url:'http://localhost:8080/api/save',
            method:'POST',
            data: payload,
            headers:{
              "Content-Type":"application/json",
              "Authorization":"Bearer "+localStorage.getItem("jwt")
          },
        })
        .then(()=>{
            console.log('Data Recieved');
            this.resetUserInput();
        })
        .catch(()=>{
            console.log('Error from axios method')
        })

    };

    render(){

// const Comment= ()=> {
  

    return (
        <div>
            {/* <form onSubmit={this.submit}> */}
{/* <h1>{this.name} </h1> */}
             {/* <input
              type="text" 
              name="comment"
            //   required="true"
              id="comment"
              placeholder="Comment..."
              value={this.state.comment}
              onChange={this.handleChange}
              />

              <button >Comment</button>
              </form>
              
<p style={{fontWeight:'bold'}}>Comments:({this.state.posts.length})</p>

<hr/>
<div>
    {this.displayComment(this.state.posts)}
</div> */}
        </div>
    )
}



}
// }

export default Comment;
