import {
  IconChevronDown,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { ActionIcon, Group, Menu } from '@mantine/core';

export function OptionsButton() {
  return (
    <Group justify="center">
      <Menu
        withArrow
        width={400}
        position="bottom"
        transitionProps={{ transition: 'pop' }}
        withinPortal
      >
        <Menu.Target>
          <ActionIcon size={36} variant="default">
            <IconChevronDown size={24} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
            Account settings
          </Menu.Item>
          <Menu.Item
            leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}
          >
            Change account
          </Menu.Item>
          <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
