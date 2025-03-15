'use client';

import { Tabs, TabsList, TabsPanel, TabsTab } from '@mantine/core';
import { IconList, IconTable } from '@tabler/icons-react';
import classes from './TabsView.module.css';
import TableView from '../TableView';
import { mockData } from '@/data/mockdata';
import ListView from '../ListView';

const TabsView = () => {
  return (
    <div className={classes.header}>
      <Tabs variant="outline" radius="md" defaultValue="tableView">
        <TabsList className={classes.tabsList}>
          <TabsTab
            value="tableView"
            leftSection={<IconTable size={20} />}
            className={classes.tab}
          >
            Table View
          </TabsTab>
          <TabsTab
            value="listView"
            leftSection={<IconList size={20} />}
            className={classes.tab}
          >
            List View
          </TabsTab>
        </TabsList>
        <TabsPanel value="tableView" className={classes.panel}>
          <TableView data={mockData} />
        </TabsPanel>
        <TabsPanel value="listView" className={classes.panel}>
          <ListView data={mockData} />
        </TabsPanel>
      </Tabs>
    </div>
  );
};

export default TabsView;
