import { mockData } from '@/data/mockdata';
import { Badge, Group, Image, Modal, Stack, Text, Title } from '@mantine/core';

type Props = {
  bookId: number;
  opened: boolean;
  onClose: () => void;
};

const ShowBookModal = ({ bookId, opened, onClose }: Props) => {
  const bookData = mockData.filter((book) => {
    return bookId === book.id;
  });

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Title order={2}>{bookData[0].title}</Title>}
      size="xl"
      centered
    >
      <Group justify="flex-start" align="flex-start">
        <Image
          src={bookData[0].image}
          alt={bookData[0].title}
          h={500}
          w="auto"
          fit="contain"
        />
        <Stack
          w={'50%'}
          h={500}
          justify="space-between"
          align="stretch"
          gap="md"
        >
          <Text size="lg">{bookData[0].description}</Text>
          <p>
            {bookData[0].tags.map((tag) => (
              <Badge variant="default" key={tag} mr={'3px'}>
                {tag}
              </Badge>
            ))}
          </p>
        </Stack>
      </Group>
    </Modal>
  );
};

export default ShowBookModal;
