import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from './BuildControlls';


configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
    let wrapper;
    beforeEach(() => { //beforeEach it trigger before all test scenario
         wrapper = shallow( <BurgerBuilder initialIngriedient={() => {}}  />); //shallow function takes JSX as param && have initialIngriedient because of  componentDidMount definded in <BurgerBuilder />
    });

    it(
        'should render <BuildControls /> when receiving ingredients',
        () => {
            wrapper.setProps({ingredientsMapStateToProps: {salad: 0}}); // BuildControls should render only when ingrients object isExist
            expect(wrapper.find(BuildControls))
                .toHaveLength(1);
      });
});