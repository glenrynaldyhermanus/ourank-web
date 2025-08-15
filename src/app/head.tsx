import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ourank - Platform Management Orang",
	description: "Platform modern untuk management orang dan talent acquisition",
};

export default function Head() {
	return (
		<>
			<title>Ourank - Platform Management Orang</title>
			<meta
				name="description"
				content="Platform modern untuk management orang dan talent acquisition"
			/>
		</>
	);
}
