import { render, screen } from '@testing-library/react';
import NotesList from '../NotesList';

test('should render the text my notes', () => {
	const staticNote = {
		id: new Date().toString() + 1,
		title: 'Ts With Reactjs Notes',
		text: 'Scheduled meeting for ts and react',
		color: 'rgb(197, 203, 206)',
		date: new Date().toString(),
	};
	render(<NotesList notes={[staticNote]} setNotes={() => {}} />);
	const testElement = screen.getByRole('heading', { name: 'My Notes' });
	expect(testElement).toBeInTheDocument();
});

test('should not render the heading my notes while no notes are available in dashboard', () => {
	render(<NotesList notes={[]} setNotes={() => {}} />);
	const testElement = screen.queryByRole('heading', { name: 'My Notes' });
	expect(testElement).not.toBeInTheDocument();
});
