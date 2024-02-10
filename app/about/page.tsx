import { title } from "@/components/primitives";
import { Card, CardFooter, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Code } from "@nextui-org/code";
import { useEffect } from "react"

export default function AboutPage() {
	return (
		<div>
			<Card className="p-5">
				<CardBody>
					<img src="team.jpg" className="rounded" alt="team"></img>
				</CardBody>
				<CardFooter className="flex flex-col gap-4 align-center justify-center">
					<h1 className={title({ color: "green" }) + " tracking-widest"}>ABOUT</h1>
					<p>
						We are Calamity Robotics, from Park City Utah. Our Team Consists of 4 members -  
						<div>
						<Code className="m-2" color="secondary">Gavin</Code>
						<Code className="m-2" color="secondary">Corey</Code>
						<Code className="m-2" color="secondary">Dante</Code>
						<Code className="m-2" color="secondary">Harries</Code>
						</div>
						<hr className="m-2"/>
						In the early robotics season of 2021, Gavin, Dante, and two others started the team that will later be known as 8280 Calamity. While these four knew they were tech enthusiasts, they weren’t so confident in the first year - hence the name “Calamity”. That year, the rookie team went on to rank very high in the local Utah State Competition. 

						It became clear that Calamity had hidden talent for making robots, making it to States in the 22/23 season as well. With three years of experience, Calamity has showed extreme improvement. From being mentored by helpful teams to mentoring, Calamity has showed determination to extend knowledge about technology.
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
