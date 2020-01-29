import React from 'react';

import {configure, shallow} from 'enzyme'; //shallow function give possibility of testing one unit of application
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems'
import NavigationItem from '../NavigationItem/NavigationItem'

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {           //first param will be retun as string in browser developer tool '<NavigationItems />' ..
    it(
        'should return two <NavigationItem /> navigation items', //first param - the description that will appear in the console
        () => {
           const wrapper = shallow( <NavigationItems/>); //shallow function takes JSX as param
           expect(wrapper.find(NavigationItem)) //find() function will give us possibility to look into wrapper component to find that the parent oontainer return (that what we expect from it)
               .toHaveLength(2); //define length of returned JSX elements for example (one NavigationItem , or two NavigationItem etc. )
        });
});

//COMMAND TO TRIGGER TEST -> npm test

//HINT -> enzyme give us possibilty of testing one element of application - the unit/isolated test of application (not entire epplication)
//HINT -> in testing isolated unit of application we dont render all REACT sub tree