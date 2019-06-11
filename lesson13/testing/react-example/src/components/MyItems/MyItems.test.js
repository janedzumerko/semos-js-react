import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import MyItem from '../MyItem/MyItem';
import MyItems from './MyItems';

configure({ adapter: new Adapter() });

describe('<Store /> component ', () => {
	it('should contain MyItem element two times', () => {
		const wrapper = shallow(<MyItems />);
		expect(wrapper.find(MyItem)).toHaveLength(2);
	});
});
