import React from 'react'
import { shallow } from 'enzyme'
import App from '../components/App'

describe('>>>A P P --- Shallow Render REACT COMPONENTS', () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<App />)
    })

    it('+++ render App component', () => {
       expect(wrapper.length).toEqual(1)
    });
      
    it('+++ contains h1', () => {
        expect(wrapper.find('.main-title')[0].toEqual('Search in repositories GitHub'))
    });
});