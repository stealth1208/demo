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
      <div className="hero-list">
        <Paper className={customClass.root}>
          <Table className={customClass.table}>
            <TableHead className="hero-list__header">
              <TableRow>
                {
                  columns.map(item => (
                    <TableCell align="center">{item}</TableCell>
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
                          return <TableCell className="hero-list__body__image-cell" align="center">
                            <Thumbnail
                              src={row[cell]}
                              onClick={() => goToDetail(id)}
                            />
                          </TableCell>;
                        }

                        return <TableCell className="hero-list__body__text-cell" align="left">{row[cell]}</TableCell>;
                      }
                      )
                    }
                  </TableRow>
                })
              }
            </TableBody>
          </Table>
        </Paper>        
      </div>
    );
  }
}

export default SuperHeroList;