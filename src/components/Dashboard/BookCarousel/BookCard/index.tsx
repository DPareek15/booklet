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

interface CardProps {
  image: string;
  title: string;
  description: string;
  categories: string[];
}

export function BookCard({ image, title, description, categories }: CardProps) {
  const features = categories.map((badge) => (
    <Badge variant="light" key={badge}>
      {badge}
    </Badge>
  ));

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
            <Button radius="md" style={{ flex: 1 }}>
              Show details
            </Button>
          </Group>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
