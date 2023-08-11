import { AppShell } from "@mantine/core";
import { NavbarSimple as Navbar } from "./SideNav";
import { HeaderMiddle as Header } from "./Header";
import { useDisclosure } from "@mantine/hooks";
import { HeroTitle as HeroSection } from "./HeroSection";
import { About } from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import { memo, useRef } from "react";
import { ContactIcons } from "./Contact";
import { FooterSocial } from "./Footer";

const links = [
  {
    link: "/home",
    label: "Home",
    scroll: "homeSectionScroll",
  },
  {
    link: "/about",
    label: "About",
    scroll: "aboutSectionScroll",
  },
  {
    link: "/skills",
    label: "Skills",
    scroll: "skillsSectionScroll",
  },
  {
    link: "/projects",
    label: "Projects",
    scroll: "projectsSectionScroll",
  },
  {
    link: "/contact",
    label: "Contact",
    scroll: 'projectsSectionScroll'
  },
];

function TheShell() {
  const [opened, { toggle }] = useDisclosure(false);

  const homeSectionScroll = useRef(null);
  const aboutSectionScroll = useRef(null);
  const skillsSectionScroll = useRef(null);
  const projectsSectionScroll = useRef(null);
  // const homeSectionScroll = useRef(null); // Later

  const scrolls = {
    homeSectionScroll,
    aboutSectionScroll,
    skillsSectionScroll,
    projectsSectionScroll,
  };

  return (
    <AppShell
      style={{
        margin: "0 !important",
      }}
      navbar={<Navbar opened={opened} toggle={toggle} scrolls={scrolls} />}
      header={
        <Header
          links={links}
          opened={opened}
          toggle={toggle}
          scrolls={scrolls}
        />
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          webkitFlex: 1,
          msFlex: 1,
          flex: 1,
          width: "100vw",
          boxZizing: "border-box",
          minHeight: "100vh",
          paddingLeft: "0",
          paddingRight: "0",
          paddingTop: "0rem",
        },
      })}
    >
      <HeroSection homeSectionScroll={homeSectionScroll} />
      <About aboutSectionScroll={aboutSectionScroll} />
      <Skills skillsSectionScroll={skillsSectionScroll} />
      <Projects projectsSectionScroll={projectsSectionScroll} />
      <ContactIcons/>
      <FooterSocial/>
    </AppShell>
  );
}
export default memo(TheShell);
