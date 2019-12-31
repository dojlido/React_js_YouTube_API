import React, {useEffect, useState, useMemo, useRef, useContext} from 'react';
import ErrorBoundry from "../errorBoundry/ErrorBoundry";
import AuthContext from '../context/auth-context';

interface propProductsInterface {
    propProducts: any;
}

const PropAsStateInChildComponent = (props:propProductsInterface):any => {

    const [showHideSection, setSowHideSection] = useState(false);

    const [useStateProductsArrayOfObject, setStateProductsArrayOfObjectsCompanies] = useState(props.propProducts);

    const deleteElementOfShowedSection = (elemntIndexToRemove:number):any => {
        let products = useStateProductsArrayOfObject.products.slice();
        //OR SPREAD OPERATOR -> to define new array - aim is to updating state immutably sprad operator example: const companies = [...arrayOfObjectsCompanies.companies]
        products.splice(elemntIndexToRemove, 1);
        setStateProductsArrayOfObjectsCompanies({products:products});
    };

    const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (toggleBtnRef && toggleBtnRef.current) { // reference example in this case it's reference for "authomatic" click event
            toggleBtnRef.current.click();
        }
        setTimeout(() => {
             alert('useEffect Memo save data!'); // 1. its trigger only once with second param array []
        }, 1000);
        return () => { // 2. when it return anonymus function will trigger after component UNMOUNT
            console.log('Remove Section from REACT DOM -> cleanup work in');
        };
    },[]);



    const toggleShowHide = () => {
        setSowHideSection(!showHideSection);
    };

    const iterateThruObject = () =>
    {

        return useStateProductsArrayOfObject.products.map((product:any, index:number):any =>
            //errorBoundry will work onlu on production after production bulid
            <ErrorBoundry key={product.id}>
                <p onClick={() => deleteElementOfShowedSection(index)}>
                    NEW SECTION - SHOW HIDE CONDITIONALLY;
                    INDEX: {product.name}
                </p>

            </ErrorBoundry>
        );

    };

    return  (
        <div>
            <button
                onClick={toggleShowHide}
                ref={toggleBtnRef}
            >ToggleShowHide - remove element from React DOM by useEffect()</button>

            {
                showHideSection ?
                    <div className={'showHideSectionConditionally'}>
                            {<button onClick={authContext.login}>Context API</button>}
                            {authContext.auth ? <p>User was authenticated</p> : <p>Please Log In</p>}
                        {
                            iterateThruObject()
                        }
                    </div>
                    : null
            }
        </div>
    );


};

export default PropAsStateInChildComponent;
