import React from 'react';
import '../scss/MethodReferenceExample.scss';
import Radium from 'radium';

// import StyleRoot from 'radium';

interface methodReferenceExampleInterface {
    counter: number;
    click: any;
}

const style = {
  backgroundColor: 'green',
  color:'red',
    ':hover': {
        backgroundColor:'gold',
        color: 'black'
    }
    // '@media (min-width: 1000px)': {
    //   width: '1550px'
    // }
};



    const methodReferenceExample = (props:methodReferenceExampleInterface) : any => {
        return (
            /*<StyleRoot>*/
                <div className={'MethodReferenceExample'}>
                    <button style={style} onClick={props.click}>Button for method reference example</button>
                    <h1>pass method example Via reference Counter++ : {props.counter}</h1>
                </div>
            // </StyleRoot>
        );
    };


export default Radium(methodReferenceExample);