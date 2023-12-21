import './App.css';
import QuickLinkButton from './QuickLinkButton';

const dummy_links = [
	{
		title: 'Link 1',
		link: 'www.google.com',
	},
	{
		title: 'Link 2',
		link: 'www.google.com',
	},
	{
		title: 'Link 3',
		link: 'www.google.com',
	},
	{
		title: 'Link 4',
		link: 'www.google.com',
	},
	{
		title: 'Link 5',
		link: 'www.google.com',
	},
];
function App() {
	return (
		<div className="w-full h-full">
			<QuickLinkButton
				title={'Quick links'}
				linkList={dummy_links}
				onLinkClick={(link) => {
					console.log(link);
				}}
			/>
		</div>
	);
}

export default App;
