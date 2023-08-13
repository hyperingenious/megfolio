import { useState } from "react";
import { createStyles, Navbar, getStylesRef, rem } from "@mantine/core";
import {
  IconWallpaper,
  IconCode,
  IconAddressBook,
  IconUserCircle,
  IconFiles,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  sideNav: {
    display: "none",
  },
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      color: theme.colors.violet[6],

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colors.violet[6],
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: `${theme.colors.violet[6]}1a`,
      color: theme.colors.violet[6],
      [`& .${getStylesRef("icon")}`]: {
        color: theme.colors.violet[6],
      },
    },
  },
}));

const data = [
  {
    scroll: "homeSectionScroll",
    link: "",
    label: "Home",
    icon: IconUserCircle,
  },
  {
    scroll: "aboutSectionScroll",
    link: "",
    label: "About",
    icon: IconWallpaper,
  },
  {
    scroll: "skillsSectionScroll",
    link: "",
    label: "Skills",
    icon: IconCode,
  },
  {
    scroll: "projectsSectionScroll",
    link: "",
    label: "Projects",
    icon: IconFiles,
  },
  {
    scroll: "projectsSectionScroll",
    link: "",
    label: "Contact",
    icon: IconAddressBook,
  },
];

export function NavbarSimple({ opened, toggle, scrolls }) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        toggle();
        setActive(item.label);
        scrolls[item.scroll].current.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar
      className={!opened ? classes.sideNav : ""}
      height={700}
      width={{ sm: 300 }}
      p="md"
    >
      <Navbar.Section grow>{links}</Navbar.Section>
    </Navbar>
  );
}
