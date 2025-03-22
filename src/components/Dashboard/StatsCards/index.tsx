import {
  IconBook2,
  IconBookmark,
  IconCalendar,
  IconNotebook,
} from '@tabler/icons-react';
import { Group, Paper, SimpleGrid, Text } from '@mantine/core';
import classes from './StatsCards.module.css';
import { mockData as bookData } from '@/data/mockdata';

const icons = {
  books: IconBook2,
  series: IconNotebook,
  bookmarks: IconBookmark,
  days: IconCalendar,
};

const data = [
  { title: 'Books', icon: 'books', value: bookData.length.toString() },
  { title: 'Series', icon: 'series', value: '00' },
  { title: 'Bookmarks', icon: 'bookmarks', value: '00' },
  { title: 'Days', icon: 'days', value: '00' },
] as const;

export function StatsCards() {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xl" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size={22} stroke={1.5} />
        </Group>
        <Group justify="center" gap="xs" mt={5}>
          <Text className={classes.value}>{stat.value}</Text>
        </Group>
      </Paper>
    );
  });
  return (
    <div className={classes.root}>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
    </div>
  );
}
