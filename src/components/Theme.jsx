import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export default function SwitchTheme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
           `${theme.colors.violet[6]}1a`,
          color:
            theme.colorScheme === "dark"
              ? theme.colors.violet[6]
              : theme.colors.violet[6],
        })}
      >
        {colorScheme === "dark" ? (
          <IconSun size="1.2rem" />
        ) : (
          <IconMoonStars size="1.2rem" />
        )}
      </ActionIcon>
    </Group>
  );
}
