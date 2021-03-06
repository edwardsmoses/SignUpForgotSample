import { render, cleanup } from 'react-native-testing-library';
import React from 'react';
import Button from '../../src/components/Buttons/Button';

afterEach(cleanup);

describe('<Button />', () => {
    it('should match snapshot', () => {
        const rendered = render(
            <Button
                onPress={() => {
                    return {};
                }}
                title="Sign Up"
            />,
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });
});
