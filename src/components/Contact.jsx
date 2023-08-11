import {
  createStyles,
  ThemeIcon,
  Text,
  SimpleGrid,
  Box,
  Stack,
} from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react";

const useStyles = createStyles((theme, { variant }) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === "gradient"
        ? `linear-gradient(135deg, ${theme.purple} 0%, ${
            theme.pink
          } 100%)`
        : "none",
    backgroundColor: "transparent",
  },

  title: {
    color:
      variant === "gradient"
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === "gradient" ? theme.black : theme.white,
  },
}));

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  ...others
}) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size="1.5rem" />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size="1.5rem" />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>
          {title === "Email" ? (
            <a
              href="mailto:sauravmeghwal11@gmail.com"
              style={{
                color: "#F8F9FA",
              }}
            >
              {description}
            </a>
          ) : (
            description
          )}
        </Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Email", description: "sauravmeghwal11@gmail.com", icon: IconAt },
  { title: "Phone", description: "+91 8949262353", icon: IconPhone },
  { title: "Address", description: "Kota, Rajasthan, India", icon: IconMapPin },
  { title: "Staus", description: "Open for roles", icon: IconSun },
];

export function ContactIconsList({ data = MOCKDATA, variant }) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

export function ContactIcons() {
  return (
    <SimpleGrid
      style={{
        maxWidth: "60rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      cols={1}
      breakpoints={[{ maxWidth: 755, cols: 1 }]}
    >
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
            background:theme.colors.violet[6],
        })}
      >
        <ContactIconsList variant="white" />
      </Box>
    </SimpleGrid>
  );
}
