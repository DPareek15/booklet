import { Accordion, Image, SimpleGrid, Title } from '@mantine/core';
import classes from './ListView.module.css';
import { BookDataType } from '@/app/actions/bookActions';

type ListProps = {
  data: BookDataType[];
};

function getGroupedItems(data: BookDataType[]) {
  const obj: { [char: string]: BookDataType[] } = {};
  data.forEach((item) => {
    const ch = item.bookName[0];
    if (isNaN(parseInt(ch))) {
      if (obj[ch] === undefined) obj[ch] = [];
      obj[ch].push(item);
    } else {
      if (obj['#'] === undefined) obj['#'] = [];
      obj['#'].push(item);
    }
  });
  return obj;
}

const ListView = ({ data }: ListProps) => {
  const groupedData = getGroupedItems(data);
  const showData = Object.entries(groupedData)
    .sort((a, b) => {
      return a[0].localeCompare(b[0]);
    })
    .map((item) => (
      <Accordion.Item key={item[0]} value={item[0]} className={classes.item}>
        <Accordion.Control>
          <Title order={2}>{item[0]}</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <SimpleGrid cols={5} spacing="xs" verticalSpacing={75} p={25}>
            {item[1].map((book) => (
              <Image
                key={book.bookName}
                src={book.coverPage}
                alt={book.bookName}
                h={350}
                w="auto"
                fit="contain"
              />
            ))}
          </SimpleGrid>
        </Accordion.Panel>
      </Accordion.Item>
    ));
  return (
    <div className={classes.wrapper}>
      <Accordion chevronPosition="right" variant="separated">
        {showData}
      </Accordion>
    </div>
  );
};

export default ListView;
