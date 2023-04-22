import { screen, render, fireEvent } from '@testing-library/react';
import CreateNotesForm from '../CreateNotes';

const mockedFn = jest.fn();
describe('Add notes form', () => {
	it('should render the input feilds', () => {
		render(<CreateNotesForm notes={[]} setNotes={mockedFn} />);
		const targetElementTitle = screen.getByPlaceholderText(/Enter title/i);
		const targetElementText = screen.getByPlaceholderText(/Enter text/i);
		const targetElementColor = screen.getByPlaceholderText(
			'Choose background color'
		);
		expect(targetElementTitle).toBeInTheDocument();
		expect(targetElementText).toBeInTheDocument();
		expect(targetElementColor).toBeInTheDocument();
	});

	it('form should and have the corret input values', () => {
		render(<CreateNotesForm notes={[]} setNotes={mockedFn} />);
		const targetElementTitle = screen.getByPlaceholderText(
			'Enter title'
		) as HTMLInputElement;
		const targetElementText = screen.getByPlaceholderText(
			'Enter text'
		) as HTMLInputElement;
		const targetElementColor = screen.getByPlaceholderText(
			'Choose background color'
		) as HTMLInputElement;
		fireEvent.change(targetElementTitle, {
			target: { value: 'Testing the title feild' },
		});
		expect(targetElementTitle.value).toBe('Testing the title feild');

		fireEvent.change(targetElementText, {
			target: { value: 'Testing the text feild' },
		});
		expect(targetElementText.value).toBe('Testing the text feild');

		fireEvent.change(targetElementColor, {
			target: { value: '#000000' },
		});
		expect(targetElementColor.value).toBe('#000000');
		const targetElementBtn = screen.getByRole('button', {
			name: /submit/i,
		});
		fireEvent.click(targetElementBtn);

		expect(targetElementTitle.value).toBe('');
		expect(targetElementText.value).toBe('');
		expect(targetElementColor.value).not.toBe('');
		// Check if form submitted with correct values
	});
});
