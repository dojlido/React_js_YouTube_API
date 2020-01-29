import * as actionTypes from '../actionsCreators/actionTypes';
import orderReducer from './order';

describe('order reducer', () => {
    it('should return initial state', function () {
        expect(orderReducer(undefined,{})).toEqual( { //params for orderReducer(undefined when app is initializing and {} -> no specyfic action)
            orders: [],
            loading: false,
            purchased: false
        });
    });
});





