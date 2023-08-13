import {
  createStyles,
  Image,
  Container,
  Text,
  Code,
  ThemeIcon,
  Paper,
  rem,
} from "@mantine/core";

import { IconUserCircle } from "@tabler/icons-react";
import image from "../assets/csk.svg";
import Title from "./Title";
import { memo } from "react";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    display: "flex",
    flexDirection: "column",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    fontSize: "1rem",
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
  introductionText: {
    fontWeight: 500,
    color: "#d1d5db",
  },

  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.violet[6],
        theme.colors.violet[6]
      ),
    },
  },
}));

export const About = memo(function About({ aboutSectionScroll }) {
  const { classes } = useStyles();
  return (
    <div ref={aboutSectionScroll}>
      <Container style={{ paddingTop: "2rem" }}>
        <Title
          title={"About"}
          desc={
            "Every once in a while, you’ll see a Golbat that’s missing some fangs.This happens when hunger drives it to try biting a Steel-type Pokémon."
          }
        />
        <div className={classes.inner}>
          <div className={classes.content}>
            <CardGradient />
          </div>
          <Image src={image} className={classes.image} />
        </div>
      </Container>
    </div>
  );
});

function CardGradient() {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon size="xl" radius="md" color="violet">
        <IconUserCircle size={rem(28)} stroke={1.5} />
      </ThemeIcon>
      <Text size="xl" weight={500} mt="md">
        About Me
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        Lorem ipsum dolor sit amet,<Code>Frontend Developer</Code> consectetur
        adipisicing elit. Nemo, aperiam rem id architecto sed vero quidem
        possimus ut commodi aliquam tenetur delectus minima deserunt quasi?
        Ipsum possimus ex velit quae! Quisquam odio similique nisi officia atque
        quos cumque, tempore animi iusto, delectus in? Fuga in ducimus
        laudantium laborum eos ipsum voluptates voluptatum nulla delectus? Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Dicta, suscipit
        iure! Odio dolorum, ea laborum numquam assumenda sequi ratione,
        accusantium odit ipsam neque laboriosam nisi natus! Tempore iure enim
        soluta.
      </Text>
    </Paper>
  );
}
