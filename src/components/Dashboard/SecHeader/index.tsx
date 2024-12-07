'use client';
import React from 'react';
import { Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './SecHeader.module.css';
import { format } from 'date-fns/format';
import { AddNewButton } from '../../AddNewButton';

export function SecHeader() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="2xl" className={classes.inner}>
        <h1 className="text-xl">{format(new Date(), 'EEEE, MMM d Y')}</h1>
        <AddNewButton />
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
