import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {

  render() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-xs-1'>
                    <div>your name is {this.props.name},your age is {this.props.age}</div>
                    <div>
                        <h4>hobbies</h4>
                        <ul>
                            {this.props.user.hobbies.map((v,k)=><li key={k}>{v}</li>)}
                        </ul>
                    </div>

                    <div>{this.props.children}</div>
                    <button className="btn btn-primary" >make me older</button>

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

