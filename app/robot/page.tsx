import { title, subtitle } from "@/components/primitives";
import { Card, CardFooter, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Code } from "@nextui-org/code";
import { useEffect } from "react"

export default function RobotPage() {

	return (
		<div className="m-5">
			<Card className="p-2 md:p-5 w-[75vw] md:w-auto">
				<CardBody>
					<img src="Robot.png" alt="robot"></img>
				</CardBody>
				<CardFooter className="flex flex-col gap-4 align-center justify-center">
					<h1 className={title({ color: "pink" }) + " tracking-widest"}>ZIMA</h1>
					<h2 className={subtitle({ class: "mt-4"} )}>2023-2024</h2>
					<div>
						Zima is our robot! He is the product of hours of our work! He can <Code className="m-1" color="success">lift & place pixels,</Code> <Code className="m-1" color="success">push pixels,</Code> and <Code className="m-1" color="success">launch a paper airplane.</Code> His auton mode can place both the 2 initial pixels and a secondary set on the backboard. 
						<hr className="m-2" />
						During our HHS comp, our lift/place arm didn&apos;t work and we had to convert him to a push-bot, but it worked great considering the wide body the robot has. 
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
