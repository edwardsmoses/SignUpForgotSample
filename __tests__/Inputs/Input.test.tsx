import { render, cleanup } from 'react-native-testing-library';
import React from 'react';
import Input from '../../src/components/Inputs/Input';

afterEach(cleanup);

describe('<Input />', () => {
    it('should match snapshot', () => {
        const rendered = render(
            <Input
                placeholder="Password"
                value=""
                autoFocus={true}
                isPasswordEntry={true}
            />,
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });
});
