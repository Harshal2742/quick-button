import { Button, ListItem, UnorderedList } from 'carbon-components-react';
import { ChevronUp, ChevronDown } from '@carbon/icons-react';
import { useState } from 'react';

type QuickLinkButtonProps = {
	title: string;
	linkList: {
		title: string;
		link: string;
	}[];
	onLinkClick?: (link: string) => void;
};

const QuickLinkButton = ({
	title,
	linkList,
	onLinkClick,
}: QuickLinkButtonProps) => {
	const [showLinks, toggleShowLinks] = useState(false);
	return (
		<div className="bg-stone-900 w-64 text-white">
			<Button
				className="p-3 w-full flex items-center"
				onClick={() => toggleShowLinks((prev) => !prev)}
			>
				<p className="text-left mr-auto">{title}</p>
				{showLinks ? <ChevronUp /> : <ChevronDown />}
			</Button>
			{showLinks && (
				<UnorderedList className="border-t-[1px] border-stone-700">
					{linkList.map((linkItem, index) => (
						<ListItem
							className="text-left hover:bg-stone-700 cursor-pointer px-4"
							key={index}
							onClick={() => {
								toggleShowLinks(false);
								onLinkClick?.(linkItem.link);
							}}
						>
							<p
								className={`${
									index + 1 !== linkList.length
										? 'border-b-[1px] border-stone-700'
										: ''
								} py-3`}
							>
								{linkItem.title}
							</p>
						</ListItem>
					))}
				</UnorderedList>
			)}
		</div>
	);
};

export default QuickLinkButton;
