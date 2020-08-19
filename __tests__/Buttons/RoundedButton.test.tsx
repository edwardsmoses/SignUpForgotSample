import { render, cleanup } from 'react-native-testing-library';

import React from 'react';
import { Text } from 'react-native';

import RoundedButton from '../../src/components/Buttons/RoundedButton';

afterEach(cleanup);

describe('<RoundedButton />', () => {
    it('should match snapshot', () => {
        const rendered = render(
            <RoundedButton
                onPress={() => {
                    return {};
                }}
                children={<Text>{'-'}</Text>}
            />,
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });
});
