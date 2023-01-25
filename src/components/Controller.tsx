import { useEffect, useState } from "react";

type Props = {};

export const Controller = (props: Props) => {
	const [number, setNumber] = useState(0);
	const [trivia, setTrivia] = useState("");

	useEffect(() => {
		fetch(`http://numbersapi.com/${number}`)
			.then((response) => response.text())
			.then((triviaFull) => {
				setTrivia(triviaFull.slice(5));
			});
	}, [number]);
	return (
		<div>
			<h1>{number}</h1>
			<button onClick={() => setNumber(number + 1)}>+</button>
			<button
				disabled={number >= 1 ? false : true}
				onClick={() => setNumber(number - 1)}
			>
				-
			</button>
			<div>{trivia}</div>
		</div>
	);
};
