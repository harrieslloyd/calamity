"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { delay } from "framer-motion";


export default function Home() {
	useGSAP(() => {
		var tl1 = gsap.timeline({repeat: -1})
		var tl2 = gsap.timeline({repeat: -1})
		var w1 = document.getElementById("bg1")?.offsetWidth
		var w2 = document.getElementById("bg2")?.offsetWidth
		tl1.set("#bg1", {x:0})
		tl2.set("#bg2", {x: w1})
		tl1.to("#bg1", {x:-w1, duration: 40, ease:"none"})
		tl2.to("#bg2", {x:0, duration: 40, ease:"none"})
		console.log(window.innerWidth)
		console.log(w1)
	})
	return (
		<section className="flex flex-col items-center align-center justify-center w-full h-[90vh] gap-4 py-8 md:py-10">
				<img className="absolute left-0 top-0 h-screen w-auto m-0 max-w-[100000%] opacity-50 block" src="CollageBig.png" alt="a collage" id="bg1"/>
				<img className="absolute left-0 top-0 h-screen w-auto m-0 max-w-[100000%] opacity-50 block" src="CollageBig.png" alt="a collage" id="bg2"/>
			<Card className="p-5 w-[70vw] md:w-auto">
					<CardHeader className="inline-block max-w-lg text-center justify-center">
						<h1 className={title({ color: "violet" })}>Calamity 8280</h1>
						<h2 className={subtitle({ class: "mt-4" })}>
							FTC team from Park City, Utah
						</h2>
					</CardHeader>
				<CardBody className="flex flex-col md:flex-row gap-3 justify-center align-center">
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
