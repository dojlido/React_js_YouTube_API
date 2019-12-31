import React, {useState} from 'react';

export default () => {
    const [age, setAge] = useState(21);
    const [name, setName] = useState('Dojlon');

    return (
        <div>
            <div>
                Hook example:
               <p>Name: <input onChange={ e => setName(e.target.value)} value={name} type="text"/></p>
               <p>Age: {age} <button onClick={ () => setAge(age + 1) }>Add age</button></p>
                <p>State -> age {age} name is {name}</p>
            </div>
        </div>
    );
}