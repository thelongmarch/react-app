import React from 'react';
/*无状态组件
1.无需state，即不处理用户的输入，组件的所有的数据都是依赖props传入的
2.不需要用到生命周期

*/
const Header =(props)=> {
 
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-xs-1'>
                    <h1>header</h1>
                </div>
            </div>
        </div>
    );
  };

export default Header;


