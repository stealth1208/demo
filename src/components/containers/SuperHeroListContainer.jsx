import React, { Component } from 'react';
import { getCharList } from'../../api/marvelApi';
import { Column, Table, Cell, SelectionModes } from "@blueprintjs/table";
import { Thumbnail } from '../presentationals';
import get from 'lodash.get';

class SuperHeroListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.imagePath = 'thumbnail';
    this.listRender = ['name', 'description', this.imagePath]
  }

  async componentWillMount() {
    const charList = await getCharList();
    this.setState({
      results: charList.results      
    });
  }

  cellRenderer = (rowIndex, colIndex) => {
    const colName = this.listRender[colIndex];
    const values = this.getData(colName);    
    const isImage = colName === this.imagePath;
    const id = this.getData('id');
    return (
      <Cell
        style={{
          padding: '10px'
        }}
      >
        {
          isImage &&
          <Thumbnail
            id={id[rowIndex]}
            src={values[rowIndex]}
            onClick={this.goToDetail}
          />
        }
        {
          !isImage &&
          `${values[rowIndex]}`
        }
      </Cell>
    );
  }

  goToDetail = (id) => {
    console.log(id)
    this.props.history.push(`/super-heroes/${id}`);
  }

  getData = (field) => {
    const { results } = this.state;
    return results.map(item => get(item, field, item.field));     
  }

  render = () => {
    const { results } = this.state;

    return (
      <div>
        {
          !!results.length &&
          <div>
            <Table
              numRows={results.length}
              columnWidths={[200,200, 300]}
              defaultRowHeight={300}
              selectionModes={SelectionModes.ROWS_AND_CELLS}
            >
              {
                this.listRender.map(field => {
                  return <Column
                    name={field.toUpperCase()}
                    cellRenderer={this.cellRenderer}
                  />
                })
              }
            </Table>
          </div>
        }
      </div>
    );
  }
}

export default SuperHeroListContainer;
