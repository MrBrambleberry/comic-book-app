import React from "react";
import { render, screen, act } from "@testing-library/react";
import * as axios from 'axios';
import { CharacterList } from './CharacterList'

jest.mock('axios');

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

describe('CharacterList', () => {
    const frylock = {
        name: 'Frylock',
        thumbnail: {
            path: 'http://www.someremoteresource.com/images/abc',
            extension: 'jpg'
        }
    };

    const masterShake = {
        name: 'MasterShake',
        thumbnail: {
            path: 'http://www.anotherrmoteresource.com/images/xyz',
            extension: 'png'
        }
    };

    const meatwad = {
        name: 'Meatwad',
        thumbnail: {
            path: 'http://www.someremoteresource.com/images/123',
            extension: 'png'
        }
    };

    it('Renders every image from a collection', async () => {
        mockFetchCharacters([frylock, masterShake, meatwad]);

        await act(async () => {
            await renderPage();
        });

        expect(screen.getByAltText(frylock.name)).toHaveAttribute('src', 'http://www.someremoteresource.com/images/abc/portrait_uncanny.jpg');
        expect(screen.getByAltText(masterShake.name)).toHaveAttribute('src', 'http://www.anotherrmoteresource.com/images/xyz/portrait_uncanny.png');
        expect(screen.getByAltText(meatwad.name)).toHaveAttribute('src', 'http://www.someremoteresource.com/images/123/portrait_uncanny.png');
    })
})
