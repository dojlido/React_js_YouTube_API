import React, {Component} from 'react';
import PropTypes from 'prop-types';

const TestForPropTypes = (props) => {
    return (
        <div>
            <h1>{props.str}</h1>
            <h1>{props.bool ? 'boolean' : 'npBoolean'}</h1>
            <h1>{props.strOrNum}</h1>
            <br/>
            <div>
                {
                    props.standardArray.map((val) => {
                        return (<li key={val}>{val}</li>)
                    })
                }
            </div>
            <br/>
            <div>
                {
                    props.arrayOfOBJ.map((val) => {
                        return (<li key={val.age}>{val.name +' '+val.age}</li>)
                    })
                }
            </div>
            <br/>
            <h1>{props.children}</h1>
        </div>
        )
};

TestForPropTypes.propTypes = {
    str:PropTypes.string,
    bool:PropTypes.bool,
    strOrNum:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    array:PropTypes.arrayOf(PropTypes.number),
    arrayOfOBJ:PropTypes.arrayOf(PropTypes.shape(
        {
         name:PropTypes.string,
         age:PropTypes.number,
        }
    )),
    children:PropTypes.element.isRequired

};

export default class TypeCheckingWithPropsTypes extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <div>
                    <TestForPropTypes
                        str={'TechDojlido'}
                        bool
                        strOrNum={11}
                        standardArray={[1,2,3]}
                        arrayOfOBJ={[ {name:'john', age:10}, {name:'Koko', age:29} ]}
                    >
                        <div>
                            Child
                        </div>
                    </TestForPropTypes>
                </div>
            </div>
        );
    }
}
