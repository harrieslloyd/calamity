import { title } from "@/components/primitives";
import { Card, CardFooter, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Code } from "@nextui-org/code";
import Link from "next/link";
import { useEffect } from "react"

export default function AboutPage() {
	return (
		<div>
			<Card className="p-5 w-[75vw] md:w-auto">
				<CardBody>
					<img src="./working.JPG" className="rounded" alt="team"></img>
				</CardBody>
				<CardFooter className="flex flex-col gap-4 align-center justify-center">
					<h1 className={title({ color: "cyan" }) + " tracking-widest"}>CONTACT</h1>
						<div>
							<Code className="m-2 text-2xs md:text-base" color="success"><Link href={"mailto:team@calamityrobotics.com"}>team@calamityrobotics.com</Link></Code>
							<hr className="m-2"/>
							<Code className="m-2 text-2xs md:text-base" color="secondary"><Link href={"mailto:gavin@calamityrobotics.com"}>gavin@calamityrobotics.com</Link></Code>
							<Code className="m-2 text-2xs md:text-base" color="secondary"><Link href={"mailto:corey@calamityrobotics.com"}>corey@calamityrobotics.com</Link></Code>
							<Code className="m-2 text-2xs md:text-base" color="secondary"><Link href={"mailto:dante@calamityrobotics.com"}>dante@calamityrobotics.com</Link></Code>
							<Code className="m-2 text-2xs md:text-base" color="secondary"><Link href={"mailto:harries@calamityrobotics.com"}>harries@calamityrobotics.com</Link></Code>
						</div>
				</CardFooter>
			</Card>
		</div>
	);
}
