export default function RobotLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="h-fit w-screen flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg h-auto text-center justify-center">
				{children}
			</div>
		</section>
	);
}
