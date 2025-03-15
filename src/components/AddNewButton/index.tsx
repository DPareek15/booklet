import {
  IconBook2,
  IconBookmark,
  IconCheckbox,
  IconChevronDown,
  IconNotebook,
  IconPlus,
} from '@tabler/icons-react';
import { Button, Menu, Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';

interface Props {
  showContent: boolean;
  classes?: string;
}

export function AddNewButton({ showContent, classes }: Readonly<Props>) {
  const theme = useMantineTheme();
  return (
    // TODO: Implement the complete menu
    // <Menu
    //   transitionProps={{ transition: 'pop-top-right' }}
    //   position="top-end"
    //   width={240}
    //   withinPortal
    // >
    //   <Menu.Target>
    //     {showContent ? (
    //       <Button
    //         size="lg"
    //         rightSection={<IconChevronDown size={18} stroke={1.5} />}
    //         pr={24}
    //         pl={24}
    //         pt={6}
    //         pb={6}
    //         className={classes}
    //       >
    //         Add New
    //       </Button>
    //     ) : (
    //       <Button size="lg" pr={6} pl={6} pt={6} pb={6}>
    //         <IconPlus size={24} stroke={2} className={classes} />
    //       </Button>
    //     )}
    //   </Menu.Target>
    //   <Menu.Dropdown>
    //     <Menu.Item
    //       leftSection={
    //         <IconBook2 size={24} color={theme.colors.blue[6]} stroke={1.5} />
    //       }
    //       rightSection={
    //         <Text size="xs" tt="uppercase" fw={700} c="dimmed">
    //           Ctrl + P
    //         </Text>
    //       }
    //     >
    //       <Text size="md" fw={500}>
    //         Book
    //       </Text>
    //     </Menu.Item>
    //     <Menu.Item
    //       leftSection={
    //         <IconNotebook size={24} color={theme.colors.pink[6]} stroke={1.5} />
    //       }
    //       rightSection={
    //         <Text size="xs" tt="uppercase" fw={700} c="dimmed">
    //           Ctrl + T
    //         </Text>
    //       }
    //     >
    //       <Text size="md" fw={500}>
    //         Series
    //       </Text>
    //     </Menu.Item>
    //     <Menu.Item
    //       leftSection={
    //         <IconBookmark size={24} color={theme.colors.cyan[6]} stroke={1.5} />
    //       }
    //       rightSection={
    //         <Text size="xs" tt="uppercase" fw={700} c="dimmed">
    //           Ctrl + U
    //         </Text>
    //       }
    //     >
    //       <Text size="md" fw={500}>
    //         Bookmark
    //       </Text>
    //     </Menu.Item>
    //     <Menu.Item
    //       leftSection={
    //         <IconCheckbox
    //           size={24}
    //           color={theme.colors.violet[6]}
    //           stroke={1.5}
    //         />
    //       }
    //       rightSection={
    //         <Text size="xs" tt="uppercase" fw={700} c="dimmed">
    //           Ctrl + E
    //         </Text>
    //       }
    //     >
    //       <Text size="md" fw={500}>
    //         Goal
    //       </Text>
    //     </Menu.Item>
    //   </Menu.Dropdown>
    // </Menu>
    <Link href={'/add-book'}>
      <Button size="lg" w={60} pr={6} pl={6} pt={6} pb={6}>
        <IconPlus size={24} stroke={2} className={classes} />
      </Button>
    </Link>
  );
}
