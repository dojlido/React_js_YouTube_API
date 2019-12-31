import React from 'react';

    const spreadOperator = ():any  => {

        let returnSomething = 'Looknij na console.log()';

        let cosArray1 = [0,1,2,3];
        let cosArray2 = [...cosArray1,4,5,6];

        let cosObject1 = {
            0:0,
            1:1
        };
        let cosObject2 = {
            ...cosObject1,
            2:2,
            3:3
        };
        console.log('Array spreadOperatorExample: ' + cosArray2 + '; Object spread operator example' + JSON.stringify(cosObject2));
        return returnSomething;

    };

export default spreadOperator;
