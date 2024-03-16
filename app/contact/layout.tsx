import { Navbar } from "@/components/navbar";

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<body className="h-screen overflow-visible">
			<div className="relative flex h-screen flex-col">
				<Navbar />
				<main className="container h-screen mx-auto w-screen h-full pt-16 px-6 flex justify-center align-center">

					<section className="h-fit w-screen flex flex-col items-center justify-center gap-4 py-8 md:py-10">
						<div className="inline-block max-w-lg h-auto text-center justify-center">
							{children}
						</div>
					</section>
				</main>
			</div>
		</body>
	);
}
