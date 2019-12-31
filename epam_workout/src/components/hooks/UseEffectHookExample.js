import React, {useState, useEffect} from 'react';

let born = false;
export default () => {
    const [growth, setGrowth] = useState(0);
    const [wisdomBlow, setWisdomBlow] = useState(false);

    useEffect(() => {
       if(born)
       {
           document.title = 'Wisdom Blow !!!!!!';
       }
    },[wisdomBlow]); // if widom blow = true

    //check when component is born, multiple possibility of using useEffect
    useEffect(() => {
        console.log('I am born');
    },[]); //empty array coponent will reder always with initial state

    //check when component is born
    useEffect(() => {
        if(born)
        {
            console.log('Make mistake and learn!');
        }else
        {
            born = true;
        }

        if(growth === 100 )
        {
            setWisdomBlow(true);
        }

        return function cleanup() {
            console.log('clean up after mistake!!');
        }

    }); //without empty array param the useEffect fanction will regenerate always on specyfic action
        //for example onClick event

    function growHandle()
    {
        setGrowth(growth + 10);
    }

    return (
        <div>
            <div>
               Use Effect for growth:
                <h2>Growth: {growth}</h2>
                <button onClick={growHandle}>Learn and Grow</button>
            </div>
        </div>
    );
}