import React, {Component} from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {

    render() {
        let content = "";
        if(true){
            content = "hello!";
        }
        const user = {
            name:'jordon',
            hobbies:["sports","reading"]
        }

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-1'>
                        <Header />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-1'>
                        <h1>{1+1}</h1>
                        <h1>{'字符串aaa'}</h1>
                        <h1>{content}</h1>
                        <h1>{true? "world1":"world2"}</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-1'>
                        <Home  name={"name1"} age={12} user={user}>
                            <p>i am child</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
