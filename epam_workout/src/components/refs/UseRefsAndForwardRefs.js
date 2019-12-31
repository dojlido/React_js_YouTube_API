import React, {useEffect, useRef} from 'react';
import InputsRefs from './InputsRefs';

export default () => {
    const firstNameRef = useRef(null);
    const surnameRef = useRef(null);
    const submitRef = useRef(null)

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    function firstNameKeyDown(e)
    {
        if(e.key === 'Enter') {
            surnameRef.current.focus();
        }
    }

    function surnameOnKeyDown(e)
    {
        if(e.key === 'Enter') {
            submitRef.current.focus();
        }
    }

    function submitOnKeyDown()
    {

    }

    return(
        <div>
            <div>
                Use Refs and ForwardRefs:
                <p>First name:
                    <InputsRefs
                        onKeyDown={firstNameKeyDown}
                        ref={firstNameRef}
                        placeholder="enter first name"
                        type="text"
                    />
                </p>
                <p>Surname:
                    <InputsRefs
                        onKeyDown={surnameOnKeyDown}
                        ref={surnameRef}
                        placeholder="enter surname"
                        type="text"
                    />
                </p>
                <button
                    onKeyDown={submitOnKeyDown}
                    ref={submitRef}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}