import React, {useState, useMemo} from 'react';
import ChildOfMemoHookExample  from '../childsComponent/ChildOfMemoHookExample';

export default () => {
    const [useStateCounter, setUseStateCounter] = useState(0);

    function onClickMemoCounterHandle()
    {
        setUseStateCounter(useStateCounter + 1);
    }

    const memoHookExampleChild =  useMemo(()=> {
        return <ChildOfMemoHookExample/>;
    },[useStateCounter]); // similar to componentShouldUpdate second parameter -
    // useStateCounter if is set (the second parametr) it mean that the child state will update too in <ChildOfMemoHookExample/> component
    return (
        <div>
            <div>
                Memo Hook example:
               <p>Memo useStateCounter: {useStateCounter}</p>
               <p>Memo setUseStateCounter: <input onClick={onClickMemoCounterHandle} value="Increment" type="button"/></p>
                <ChildOfMemoHookExample/>
                <h3>Memo Child value: {memoHookExampleChild}</h3>
            </div>
        </div>
    );
}