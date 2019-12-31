import React from 'react';

// interface IContextProps {
//     auth: boolean;
//     login: ({type}:{type:string}) => void;
// }

const authContext = React.createContext({
    auth: false,
    login: () => {}
});

export default authContext;