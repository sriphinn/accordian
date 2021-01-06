import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './Accordian';
import { shallow } from 'enzyme'; 
import toJson from 'enzyme-to-json';

it("Accordian renders an empty li when sections prop supplied", () => {
    const div=document.createElement("div")
    ReactDOM.render(<Accordian />, div)
    ReactDOM.unmountComponentAtNode(div)
}) 

it ('renders empty given no tabs', () => {
    const wrapper = shallow(<Accordian />)
    expect (toJson(wrapper)).toMatchSnapshot()
})