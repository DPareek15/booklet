'use client';
import React from 'react';
import { Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { UserButton } from './UserButton';
import classes from './MainHeader.module.css';

export function MainHeader() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="3xl" className={classes.inner}>
        <h1 className="text-5xl">Booklet</h1>
        <UserButton />
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
