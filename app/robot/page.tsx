import { title } from "@/components/primitives";
import { Card, CardFooter, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Code } from "@nextui-org/code";
import { useEffect } from "react"

export default function RobotPage() {

	return (
		<div className="m-5">
			<Card className="p-5">
				<CardBody>
					<img src="Robot.png" alt="robot"></img>
				</CardBody>
				<CardFooter className="flex flex-col gap-4 align-center justify-center">
					<h1 className={title({ color: "pink" }) + " tracking-widest"}>ZIMA</h1>
					<p>
						Zima is our robot! He is the product of hours of our work! He can 
						<div>
						<Code className="m-2" color="danger">lift/place pixels on the board</Code><Code className="m-2" color="success">shoot a paper airplane</Code><Code className="m-2" color="danger">hang off the trusses</Code><Code className="m-2" color="success">push pixels</Code>
						</div>
						<Chip className="p-5 m-2"><Chip className="m-2" size="sm" variant="flat" color="success">This feature works!</Chip><Chip size="sm" className="m-2" variant="flat" color="danger">We&apos;re still working on this.</Chip></Chip>
						<hr className="m-2"/>
						 During our HHS comp, our lift/place arm didn&apos;t work and we had to convert him to a push-bot, but it worked great considering the wide body the robot has. 
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
