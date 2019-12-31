import React, {useEffect, useState, useMemo} from 'react';
import ErrorBoundry from "../errorBoundry/ErrorBoundry";
import PropAsStateInChildComponent from "../propAsStateInChildComponent/PropAsStateInChildComponent";


const ToggleShowHideSection = ():any => {

    const [showHideSection, setSowHideSection] = useState(false);

    const [arrayOfObjectsCompanies, setArrayOfObjectsCompanies] = useState({
        companies: [
            {id: 'assd',name: "Company One", category: "Finance", start: 1981, end: 2003},
            {id: 'dasd',name: "Company Two", category: "Retail", start: 1992, end: 2008},
            {id: 'asgd',name: "Company Three", category: "Auto", start: 1999, end: 2007},
            {id: 'azsd',name: "Company Four", category: "Retail", start: 1994, end: 2009}
            ],
    });

    const [style, setStyle] = useState({
        buttonStyle: {
            backgroundColor: 'green',
            color: 'yellow'
        }
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            // alert('useEffect save data!');
        }, 1000);
        return () => {
          clearTimeout(timer);
          console.log('ShowHideSectionConditionally cleanup work in');
        };
    }, []); // its trigger only once with second param array

    useEffect(() => {
        return () => {
            console.log('ShowHideSectionConditionally cleanup work in second time');
        };
    });

    const deleteElementOfShowedSection = (elemntIndexToRemove:number):any => {
       let companies =  arrayOfObjectsCompanies.companies.slice();
       //OR SPREAD OPERATOR -> to define new array - aim is to updating state immutably sprad operator example: const companies = [...arrayOfObjectsCompanies.companies]
        companies.splice(elemntIndexToRemove, 1);
        setArrayOfObjectsCompanies({companies:companies});


    };

    const changeStyleDependsOfOnClickEvent = ():any => {
        const styleStateCopyButtonStyleHide = {...style.buttonStyle};
        const styleStateCopyButtonStyleShow = {...style.buttonStyle};

        styleStateCopyButtonStyleHide.backgroundColor = 'red';
        styleStateCopyButtonStyleHide.color = 'white';

        styleStateCopyButtonStyleShow.backgroundColor = 'green';
        styleStateCopyButtonStyleShow.color = 'yellow';


        console.log(styleStateCopyButtonStyleHide);
        console.log(style);

        return  showHideSection === false ?
            setStyle({
            buttonStyle: styleStateCopyButtonStyleHide
        })
    :
        setStyle({
            buttonStyle:styleStateCopyButtonStyleShow
        });
    };

    const toggleShowHide = () => {
        setSowHideSection(!showHideSection);
        changeStyleDependsOfOnClickEvent();
    };

    const iterateThruObject = () =>
    {
        const cssClasses:any = [];

        const randomError = Math.random();

        if(randomError > 0.7)
        {
            throw new Error('Jebudu errror'); //obsluga bledu jedynie na produkcji (sformatowany, zinterpretowany)
        }

        if(arrayOfObjectsCompanies.companies.length == 1)
        {
            cssClasses.push('red');
        }
        if (arrayOfObjectsCompanies.companies.length <= 2)
        {
            cssClasses.push('bold');
        }

     return arrayOfObjectsCompanies.companies.map((company, index):any =>
         //errorBoundry will work onlu on production after production bulid
         <ErrorBoundry key={company.id}>
             <p onClick={() => deleteElementOfShowedSection(index)}
                className={cssClasses.join(' ')}
             >
                 NEW SECTION - SHOW HIDE CONDITIONALLY;
                 INDEX: {company.name}
             </p>
         </ErrorBoundry>
      );
    };

    return  (
       <div>
        <button style={style.buttonStyle} onClick={toggleShowHide}>ToggleShowHide</button>
           {
               showHideSection ?
               <div className={'showHideSectionConditionally'}>
                   {
                       iterateThruObject()
                   }
                </div>
               : null
           }
       </div>
    );


};

export default React.memo(ToggleShowHideSection);
