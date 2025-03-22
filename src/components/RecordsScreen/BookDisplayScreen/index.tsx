'use client';

import { BookDataType } from '@/app/actions/bookActions';
import {
  ActionIcon,
  Badge,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Rating,
  ScrollAreaAutosize,
  Stack,
  Text,
  Textarea,
  Title,
} from '@mantine/core';
import {
  IconArrowNarrowRightDashed,
  IconEdit,
  IconHeart,
  IconHeartFilled,
  IconTrash,
} from '@tabler/icons-react';
import dayjs from 'dayjs';
import Link from 'next/link';

type BookDisplayScreenProps = {
  bookData: BookDataType;
};

const BookDisplayScreen = ({ bookData }: BookDisplayScreenProps) => {
  return (
    <Grid
      gutter="sm"
      justify="space-around"
      align="flex-start"
      className="fixed"
    >
      <GridCol span={4}>
        <Stack align="center" justify="flex-start" p={30}>
          <Image
            src={bookData.coverPage}
            fallbackSrc="/fallbackCoverPage.jpeg"
            alt="cover page"
            fit="contain"
            radius="sm"
            w={300}
            h={400}
            className="shadow-2xl"
          />
          <ButtonGroup>
            <Button variant="default" w={75} h={45} radius="md">
              <Link href={`edit-book/${bookData.bookId}`} replace={true}>
                <IconEdit size={28} stroke={1.5} />
              </Link>
            </Button>
            <Button variant="default" w={75} h={45}>
              {bookData.favourite ? (
                <IconHeartFilled color="red" size={28} stroke={1.5} />
              ) : (
                <IconHeart size={28} stroke={1.5} />
              )}
            </Button>
            <Button variant="default" w={75} h={45} radius="md">
              <IconTrash size={28} stroke={1.5} />
            </Button>
          </ButtonGroup>
        </Stack>
      </GridCol>
      <GridCol span={8} p={15}>
        <ScrollAreaAutosize
          mah="95vh"
          type="auto"
          scrollbarSize={16}
          offsetScrollbars
        >
          <Stack align="stretch" justify="flex-start" gap="xl" w={'75%'}>
            <Stack justify="flex-start" gap={5}>
              <Title size={48}>{bookData.bookName}</Title>
              <Group justify="flex-start">
                <Title order={2}>{bookData.authorName}</Title>
                <Divider orientation="vertical" />
                <Title order={2}>{bookData.publisherName}</Title>
              </Group>
            </Stack>
            <Group justify="flex-start" align="center">
              <Text size={'1.6rem'} fw={700}>
                {'Genre: '}
              </Text>
              <Text size={'1.6rem'}>{bookData.genre}</Text>
            </Group>
            <Stack justify="flex-start" gap={0}>
              <Title order={3} mb={15}>
                {'Book Description'}
              </Title>
              <ScrollAreaAutosize
                mah={300}
                ml={30}
                offsetScrollbars
                scrollHideDelay={0}
              >
                <Text size="xl">{bookData.description.trim()}</Text>
              </ScrollAreaAutosize>
              <Group ml={20}>
                {bookData.tags?.map((tag) => (
                  <Badge variant="default" key={tag} size="lg">
                    {tag}
                  </Badge>
                ))}
              </Group>
            </Stack>
            <Group justify="flex-start" align="center" gap={5} mt={25}>
              <Text size="md" fw={700}>
                {'Started On '}
              </Text>
              <Text w={'20%'}>{`${dayjs(bookData.startDate).format(
                'ddd, MMMM D YYYY'
              )}`}</Text>
              <ActionIcon variant="white" color="black" mx={40} size="xl">
                <IconArrowNarrowRightDashed size={48} stroke={1.5} />
              </ActionIcon>
              <Text size="md" fw={700}>
                {'Finished On '}
              </Text>
              <Text w={'20%'}>
                {`${dayjs(bookData.endDate).format('ddd, MMMM D YYYY')}`}
              </Text>
            </Group>
            <Stack justify="flex-start" gap={0}>
              <Title order={3} mb={15}>
                {'Your Review'}
              </Title>
              <Rating
                value={bookData.rating}
                size="xl"
                fractions={2}
                readOnly
                ml={30}
                mb={15}
              />
              <Textarea
                value={bookData.review}
                w={500}
                h={300}
                ml={30}
                autosize
                disabled
              />
            </Stack>
          </Stack>
        </ScrollAreaAutosize>
      </GridCol>
    </Grid>
  );
};

export default BookDisplayScreen;
