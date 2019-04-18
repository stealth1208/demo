import React from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';
import { Thumbnail } from '../index';
import InfiniteScroll from 'react-infinite-scroller';

function SuperHeroList(props) {  
  const { columns, goToDetail, customClass, data, loadData } = props;  

  return (
    <>       
      <div className="hero-list">
        <InfiniteScroll
          pageStart={0}
          loadMore={loadData}
          hasMore={true}
          loader={<div key={data.length}>Loading</div>}
          initialLoad={false}
          useWindow={false}
        >
          <Paper className={customClass.root}>
            <Table className={customClass.table}>
              <TableHead className="hero-list__header">
                <TableRow>
                  {
                    columns.map(item => (
                      <TableCell align="left">{item}</TableCell>
                    ))
                  }
                </TableRow>
              </TableHead>
              <TableBody className="hero-list__body">
                {
                  data.map((row, index) => {
                    const id = row.id;
                    return <TableRow key={`${id}_${index}`}>
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
        </InfiniteScroll>
      </div>
    </>
  ); 
}

export default SuperHeroList;