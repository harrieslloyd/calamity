import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center align-center justify-center w-full h-[90vh] gap-4 py-8 md:py-10">
			<Card className="p-5">
					<CardHeader className="inline-block max-w-lg text-center justify-center">
						<h1 className={title({ color: "violet" })}>Calamity 8280</h1>
						<h2 className={subtitle({ class: "mt-4" })}>
							FTC team from Park City, Utah
						</h2>
					</CardHeader>
				<CardBody className="flex flex-row gap-3 justify-center align-center">
					<Link
						href='/robot'
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
						<i className="fa-solid fa-robot"></i>
						Our Robot
					</Link>
					<Link
						href='/about'
						className={buttonStyles({ color: "success", variant: "bordered", radius: "full" })}
					>
						<i className="fa-solid fa-users"></i>
						About Us
					</Link>
					<Link
						href='/contact'
						className={buttonStyles({ color: "warning", variant: "bordered", radius: "full" })}
					>
						<i className="fa-solid fa-envelope"></i>
						Contact
					</Link>
				</CardBody>
			</Card>

		</section>
	);
}
