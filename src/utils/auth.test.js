import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Firebase from './firebase';
import { authMock } from './setupTests';
import { signOut } from '../utils/auth';
// @ts-ignore
Firebase.auth = authMock;

describe('<HomeScreen />', () => {
    afterEach(cleanup);

    it('calls Firebase signOut on click', async () => {
        const SignOutButton = (await import('./SignOutButton')).default;
        const { getByText } = render(<SignOutButton />);
        const button = getByText('Logout');
        fireEvent.click(button);
        expect(signOut).toHaveBeenCalled();
    });
});
