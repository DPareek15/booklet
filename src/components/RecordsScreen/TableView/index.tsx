import { useState } from 'react';
import {
  IconChevronDown,
  IconChevronUp,
  IconDotsVertical,
  IconFileSymlink,
  IconSearch,
  IconSelector,
  IconStar,
  IconTrash,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Center,
  Group,
  Image,
  Menu,
  ScrollArea,
  Table,
  Text,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import classes from './TableView.module.css';
import { MockdataType } from '@/data/mockdata';
import { useDisclosure } from '@mantine/hooks';
import ShowBookModal from '@/components/ShowBookModal';

interface TableProps {
  data: MockdataType[];
}

interface ThProps {
  children: React.ReactNode;
  sort: boolean;
  reversed: boolean;
  sorted: boolean;
  onSort: () => void;
}

function Th({ children, sort, reversed, sorted, onSort }: Readonly<ThProps>) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
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

function filterData(data: MockdataType[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(query)
  );
}

function sortData(
  data: MockdataType[],
  payload: {
    sortBy: keyof MockdataType | null;
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
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const TableView = ({ data }: TableProps) => {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof MockdataType | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const setSorting = (field: keyof MockdataType) => {
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
    <Table.Tr key={row.title}>
      <Table.Td>
        <Menu width={200} shadow="md">
          <Menu.Target>
            <ActionIcon variant="default" radius="lg">
              <IconDotsVertical size={16} stroke={1.5} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <ShowBookModal opened={opened} onClose={close} bookId={row.id} />
            <Menu.Item leftSection={<IconFileSymlink size={16} stroke={1.5} />}>
              <UnstyledButton onClick={open}>View Record</UnstyledButton>
            </Menu.Item>
            <Menu.Item leftSection={<IconStar size={16} stroke={1.5} />}>
              Add to Favourites
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
        <Image src={row.image} w={125} h={200} alt={row.title} />{' '}
      </Table.Td>
      <Table.Td>{row.title}</Table.Td>
      <Table.Td>
        {row.description.length > 200
          ? `${row.description.slice(0, 200)}...`
          : row.description}
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
      <Table.Td>{row.startDate}</Table.Td>
      <Table.Td>{row.endDate}</Table.Td>
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
              onSort={() => setSorting('title')}
            >
              {' '}
            </Th>
            <Th
              sort={false}
              sorted={false}
              reversed={false}
              onSort={() => setSorting('title')}
            >
              Cover Page
            </Th>
            <Th
              sort={true}
              sorted={sortBy === 'title'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('title')}
            >
              Title
            </Th>
            <Th
              sort={true}
              sorted={sortBy === 'description'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('description')}
            >
              Description
            </Th>
            <Th
              sort={false}
              sorted={false}
              reversed={false}
              onSort={() => setSorting('title')}
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
