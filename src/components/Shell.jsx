import { AppShell } from "@mantine/core";
import { NavbarSimple as Navbar } from "./SideNav";
import { HeaderMiddle as Header } from "./Header";
import { useDisclosure } from "@mantine/hooks";
import { HeroTitle as HeroSection } from "./HeroSection";
import { About } from "./About";

const links = [
  {
    link: "/about",
    label: "Home",
  },
  {
    link: "/learn",
    label: "Features",
  },
  {
    link: "/pricing",
    label: "Pricing",
  },
];

export default function TheShell() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell style={{margin:'0 !important'}}
      navbar={<Navbar opened={opened} toggle={toggle} />}
      header={<Header links={links} opened={opened} toggle={toggle} />}
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
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '0rem'
        },
      })}
    >
      <HeroSection />
      <About/>
    </AppShell>
  );
}
