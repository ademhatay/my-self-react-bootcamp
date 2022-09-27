import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './index';


describe('Todo Testleri', () => {
    let button, input;

    beforeEach(() => {
        render(<Todo/>);
        button = screen.getByText('Add Todo');
        input = screen.getByLabelText('Text')
    });

    test('Varsayılan Olarak verilen 3 nesne render edilmeli', () => {
       const items = screen.getAllByText(/Item/i);
       expect(items.length).toEqual(3);
    });

    test('Input ve Buton dökümanda olmalı', () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test('Inputa yazılan değer butona tıklandığında listeye eklenmeli', () => {
        const value = 'Yeni Todo';
        userEvent.type(input, value);
        userEvent.click(button);
        const item = screen.getByText(value);
        expect(item).toBeInTheDocument();
    });
});