import React from "react";
import Auxiliary from "../hoc/Auxiliary";
import WithClass from "../hoc/WithClass";

const reactStylingExample = () : any => {
    return ( // similar to React.Fragment
        <Auxiliary>
            <WithClass classes={'ReactStylingExample'}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </WithClass>
        </Auxiliary>
    );
};


export default reactStylingExample;