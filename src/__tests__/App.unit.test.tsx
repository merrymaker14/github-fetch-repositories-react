import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('>>>A P P --- Shallow Render REACT COMPONENTS', () => {
    let wrapper: any;

    beforeEach(()=>{
        wrapper = shallow(<Provider store={store}><App /></Provider>)
    })

    it('+++ render App component', () => {
       expect(wrapper.length).toEqual(1)
    });
      
    it('+++ contains h1', () => {
        expect(wrapper.find('h1').length).toBe(1); // 0, why?
    });
});