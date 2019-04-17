import React, { Component } from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';
import { Thumbnail } from '../index';

class SuperHeroList extends Component {
  render() {
    const { columns, goToDetail, customClass, data } = this.props;
    console.log(data)
    return (
      <Paper className={`hero-list ${customClass.root}`}>
        <Table className={customClass.table}>
          <TableHead className="hero-list__header">
            <TableRow>
              {
                columns.map(item => (
                  <TableCell align="right">{item}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody className="hero-list__body">
            {
              data.map(row => {
                const id = row.id;
                return <TableRow key={id}>
                  {
                    columns.map(cell => {
                      if (cell === 'thumbnail') {
                        return <TableCell align="right">
                          <Thumbnail
                            src={row[cell]}
                            onClick={(id) => goToDetail}
                          />
                        </TableCell>;
                      }

                      return <TableCell align="right">{row[cell]}</TableCell>;
                    }
                    )
                  }
                </TableRow>
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default SuperHeroList;