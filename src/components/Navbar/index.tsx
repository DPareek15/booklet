'use client';

import { useState } from 'react';
import {
  IconDeviceDesktopAnalytics,
  IconHome2,
  IconInfoSquareRounded,
  IconLibraryPlus,
  IconTable,
  IconUser,
} from '@tabler/icons-react';
import { Center, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import classes from './Navbar.module.css';
import BookletLogo from '../BookletLogo';
import { DarkModeButton } from './DarkModeButton';
import { AddNewButton } from '../AddNewButton';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon size={24} stroke={2} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconTable, label: 'Records' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconLibraryPlus, label: 'Recommendations' },
  { icon: IconUser, label: 'Account' },
  { icon: IconInfoSquareRounded, label: 'About Us' },
];

export default function Navbar() {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <BookletLogo size={40} stroke={2} color="white" />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
          <AddNewButton showcontent={false} />
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <DarkModeButton />
      </Stack>
    </nav>
  );
}
