import React from 'react';

type RestOperatorInterface = {
    number1: number,
    number2: number,
}

    const restOperator = (...spreadOperator:RestOperatorInterface[]):any => { //przy zadeklrowaniu typu prymitywnego zwraca fatal
        console.log(JSON.stringify(spreadOperator));
        return true;
    };

    // const restOperatorWithArgs = restOperator(number1, number2);

export default restOperator;
