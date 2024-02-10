export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Calamity Robotics",
	description: "Calamity Robotics is an FTC team from Park City, Utah.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Robot",
      href: "/robot",
    },
    {
      label: "About",
      href: "/about",
    },
	{
		label: "Contact",
		href: "/contact",
  	},
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Robot",
      href: "/robot",
    },
    {
      label: "About",
      href: "/about",
    },
	{
		label: "Contact",
		href: "/contact",
  	},
	],
	links: {
		github: "https://github.com/CalamityRobotics",
		insta: "https://instagram.com/calamity.8280",
	},
};
