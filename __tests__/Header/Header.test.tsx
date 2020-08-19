import { render, cleanup } from 'react-native-testing-library';
import React from 'react';
import Header from '../../src/components/Header/Header';

afterEach(cleanup);

describe('<Footer />', () => {
    it('should match snapshot', () => {
        const rendered = render(<Header title="Finish Signing Up" />).toJSON();

        expect(rendered).toMatchSnapshot();
    });
});
