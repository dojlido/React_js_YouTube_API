import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class HigherOrderComponents extends Component {
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
