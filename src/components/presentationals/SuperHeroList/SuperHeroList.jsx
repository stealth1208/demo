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
          <TableBody>
            {
              data.map(row => {
                return <TableRow key={row.id}>
                  {
                    columns.map(cell => {
                      if (cell === 'thumbnail') {
                        return <TableCell align="right">
                          <Thumbnail
                            src={row[cell]}
                            onClick={goToDetail}
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