import { screen, render, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('should test the note card visibilty after submit the note', () => {
	it('should render the note card in the screen after from submit', () => {
		render(<App />);
		const targetElementTitle = screen.getByPlaceholderText(
			'Enter title'
		) as HTMLInputElement;
		const targetElementText = screen.getByPlaceholderText(
			'Enter text'
		) as HTMLInputElement;
		const targetElementColor = screen.getByPlaceholderText(
			'Choose background color'
		) as HTMLInputElement;
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		fireEvent.change(targetElementTitle, {
			target: { value: 'Testing the title feild' },
		});

		fireEvent.change(targetElementText, {
			target: { value: 'Testing the text feild' },
		});

		fireEvent.change(targetElementColor, {
			target: { value: '#000000' },
		});

		fireEvent.click(submitBtn);
		const title = screen.getByText(/Testing the title feild/i);
		const text = screen.getByText(/Testing the text feild/i);
		expect(title).toBeInTheDocument();
		expect(text).toBeInTheDocument();
	});
});
