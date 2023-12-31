import {
  createStyles,
  Container,
  Text,
  Group,
  rem,
  // BackgroundImage,
} from "@mantine/core";
import Button from "../ui/Button";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
  darkBg: {
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // backdropFilter: 'blur(10px)',
      backgroundColor: "rgba(0, 0, 0, 0.42)", // Adjust the alpha value for darkness
      zIndex: 0,
    },
  },
  inner: {
    position: "relative",
    paddingTop: rem(200),
    paddingBottom: rem(120),
    maxWidth: "60rem",

    [theme.fn.smallerThan("sm")]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(70.8),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(45),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(20),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan("sm")]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

export function HeroTitle({ homeSectionScroll }) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper} ref={homeSectionScroll}>
      {/* <BackgroundImage src={bgImage} className={classes.darkBg}> */}
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          I'm{" "}
          <Text
            component="span"
            // variant="gradient"
            color="violet"
            inherit
          >
            Saurav Meghwal
          </Text>
          , Frontend Developer
        </h1>

        <Text className={classes.description} color="dimmed">
          Build fully functional accessible web applications with ease
          in any situation
        </Text>

        <Group className={classes.controls}>
          <Button
            text="Show Projects"
            color={"violet"}
            variant={"filled"}
            size={"xl"}
            radius={"md"}
          />
          <Button
            color={"violet"}
            text="Résumé"
            variant={"outline"}
            size={"xl"}
            radius={"md"}
          />
        </Group>
      </Container>
      {/* </BackgroundImage> */}
    </div>
  );
}
