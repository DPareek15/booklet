import { MockdataType } from '@/data/mockdata';
import { Accordion, Image, SimpleGrid, Title } from '@mantine/core';
import classes from './ListView.module.css';

type ListProps = {
  data: MockdataType[];
};

function getGroupedItems(data: MockdataType[]) {
  const obj: { [char: string]: MockdataType[] } = {};
  data.forEach((item) => {
    const ch = item.title[0];
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
    .sort()
    .map((item) => (
      <Accordion.Item key={item[0]} value={item[0]} className={classes.item}>
        <Accordion.Control>
          <Title order={2}>{item[0]}</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <SimpleGrid cols={5} spacing="xs" verticalSpacing={75} p={25}>
            {item[1].map((book) => (
              <Image
                key={book.title}
                src={book.image}
                alt={book.title}
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
