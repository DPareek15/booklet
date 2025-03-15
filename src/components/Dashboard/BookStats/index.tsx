'use client';

import { useState } from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);
import {
  Group,
  List,
  Paper,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import classes from './BookStats.module.css';
import {
  IconChevronDown,
  IconChevronUp,
  IconCircleFilled,
} from '@tabler/icons-react';
import { mockData } from '@/data/mockdata';

const BookStats = () => {
  const [date, setDate] = useState(new Date());
  const [books, setBooks] = useState<string[]>([]);

  return (
    <div className={classes.root}>
      <div className={classes.controls}>
        <UnstyledButton
          className={classes.control}
          onClick={() => {
            setDate((current) => dayjs(current).add(1, 'day').toDate());
            const list: string[] = [];
            mockData.forEach((book) => {
              if (
                dayjs(date).isBetween(
                  dayjs(book.startDate),
                  dayjs(book.endDate),
                  'day',
                  '[]'
                )
              ) {
                books.push(book.title);
              }
            });
            setBooks(list);
          }}
        >
          <IconChevronUp
            size={16}
            className={classes.controlIcon}
            stroke={1.5}
          />
        </UnstyledButton>

        <div className={classes.date}>
          <Text className={classes.day}>{dayjs(date).format('DD')}</Text>
          <Text className={classes.month}>{dayjs(date).format('MMMM')}</Text>
          <Text className={classes.year}>{dayjs(date).format('YYYY')}</Text>
        </div>

        <UnstyledButton
          className={classes.control}
          onClick={() =>
            setDate((current) => dayjs(current).subtract(1, 'day').toDate())
          }
        >
          <IconChevronDown
            size={16}
            className={classes.controlIcon}
            stroke={1.5}
          />
        </UnstyledButton>
      </div>
      <Group style={{ flex: 1 }}>
        <Paper className={classes.stat} radius="md" shadow="md" p="xs">
          <div>
            <Text className={classes.label}>Today&apos;s Reads</Text>
            <List
              size="lg"
              center
              withPadding
              icon={
                <ThemeIcon color="blue" size={20} radius="xl">
                  <IconCircleFilled size={16} stroke={1.5} />
                </ThemeIcon>
              }
            >
              {books.length > 0 ? (
                books.map((book) => <List.Item key={book}>{book}</List.Item>)
              ) : (
                <List.Item>None</List.Item>
              )}
            </List>
          </div>
        </Paper>
      </Group>
    </div>
  );
};

export default BookStats;
