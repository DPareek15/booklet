'use client';
import { Container } from '@mantine/core';
import classes from './SecHeader.module.css';
import { AddNewButton } from '../../AddNewButton';

function SecHeader() {
  return (
    <header className={classes.header}>
      <Container size="2xl" className={classes.inner}>
        <AddNewButton showContent={true} />
      </Container>
    </header>
  );
}

export default SecHeader;
