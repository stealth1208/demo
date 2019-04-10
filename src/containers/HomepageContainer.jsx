import React, { Component } from 'react';
// import { Planets } from '../components';
import { getCharList } from'../api/charApi';
import { Column, Table, Cell } from "@blueprintjs/table";
import { Thumbnail } from '../components';
import get from 'lodash.get';


class HomepageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.imagePath = 'thumbnail.path';
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
    return (
      <Cell
        style={{width: "200px", height: "200px"}}  
      >
        {
          isImage &&
          <Thumbnail imgSrc={values[rowIndex]} />           
        }
        {
          !isImage &&
          `${values[rowIndex]}`
        }
      </Cell>  
    );
  }

  getData = (field) => {
    const { results } = this.state;
    return results.map(item => get(item, field, item.field));     
  }

  render() {
    const { results } = this.state;

    return (
      <>
        {
          !!results.length &&
          <>
            <Table 
              numRows={results.length}                       
              columnWidths={[200, 200, 300]}              
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
          </>
        }
      </>
    );
  }
}

export default HomepageContainer;