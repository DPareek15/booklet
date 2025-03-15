import React from 'react';
import {
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
import { MockdataType } from '@/data/mockdata';
import { useDisclosure } from '@mantine/hooks';
import ShowBookModal from '@/components/ShowBookModal';

export function BookCard({
  id,
  title,
  description,
  image,
  tags,
}: Readonly<MockdataType>) {
  const features = tags.map((badge) => (
    <Badge variant="light" key={badge}>
      {badge}
    </Badge>
  ));
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Grid gutter="sm">
      <Grid.Col span={6}>
        <Image src={image} h="400" alt={title} radius="md" fit="cover" />
      </Grid.Col>
      <Grid.Col span={6}>
        <Card withBorder radius="md" p="lg" className={classes.card}>
          <Card.Section className={classes.section} mt="md">
            <Stack gap="xl" justify="space-between" h="100%">
              <Group justify="apart">
                <Text fz="xl" fw={700}>
                  {title}
                </Text>
                <Text fz="lg" mt="sm">
                  {description}
                </Text>
              </Group>
              <Group gap={7} mt="xl">
                {features}
              </Group>
            </Stack>
          </Card.Section>

          <Group mt="xs">
            <ShowBookModal opened={opened} onClose={close} bookId={id} />
            <Button radius="md" style={{ flex: 1 }} onClick={open}>
              Show details
            </Button>
          </Group>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
