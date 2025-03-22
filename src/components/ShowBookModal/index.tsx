import { BookDataType } from '@/app/actions/bookActions';
import { Badge, Group, Image, Modal, Stack, Text, Title } from '@mantine/core';

type BookModalProps = {
  bookData: BookDataType;
  opened: boolean;
  onClose: () => void;
};

const ShowBookModal = ({
  bookData,
  opened,
  onClose,
}: Readonly<BookModalProps>) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Title order={2}>{bookData.bookName}</Title>}
      size={800}
      centered
    >
      <Group justify="flex-start" align="flex-start">
        <Image
          src={bookData.coverPage}
          alt={bookData.bookName}
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
          <Text size="lg">{bookData.description}</Text>
          <p>
            {bookData.tags.map((tag) => (
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
