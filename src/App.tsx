import './App.css';
import QuickLinkButton from './QuickLinkButton';

const dummy_links = [
	{
		title: 'Link 1',
		link: 'https://www.google.com/',
	},
	{
		title: 'Link 2',
		link: 'https://www.google.com/',
	},
	{
		title: 'Link 3',
		link: 'https://www.google.com/',
	},
	{
		title: 'Link 4',
		link: 'https://www.google.com/',
	},
	{
		title: 'Link 5',
		link: 'https://www.google.com/',
	},
];
function App() {
	return (
		<div className="w-full h-full">
			<QuickLinkButton
				title={'Quick links'}
				linkList={dummy_links}
				onLinkClick={(link) => {
					window.open(link, '_blank'); // For opening the link in new window
				}}
			/>
		</div>
	);
}

export default App;
