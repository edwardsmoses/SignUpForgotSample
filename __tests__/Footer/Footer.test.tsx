import { render, cleanup } from 'react-native-testing-library';
import React from 'react';
import Footer from '../../src/components/Footer/Footer';

afterEach(cleanup);

describe('<Footer />', () => {
    it('should match snapshot', () => {
        const rendered = render(
            <Footer
                onPress={() => {
                    return {};
                }}
                content="Already have an account?"
            />,
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });
});
