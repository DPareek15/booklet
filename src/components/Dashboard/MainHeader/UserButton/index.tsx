import { Avatar, Group, Text } from '@mantine/core';
import { OptionsButton } from './OptionsButton';

export function UserButton() {
  return (
    <Group>
      <Avatar radius="xl" />

      <div style={{ flex: 1 }}>
        <Text size="lg" fw={500}>
          Dushyant Pareek
        </Text>

        <Text c="dimmed" size="md">
          dpareek2002@gmail.com
        </Text>
      </div>

      <OptionsButton />
    </Group>
  );
}
