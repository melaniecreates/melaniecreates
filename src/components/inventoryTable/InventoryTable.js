/* Generates the Inventory Table */
import React, { Component } from 'react';
import InventoryTableLoading from './../inventoryTableLoading/InventoryTableLoading.js';
import Table  from 'react-toolbox/lib/table/Table';
import TableCell  from 'react-toolbox/lib/table/TableCell.js';
import TableHead  from 'react-toolbox/lib/table/TableHead.js';
import TableRow  from 'react-toolbox/lib/table/TableRow.js';
import theme from './../../toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './InventoryTable.css';

const data = [
  {instances: 'aaaabbbbcccdddddee1122334', uuid: 'dddbbbcccdddddee1122334', host: 305, tenant: 'adummydataforthissectiongoeshere', memory: 1, cpu: 8, prodIP: '11.11.111.111', pppIP: '11.11.111.111', image: 'dummydataforthissectiongoeshere', status: 'active', task: 'task name', date: '2011-11-16 20:00:00'},
  {instances: 'cccbbbbcccdddddee1122334', uuid: 'vvvbbbcccdddddee1122334', host: 425, tenant: 'bdummydataforthissectiongoeshere', memory: 2, cpu: 9, prodIP: '11.11.111.111', pppIP: '11.11.111.111', image: 'dummydataforthissectiongoeshere', status: 'error', task: 'task name', date: '2011-11-16 20:00:00'},
  {instances: 'ggggbbbcccdddddee1122334', uuid: 'jjjjbbcccdddddee1122334', host: 100, tenant: 'cdummydataforthissectiongoeshere', memory: 3, cpu: 7, prodIP: '11.11.111.111', pppIP: '11.11.111.111', image: 'dummydataforthissectiongoeshere', status: 'building schedule', task: 'task name', date: '2011-11-16 20:00:00'},
  {instances: 'ttttbcccdddddee1122334', uuid: 'juuuabbbbcccdddddee1122334', host: 298, tenant: 'ddummydataforthissectiongoeshere', memory: 4, cpu: 8, prodIP: '11.11.111.111', pppIP: '11.11.111.111', image: 'dummydataforthissectiongoeshere', status: 'active', task: 'task name', date: '2011-11-16 20:00:00'},
  {instances: 'eeebbbcccdddddee1122334', uuid: 'gtgtbbbcccdddddee1122334', host: 444, tenant: 'edummydataforthissectiongoeshere', memory: 1, cpu: 10, prodIP: '11.11.111.111', pppIP: '11.11.111.111', image: 'dummydataforthissectiongoeshere', status: 'error', task: 'task name', date: '2011-11-16 20:00:00'},
  {instances: 'fffbbcccdddddee1122334', uuid: 'qqqbbbcccdddddee1122334', host: 234, tenant: 'fdummydataforthissectiongoeshere', memory: 2, cpu: 10, prodIP: '11.11.111.111', pppIP: '11.11.111.111', image: 'dummydataforthissectiongoeshere', status: 'active', task: 'task name', date: '2011-11-16 20:00:00'},
  {instances: 'dddbbcccdddddee1122334', uuid: 'eeebbbcccdddddee1122334', host: 222, tenant: 'ghdummydataforthissectiongoeshere', memory: 4, cpu: 9, prodIP: '11.11.111.111', pppIP: '11.11.111.111', image: 'dummydataforthissectiongoeshere', status: 'active', task: 'task name', date: '2011-11-16 20:00:00'},
  {instances: 'fffbbcccdddddee1122334', uuid: 'wwwbbbcccdddddee1122334', host: 111, tenant: 'hdummydataforthissectiongoeshere', memory: 1, cpu: 10, prodIP: '11.11.111.111', pppIP: '11.11.111.111', image: 'dummydataforthissectiongoeshere', status: 'active', task:'task name', date: '2011-11-16 20:00:00'}
];


const sortByHostAsc = (a, b) => {
  if (a.host < b.host) return -1;
  if (a.host > b.host) return 1;
  return 0;
};

const sortByHostDesc = (a, b) => {
  if (a.host > b.host) return -1;
  if (a.host < b.host) return 1;
  return 0;
};

class InventoryTable extends Component {
  state = {
    selected: ['Donut'],
    sorted: 'asc'
  };

  getSortedData = () => {
    const compare = this.state.sorted === 'asc' ? sortByHostAsc : sortByHostDesc;
    return data.sort(compare);
  }

  handleSortClick = () => {
    const { sorted } = this.state;
    const nextSorting = sorted === 'asc' ? 'desc' : 'asc';
    this.setState({ sorted: nextSorting });
  };

  render () {
    const { sorted } = this.state;
    const sortedData = this.getSortedData();
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Table selectable={false}>
            <TableHead>
              <TableCell className="instances">Instances</TableCell>
              <TableCell className="uuid">UUID</TableCell>
              <TableCell className="host" onClick={this.handleSortClick} numeric sorted={sorted}>HOST</TableCell>
              <TableCell className="tenant">Tenant</TableCell>
              <TableCell className="memory">Memory</TableCell>
              <TableCell className="disk">CPUs/Disk</TableCell>
              <TableCell className="prodIP">Prod IP</TableCell>
              <TableCell className="pppIP">ppp IP</TableCell>
              <TableCell className="image">Image Name</TableCell>
              <TableCell className="status">Status</TableCell>
              <TableCell className="task">Task</TableCell>
              <TableCell className="date" >Date Created</TableCell>
            </TableHead>
            {sortedData.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell><a href="">{item.instances}</a></TableCell>
                <TableCell><a href="">{item.uuid}</a></TableCell>
                <TableCell numeric>{item.host}</TableCell>
                <TableCell numeric>{item.tenant}</TableCell>
                <TableCell numeric>{item.memory}Gb</TableCell>
                <TableCell numeric>{item.cpu}/10</TableCell>
                <TableCell>{item.prodIP}</TableCell>
                <TableCell>{item.pppIP}</TableCell>
                <TableCell>{item.image}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.task}</TableCell>
                <TableCell>{item.date}</TableCell>
              </TableRow>
            ))}
          </Table>
          <InventoryTableLoading />
        </div>
      </ThemeProvider>
    );
  }
}

export default InventoryTable;