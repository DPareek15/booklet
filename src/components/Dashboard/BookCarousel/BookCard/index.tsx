import React from 'react';
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import classes from './BookCard.module.css';
import { useDisclosure } from '@mantine/hooks';
import ShowBookModal from '@/components/ShowBookModal';
import Link from 'next/link';
import { IconExternalLink } from '@tabler/icons-react';
import { BookDataType } from '@/components/AddBookForm';

interface BookCardProps {
  bookData: BookDataType;
}

export function BookCard({ bookData }: Readonly<BookCardProps>) {
  const features = bookData.tags.map((badge) => (
    <Badge variant="light" key={badge}>
      {badge}
    </Badge>
  ));
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Grid gutter="sm">
      <Grid.Col span={6}>
        <Image
          src={bookData.coverPage}
          h="400"
          alt={bookData.bookName}
          radius="md"
          fit="cover"
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <Card withBorder radius="md" p="xs" className={classes.card}>
          <Card.Section className={classes.section} mt="md">
            <Stack gap="xl" justify="space-between" h="100%">
              <Group justify="apart">
                <Text fz="xl" fw={700}>
                  {bookData.bookName}
                </Text>
                <Text fz="lg" mt="sm">
                  {bookData.description.length > 200
                    ? `${bookData.description.slice(0, 200)}...`
                    : bookData.description}
                </Text>
              </Group>
              <Group gap={7} mt="xl">
                {features}
              </Group>
            </Stack>
          </Card.Section>

          <Group mt="xs">
            <ShowBookModal
              opened={opened}
              onClose={close}
              bookData={bookData}
            />
            <Button radius="md" style={{ flex: 1 }} onClick={open}>
              Show details
            </Button>
            <ActionIcon
              component={Link}
              href={`/records/books/${bookData.bookId}`}
              h={34}
              w={34}
            >
              <IconExternalLink size={20} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
