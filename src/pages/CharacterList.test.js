import React from "react";
import { render, screen } from "@testing-library/react";
import * as axios from 'axios';
import { CharacterList } from './CharacterList'

jest.mock('axios');

describe('CharacterList', () => {
    const renderPage = async () => render(<CharacterList />);

    it('renders a single image from the remote API call', async () => {
        // TODO: Resolve act() error
        axios.get.mockImplementation(() => Promise.resolve({
            data:
            {
                data: {
                    results: [
                        {
                            thumbnail: {
                                path: 'http://www.someremoteresource.com/images/abc',
                                extension: 'jpg'
                            }
                        }]
                }
            }
        }));

        await renderPage();
        expect(screen.getByAltText('altText')).toHaveAttribute('src', 'http://www.someremoteresource.com/images/abc/portrait_uncanny.jpg');

    })
})