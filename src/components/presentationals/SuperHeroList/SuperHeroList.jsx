import React, { Component } from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';
import { Thumbnail, Loading } from '../index';
import InfiniteScroll from 'react-infinite-scroller';

class SuperHeroList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: props.isLoading
    };
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   isLoading: true
    // });
    console.log('nextProps', nextProps)
    console.log('nextProps', nextProps.data.length)
    console.log('this.props', this.props.data.length)
    this.setState({
      isLoading: nextProps.data.length === this.props.data.length
    });
  }

  render() {
    const { columns, goToDetail, customClass, data, loadData, isLoading } = this.props;
    // const { isLoading } = this.state;

    return (
      <>
        {
          isLoading && <Loading />
        }
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
}

export default SuperHeroList;