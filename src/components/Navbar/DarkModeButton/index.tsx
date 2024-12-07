import { IconMoon, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';

export function DarkModeButton() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
        }
        variant="default"
        size="xl"
        aria-label="Dark Mode"
      >
        {computedColorScheme === 'light' ? (
          <IconSun className="w-[22px] h-[22px]" stroke={1.5} />
        ) : (
          <IconMoon className="w-[22px] h-[22px]" stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  );
}
