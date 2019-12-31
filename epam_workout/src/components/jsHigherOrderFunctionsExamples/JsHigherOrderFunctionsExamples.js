import React from 'react';

export default () => {

    const arrayOfObjectsCompanies = [
        {name: "Company One", category: "Finance", start: 1981, end: 2003},
        {name: "Company Two", category: "Retail", start: 1992, end: 2008},
        {name: "Company Three", category: "Auto", start: 1999, end: 2007},
        {name: "Company Four", category: "Retail", start: 1994, end: 2009},

    ];

    const ages = [11, 12, 25, 55, 66, 77, 88, 22, 66, 88];

    const companyListsMapFunction = arrayOfObjectsCompanies.map(company => (
        <ul>
            <li>{company.name}</li>
            <li>{company.category}</li>
            <li>{company.start}</li>
            <li>{company.end}</li>
        </ul>
    ));

    function filteredAge() {
        const filteredAges = ages.filter(age => (
            age === 66
        ));

        return filteredAges.map(age => (
            <ul>
                <li>{age}</li>
            </ul>
        ));
    }

    function filteredCompanies() {
        const filteredCompanies = arrayOfObjectsCompanies.filter(company => (
            company.category === 'Retail'
        ));

        return filteredCompanies.map(company => (
            <ul>
                <li>{company.category}</li>
            </ul>
        ));
    }

    function filteredCompaniesByAge() {
        const filteredCompaniesByAge = arrayOfObjectsCompanies.filter(company => (
            company.start === 1981 || company.end === 2008

        ));

        return filteredCompaniesByAge.map(company => (
            <ul>
                <li>{company.category}</li>
            </ul>
        ));
    }

    function sortCompaniesByAge() {
        const sortCompaniesByAge = arrayOfObjectsCompanies.sort((company1, company2) => (
            company1.start > company2.start

        )).map(company => (
            <ul>
                <li>{company.start}</li>
            </ul>
        ));

        return sortCompaniesByAge;
    }


    function reduceCompaniesByAge() {

        const reduceCompaniesByAge = arrayOfObjectsCompanies.map(company => (
            company.start
        )).reduce((total, age) => (
            total + age
        ));

        return  reduceCompaniesByAge;

    }


    return (
        <div>
            <div>
                Higher Order Functions Examples mapFunction:
                {
                    companyListsMapFunction
                }
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                Higher Order Functions filter:
                <div>FilteredAge</div>
                {
                    filteredAge()
                }
                <br/>
                <br/>
                <div>FilteredCompanies:</div>
                    {
                        filteredCompanies()
                    }
                <br/>
                <div>FilteredCompanies By Age:</div>
                {
                    filteredCompaniesByAge()
                }
                <br/>
                <div>SortCompanies By Age:</div>
                {
                    sortCompaniesByAge()
                }
                <br/>
                <div>ReduceCompanies By Age (SUM):</div>
                {
                    reduceCompaniesByAge()
                }
            </div>
        </div>

    );
}