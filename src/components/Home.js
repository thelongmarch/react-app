import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state ={
            age:props.initAge,
            status:0
        }
        setTimeout(()=>{
            this.setState({
                status:1
            })
        },3000)
        
    }
    onMakeOlder(){
        this.setState({
            age:this.state.age+3
        })   
    }

  render() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-xs-1'>
                    <div>your name is {this.props.name},your age is {this.state.age}</div>
                    <div>
                        <h4>hobbies</h4>
                        <ul>
                            {this.props.user.hobbies.map((v,k)=><li key={k}>{v}</li>)}
                        </ul>
                    </div>

                    <div>{this.props.children}</div>
                    <button onClick={()=>{this.onMakeOlder()}}  className="btn btn-primary" >make me older111</button>
                    <button onClick={this.onMakeOlder.bind(this)}  className="btn btn-primary" >make me older222</button>
                    <p>status:{this.state.status}</p>
                </div>
            </div>
        </div>
    );
  }
}

Home.propTypes ={
    name:PropTypes.string,
    age:PropTypes.number,
    user:PropTypes.object,
    children:PropTypes.element.isRequired

}

