import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  rem,
} from "@mantine/core";
import image1 from "../assets/project-1.png";
import image2 from "../assets/project-1.png";
import image3 from "../assets/project-1.png";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "4rem",
    flexWrap: "wrap",

    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(450),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(24),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    // flex: 1,

    [theme.fn.smallerThan("md")]: {},
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
  desc: {
    lineHeight: "25px",
    fontWeight: 400,
  },
}));

const projectsData = [
  {
    title: "100,000 Recipes",
    description:
      "Discover the art of web development through my recipe website. With a sleek interface, bookmarking functionality, and recipe submission feature, it exemplifies my expertise in front-end technologies.",
    image: image1,
  },
  {
    title: "Mapty",
    description:
      "Mapty, my dynamic fitness companion that leverages Leaflet.js and geolocation to help you plan and track your workouts.",
    image: image2,
  },
  {
    title: "Bankist",
    description:
      "A Brand new marketing website for the E-Bank, it is a very dynamic with soft animations for the leaving a great impression, achieved by the javascript",
    image: image3,
  },
];

export default function Projects({ projectsSectionScroll }) {
  const { classes } = useStyles();
  return (
    <div ref={projectsSectionScroll}>
      <Container>
        <ProjectTitle classes={classes} />
        <div className={classes.inner}>
          {projectsData.map((data) => (
            <>
              <ProjectSection data={data} key={data.title} classes={classes} />
            </>
          ))}
        </div>
      </Container>
    </div>
  );
}

function ProjectTitle({ classes }) {
  return (
    <>
      {" "}
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text>
    </>
  );
}
function ProjectSection({ data, classes }) {
  return (
    <>
      <Image src={data.image} className={classes.image} />
      <div className={classes.content}>
        <Title className={classes.title}>
          <span className={classes.highlight}>{data.title}</span>
        </Title>
        <Text color="dimmed" mt="md" className={classes.desc} size={"lg"}>
          {data.description}
        </Text>

        <Group mt={30}>
          <Button radius="xl" size="md" className={classes.control}>
            Get started
          </Button>
          <Button
            variant="default"
            radius="xl"
            size="md"
            className={classes.control}
          >
            Source code
          </Button>
        </Group>
      </div>
    </>
  );
}
