'use client';

import {
  Button,
  Fieldset,
  Group,
  Image,
  Rating,
  Select,
  Stack,
  Stepper,
  TagsInput,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { IconCircleCheck } from '@tabler/icons-react';
import { v4 as uuidv4 } from 'uuid';

export interface BookDataType {
  bookId: string;
  bookName: string;
  authorName: string;
  description: string;
  genre: string;
  tags: string[];
  startDate: Date;
  endDate: Date;
  coverPage: string;
  publisherName: string;
  isbnNumber?: string;
  rating: number;
  review?: string;
  favourite: boolean;
}

const AddBookForm = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((curr) => (curr < 3 ? curr + 1 : curr));
  const prevStep = () => setActive((curr) => (curr > 0 ? curr - 1 : curr));

  const bookForm = useForm({
    mode: 'controlled',
    initialValues: {
      bookId: uuidv4(),
      bookName: '',
      authorName: '',
      description: '',
      genre: 'fiction',
      tags: [],
      startdate: new Date(),
      endDate: new Date(),
      coverPage: '',
      publisherName: '',
      isbnNumber: '',
      rating: 0,
      review: '',
      favourite: false,
    },
    validate: {
      bookName: (value) =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
    },
  });

  return (
    <div>
      <form onSubmit={bookForm.onSubmit((values) => console.log(values))}>
        <Stepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
          className="mb-10"
          w={'90%'}
        >
          <Stepper.Step
            label="Basic Information"
            description="Add essential details of the book"
            className="p-4"
          >
            <Stack justify="space-between" align="center" gap="lg">
              <Fieldset
                legend={<Title order={5}>Book Information</Title>}
                variant="filled"
                w={'60%'}
                className="mt-10"
              >
                <Stack justify="space-between" align="center" gap="lg">
                  <TextInput
                    label="Book Name"
                    placeholder='Only alphanumeric characters, spaces and ":, -, /" are allowed'
                    required
                    name="bookName"
                    key={bookForm.key('bookName')}
                    {...bookForm.getInputProps('bookName')}
                    w={'50%'}
                    className="m-4"
                  />
                  <TextInput
                    label="Author Name"
                    placeholder="Only alphanumeric characters and spaces are allowed"
                    withAsterisk
                    name="authorName"
                    key={bookForm.key('authorName')}
                    {...bookForm.getInputProps('authorName')}
                    w={'50%'}
                    className="m-4"
                  />
                  <Textarea
                    size="md"
                    label="Book Description"
                    withAsterisk
                    description="Provide a brief description of the book"
                    name="description"
                    key={bookForm.key('description')}
                    {...bookForm.getInputProps('description')}
                    placeholder="Only alphanumeric charcaters and spaces are allowed"
                    resize="vertical"
                    w={'50%'}
                    minLength={5}
                    className="m-4"
                  />
                </Stack>
              </Fieldset>
              <Fieldset
                legend={<Title order={5}>Tags</Title>}
                variant="filled"
                w={'60%'}
              >
                <Stack justify="space-between" align="center" gap="lg">
                  <Select
                    label="Genre"
                    placeholder="Select the book genre"
                    withAsterisk
                    name="genre"
                    key={bookForm.key('genre')}
                    {...bookForm.getInputProps('genre')}
                    data={[
                      {
                        group: 'Fiction',
                        items: [
                          'Action',
                          'Adventure',
                          'Classical',
                          'Comedy',
                          'Drama',
                          'Dystopian',
                          'Fantasy',
                          'Horror',
                          'Mystery',
                          'Romance',
                          'Sci-Fi',
                          'Thriller',
                          'Young Adult',
                        ],
                      },
                      {
                        group: 'Non-Fiction',
                        items: [
                          'Biography',
                          'History',
                          'Science',
                          'Memoir',
                          'Self-Help',
                        ],
                      },
                    ]}
                    clearable
                    searchable
                    nothingFoundMessage="Not found"
                    checkIconPosition="right"
                    w={'50%'}
                    comboboxProps={{ shadow: 'md' }}
                    className="m-4"
                  />
                  <TagsInput
                    label="Add Tags"
                    placeholder='Enter tags separated by ","'
                    name="tags"
                    key={bookForm.key('tags')}
                    {...bookForm.getInputProps('tags')}
                    data={[
                      'Fiction',
                      'Non-Fiction',
                      'Action',
                      'Adventure',
                      'Comedy',
                      'Drama',
                      'Fantasy',
                      'Horror',
                      'Mystery',
                      'Romance',
                      'Sci-Fi',
                      'Thriller',
                      'Biography',
                      'History',
                      'Memoir',
                      'Self-Help',
                    ]}
                    clearable
                    w={'50%'}
                  />
                </Stack>
              </Fieldset>
              <Fieldset
                legend={<Title order={5}>Dates</Title>}
                variant="filled"
                w={'60%'}
              >
                <Stack justify="space-between" align="center" gap="lg">
                  <DateInput
                    name="startDate"
                    key={bookForm.key('startDate')}
                    {...bookForm.getInputProps('startDate')}
                    label="Start Date"
                    placeholder="Enter the starting date of the book"
                    w={'50%'}
                    className="m-4"
                    clearable
                    maxDate={new Date()}
                  />
                  <DateInput
                    name="endDate"
                    key={bookForm.key('endDate')}
                    {...bookForm.getInputProps('endDate')}
                    withAsterisk
                    label="End Date"
                    placeholder="Enter the ending date of the book"
                    w={'50%'}
                    className="m-4"
                    clearable
                    maxDate={new Date()}
                  />
                </Stack>
              </Fieldset>
            </Stack>
          </Stepper.Step>
          <Stepper.Step
            label="Cover Page"
            description="Provide a cover page for the book"
            className="p-4"
          >
            <Stack justify="space-between" align="center" gap="lg">
              <Fieldset
                legend={<Title order={5}>Cover Page</Title>}
                variant="filled"
                w={'60%'}
              >
                <Stack justify="space-between" align="center" gap="lg">
                  <TextInput
                    label="Cover Page"
                    placeholder="Provide a link for the cover page of the book"
                    name="coverPage"
                    key={bookForm.key('coverPage')}
                    {...bookForm.getInputProps('coverPage')}
                    w={'50%'}
                    className="m-4"
                  />
                  <Stack justify="space-between" align="center" gap="xs">
                    <Image
                      src={bookForm.getValues().coverPage}
                      alt="Cover Page"
                      width="auto"
                      height={400}
                      fallbackSrc="\fallbackCoverPage.jpeg"
                    />
                    <Title order={3}>Cover Page Preview</Title>
                  </Stack>
                </Stack>
              </Fieldset>
            </Stack>
          </Stepper.Step>
          <Stepper.Step
            label="Book Details"
            description="Provide extra details of the book"
            className="p-4"
          >
            <Stack justify="space-between" align="center" gap="lg">
              <Fieldset
                legend={<Title order={5}>Print Details</Title>}
                variant="filled"
                w={'60%'}
                className="mt-10"
              >
                <Stack justify="space-between" align="center" gap="lg">
                  <TextInput
                    label="Publisher Name"
                    placeholder="Only alphanumeric characters and spaces are allowed"
                    name="publisher"
                    key={bookForm.key('publisher')}
                    {...bookForm.getInputProps('publisher')}
                    w={'50%'}
                    className="m-4"
                  />
                  <TextInput
                    label="ISBN Number"
                    placeholder="Only numbers and hyphens are allowed"
                    name="isbn"
                    key={bookForm.key('isbn')}
                    {...bookForm.getInputProps('isbn')}
                    w={'50%'}
                    className="m-4"
                  />
                </Stack>
              </Fieldset>
              <Fieldset
                legend={<Title order={5}>Feedback</Title>}
                variant="filled"
                w={'60%'}
                className="mt-10"
              >
                <Stack justify="space-between" align="center" gap="lg">
                  <Group justify="center">
                    <Rating
                      name="rating"
                      key={bookForm.key('rating')}
                      {...bookForm.getInputProps('rating')}
                      count={5}
                      fractions={2}
                      size="xl"
                    />
                    <Text size="xl">{`Rating: ${
                      bookForm.getValues().rating
                    }`}</Text>
                  </Group>
                  <Textarea
                    size="md"
                    label="Book Review"
                    name="review"
                    key={bookForm.key('review')}
                    {...bookForm.getInputProps('review')}
                    placeholder="Only alphanumeric characters and spaces are allowed"
                    resize="vertical"
                    w={'50%'}
                    minLength={5}
                    className="m-4"
                  />
                </Stack>
              </Fieldset>
            </Stack>
          </Stepper.Step>
          <Stepper.Completed>
            <Stack
              justify="space-between"
              align="center"
              gap="lg"
              className="my-20"
            >
              <IconCircleCheck size={100} stroke={1.5} color="green" />
              <Title>The book data has been submitted!</Title>
            </Stack>
          </Stepper.Completed>
        </Stepper>
        <Group justify="center" mt="xl" className="mb-10">
          <Button
            variant="default"
            onClick={() => (active === 3 ? setActive(0) : prevStep())}
            disabled={active === 0}
            size="xl"
            w={150}
          >
            Back
          </Button>
          {active === 2 ? (
            <Button type="submit" onClick={nextStep} size="xl" w={150} p={5}>
              Add Book
            </Button>
          ) : (
            active < 2 && (
              <Button onClick={nextStep} size="xl" w={150}>
                Next
              </Button>
            )
          )}
        </Group>
      </form>
    </div>
  );
};

export default AddBookForm;
