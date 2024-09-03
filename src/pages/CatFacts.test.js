import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CatFacts from './CatFacts';

const mock = new MockAdapter(axios);

fdescribe('CatFacts Component', () => {
    afterEach(() => {
        mock.reset();
    });

    test('renders component and displays elements correctly', () => {
        render(<CatFacts />);

        expect(screen.getByText(/Random Cat Facts/i)).toBeInTheDocument();
        expect(screen.getByText(/Generate Cat Fact/i)).toBeInTheDocument();
    });

    test('displays loading state while fetching data', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ data: ['Cats have five toes on their front paws and four on the back paws.'] })
            })
        );

        render(<CatFacts />);

        fireEvent.click(screen.getByText(/Generate Cat Fact/i));

        expect(screen.getByText(/Loading cat facts.../i)).toBeInTheDocument();
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    test('fetches and displays cat facts and image', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ data: ['Cats have five toes on their front paws and four on the back paws.'] })
            })
        );
        mock.onPost(process.env.REACT_APP_IMAGE_GENERATOR_URL).reply(200, { output: ['https://example.com/cat.jpg'] });


        render(<CatFacts />);

        fireEvent.click(screen.getByText(/Generate Cat Fact/i));

        await waitFor(() => expect(screen.getByText(/Cats have five toes on their front paws and four on the back paws./i)).toBeInTheDocument());
        await waitFor(() => expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/cat.jpg'));
    });

    // TODO - fix
    // test('handles errors during fetch and image generation', async () => {
    //     global.fetch = jest.fn(() =>
    //         Promise.reject(new Error('Failed to fetch'))
    //     );
    //     mock.onPost(process.env.REACT_APP_IMAGE_GENERATOR_URL).reply(500);


    //     render(<CatFacts />);

    //     fireEvent.click(screen.getByText(/Generate Cat Fact/i));

    //     await waitFor(() => expect(screen.getByText(/Failed to generate image./i)).toBeInTheDocument());
    // });
});
