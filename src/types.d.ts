declare module "*.jsx" {
  const Component: any;
  export default Component;
}

declare module "@/components/layout/Layout" {
  const Layout: any;
  export default Layout;
}

declare module "@/pages/About" {
  const AboutPage: any;
  export default AboutPage;
}

declare module "@/pages/Contact" {
  const ContactPage: any;
  export default ContactPage;
}

declare module "@/pages/Home" {
  const HomePage: any;
  export default HomePage;
}

declare module "@/pages/Projects" {
  const ProjectsPage: any;
  export default ProjectsPage;
}

declare module "@/pages/Services" {
  const ServicesPage: any;
  export default ServicesPage;
}

declare module "@/pages/Team" {
  const TeamPage: any;
  export default TeamPage;
}

declare module "@/context/ThemeContext" {
  import type { ReactNode } from "react";

  export function ThemeProvider(props: { children: ReactNode }): JSX.Element;
  export function useTheme(): {
    theme: "light" | "dark";
    toggleTheme: () => void;
  };
}
