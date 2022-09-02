import React from "react";

export const BankNoteIco = ({color}) => {
    return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill={color}
		>
			<defs>
				<pattern
					id='pattern'
					preserveAspectRatio='xMidYMid slice'
					width='100%'
					height='100%'
					viewBox='0 0 128 128'>
					<image
						width='128'
						height='128'
						xlinkHref='data:image/png;base64,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'
					/>
				</pattern>
			</defs>
			<rect id='banknote' width='20' height='20' fill='url(#pattern)' />
		</svg>
	);
}

