import {
  Container,
  Text,
  Title as TheTitle,
  createStyles,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",
    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
    },
  },
  highlight: { color: theme.colors.violet[6] },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
}));

function Title({ title, desc, size = "3rem" }) {
  const { classes } = useStyles();
  return (
    <>
      <TheTitle style={{ fontSize: size }} className={classes.title}>
        Section <span className={classes.highlight}>{title}</span>
      </TheTitle>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {desc}
        </Text>
      </Container>
    </>
  );
}

export default Title;
