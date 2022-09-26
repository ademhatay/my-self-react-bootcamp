import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './index';

describe('Counter', () => {

    let increaseButton, decreaseButton, count;

    beforeEach(() => {
        console.log("Her Testten önce çalışır");
        render(<Counter/>);
        increaseButton = screen.getByText("Increase");
        decreaseButton = screen.getByText("Decrease");
        count = screen.getByText("0");
    })

    beforeAll(() => {
        console.log("Sadece bir kere çalışır");
    });

    // After All, after Each

    afterEach(() => {
        console.log("Her testten sonra çalışır");
    })

    test("increase button increases count", () => {
      userEvent.click(increaseButton);
        expect(count).toHaveTextContent("1");
    });

    test("decrease button decreases count", () => {
        userEvent.click(decreaseButton);
            expect(count).toHaveTextContent("-1");
    });
})

