import React from 'react';

    function InputsRefs({type, onKeyDown, placeholder}, ref)
    {
      return <input ref={ref} type={type} onKeyDown={onKeyDown} placeholder={placeholder} />;
    }

    const forwardedInputsRefs =  React.forwardRef(InputsRefs);

    export default forwardedInputsRefs;
