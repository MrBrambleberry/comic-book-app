import React from "react";
import { render, screen, act } from "@testing-library/react";
import * as axios from 'axios';
import { CharacterList } from './CharacterList'

jest.mock('axios');

describe('CharacterList', () => {
    const renderPage = async () => await render(<CharacterList />);

    const mockFetchCharacters = results => {
        axios.get.mockImplementation(() => Promise.resolve({
            data:
            {
                data: {
                    results: results
                }
            }
        }));
    }

    it('renders a single image from the remote API call', async () => {
        mockFetchCharacters([
            {
                name: 'Frylock',
                thumbnail: {
                    path: 'http://www.someremoteresource.com/images/abc',
                    extension: 'jpg'
                }
            }
        ]);

        await act(async () => {
            await renderPage();
        });

        expect(screen.getByAltText('Frylock')).toHaveAttribute('src', 'http://www.someremoteresource.com/images/abc/portrait_uncanny.jpg');
    })
})