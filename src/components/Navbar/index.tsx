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
import Link from 'next/link';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
}: Readonly<NavbarLinkProps>) {
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

const navData = [
  { icon: IconHome2, label: 'Home', value: '/' },
  { icon: IconTable, label: 'Records', value: '/records' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics', value: '/analytics' },
  {
    icon: IconLibraryPlus,
    label: 'Recommendations',
    value: '/recommendations',
  },
  { icon: IconUser, label: 'Account', value: '/account' },
  { icon: IconInfoSquareRounded, label: 'About Us', value: '/info' },
];

export default function Navbar() {
  const [active, setActive] = useState(0);

  const links = navData.map((link, index) => (
    <Link key={link.label} href={link.value}>
      <NavbarLink
        {...link}
        key={link.label}
        active={index === active}
        onClick={() => setActive(index)}
      />
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <BookletLogo size={40} stroke={2} color="white" hidden={false} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
          <AddNewButton showContent={false} />
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <DarkModeButton />
      </Stack>
    </nav>
  );
}
