import React from 'react';

const  memoComponent = React.memo((props) => {
    console.log('memoVal = to ' + props.val);
    return (<div>Memo example :{props.val}</div>);
});

export default memoComponent;