import {
  ThemeIcon,
  Text,
  Container,
  SimpleGrid,
  createStyles,
  rem,
} from "@mantine/core";
import {
  IconBrandReact,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandRedux,
  IconBrandCss3,
  IconBrandMantine,
  IconBrandTailwind,
} from "@tabler/icons-react";
import Title from "./Title";

export const MOCKDATA = [
  {
    icon: IconBrandReact,
    title: "ReactJs",
    color: "#61DAFB",
  },
  {
    icon: IconBrandJavascript,
    title: "JavaScript",
    color: "#F7DF1E",
  },
  {
    icon: IconBrandHtml5,
    title: "HTML5",
    color: "#E34F26",
  },
  {
    icon: IconBrandCss3,
    title: "CSS3",
    color: "#1572B6",
  },
  {
    icon: IconBrandRedux,
    title: "Redux",
    color: "#764ABC",
  },
  {
    icon: IconBrandMantine,
    title: "MantineUI",
    color: "#ffd43b",
  },
  {
    icon: IconBrandTailwind,
    title: "Tailwindcss",
    color: "#0ff",
  },
];

export function Feature({ icon: Icon, title, color }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ThemeIcon
        variant="light"
        size={40 * 2}
        radius={40 * 2}
        bg={`${color}1a`}
      >
        <Icon size="2.1rem" stroke={1.5} color={color} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(28),
      textAlign: "center",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
}));

export default function Skills({ data = MOCKDATA, skillsSectionScroll }) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper} ref={skillsSectionScroll}>
      <Title
        title={"Skills"}
        desc={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nostrum, quisquam illo ex esse ea veniam"
        }
      />
      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 4 },
          { maxWidth: 755, cols: 4 },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
