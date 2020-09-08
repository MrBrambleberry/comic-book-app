import React from "react";
import { render, screen } from "@testing-library/react";
import { CharacterThumbnail } from "./CharacterThumbnail";


describe('CharacterThumbnail', () => {
    const renderComponent = async (url, altText) => render(<CharacterThumbnail url={url} altText={altText} />)

    it('renders an image with the expected URL with a default altText', async () => {
        const url = 'www.somereource.com/image.png';

        await renderComponent(url);

        const thumbnail = screen.getByAltText('altText');
        expect(thumbnail).toHaveAttribute('src', url);
    });

    it('renders an image with the expected URL with a dynamic altText', async () => {
        const url = 'www.somereource.com/image.png';
        const altText = 'An image alternative text';

        await renderComponent(url, altText);

        const thumbnail = screen.getByAltText(altText);
        expect(thumbnail).toHaveAttribute('src', url);
    })

})