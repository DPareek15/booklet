import { useState } from 'react';
import {
  IconChevronDown,
  IconChevronUp,
  IconDotsVertical,
  IconFileSymlink,
  IconHeart,
  IconSearch,
  IconSelector,
  IconTrash,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Center,
  Group,
  Image,
  Menu,
  Rating,
  ScrollArea,
  Table,
  Text,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import classes from './TableView.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import { BookDataType } from '@/app/actions/bookActions';

interface TableProps {
  data: BookDataType[];
}

type SortingBookType =
  | 'bookName'
  | 'genre'
  | 'rating'
  | 'startDate'
  | 'endDate';

interface ThProps {
  children: React.ReactNode;
  sort: boolean;
  reversed: boolean;
  sorted: boolean;
  onSort: () => void;
}

function Th({ children, sort, reversed, sorted, onSort }: Readonly<ThProps>) {
  const selectIcon = reversed ? IconChevronUp : IconChevronDown;
  const Icon = sorted ? selectIcon : IconSelector;
  return (
    <Table.Th className={classes.th}>
      {sort ? (
        <UnstyledButton onClick={onSort} className={classes.control}>
          <Group justify="space-between">
            <Text fw={500} fz="md">
              {children}
            </Text>
            <Center className={classes.icon}>
              <Icon size={16} stroke={1.5} />
            </Center>
          </Group>
        </UnstyledButton>
      ) : (
        <Text fw={500} fz="md">
          {children}
        </Text>
      )}
    </Table.Th>
  );
}

function filterData(data: BookDataType[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(query)
  );
}

function sortData(
  data: BookDataType[],
  payload: {
    sortBy: SortingBookType;
    reversed: boolean;
    search: string;
  }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].toString().localeCompare(a[sortBy].toString());
      }

      return a[sortBy].toString().localeCompare(b[sortBy].toString());
    }),
    payload.search
  );
}

const TableView = ({ data }: TableProps) => {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<SortingBookType>('bookName');
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: SortingBookType) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.bookName}>
      <Table.Td>
        <Menu width={225} shadow="md">
          <Menu.Target>
            <ActionIcon variant="default" radius="lg">
              <IconDotsVertical size={16} stroke={1.5} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection={<IconFileSymlink size={16} stroke={1.5} />}>
              <Link href={`/records/books/${row.bookId}`}>Show Record</Link>
            </Menu.Item>
            <Menu.Item leftSection={<IconHeart size={16} stroke={1.5} />}>
              {row.favourite ? 'Remove from Favourites' : 'Add to Favourites'}
            </Menu.Item>
            <Menu.Item
              color="red"
              leftSection={<IconTrash size={16} stroke={1.5} />}
            >
              Delete Record
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
      <Table.Td>
        <Image
          src={row.coverPage}
          fit="contain"
          w={150}
          h={200}
          alt={row.bookName}
        />{' '}
      </Table.Td>
      <Table.Td>
        <Text size="md">{row.bookName}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="md">{row.genre}</Text>
      </Table.Td>
      <Table.Td>
        <Rating size="sm" fractions={2} value={row.rating} />
      </Table.Td>
      <Table.Td>
        <ScrollArea
          type="always"
          scrollbars="x"
          scrollbarSize={4}
          scrollHideDelay={10}
          offsetScrollbars
          w={250}
        >
          {row.tags.map((tag) => (
            <Badge variant="default" key={tag} mr={'3px'}>
              {tag}
            </Badge>
          ))}
        </ScrollArea>
      </Table.Td>
      <Table.Td>{dayjs(row.startDate).format('DD/MM/YY')}</Table.Td>
      <Table.Td>{dayjs(row.endDate).format('DD/MM/YY')}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className={classes.content}>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={<IconSearch size={16} stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
        className={classes.input}
      />
      <Table
        horizontalSpacing="xs"
        verticalSpacing="xs"
        maw={1500}
        stickyHeader
        highlightOnHover
        withTableBorder
      >
        <Table.Thead>
          <Table.Tr>
            <Th
              sort={false}
              sorted={false}
              reversed={false}
              onSort={() => setSorting('bookName')}
            >
              {' '}
            </Th>
            <Th
              sort={false}
              sorted={false}
              reversed={false}
              onSort={() => setSorting('bookName')}
            >
              Cover Page
            </Th>
            <Th
              sort={true}
              sorted={sortBy === 'bookName'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('bookName')}
            >
              Title
            </Th>
            <Th
              sort={true}
              sorted={sortBy === 'genre'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('genre')}
            >
              Genre
            </Th>
            <Th
              sort={true}
              sorted={sortBy === 'rating'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('rating')}
            >
              Rating
            </Th>
            <Th
              sort={false}
              sorted={false}
              reversed={false}
              onSort={() => setSorting('bookName')}
            >
              Tags
            </Th>
            <Th
              sort={true}
              sorted={sortBy === 'startDate'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('startDate')}
            >
              Start Date
            </Th>
            <Th
              sort={true}
              sorted={sortBy === 'endDate'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('endDate')}
            >
              End Date
            </Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(data[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default TableView;
