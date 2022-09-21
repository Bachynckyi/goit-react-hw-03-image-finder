import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Component } from "react";
import * as API from '../services/API';
export class App extends Component {
  state = {
    query: "",
    dataImages: [],
    isLoading: false,
    page: "1"
  }

  addMaterial = async (query, page) =>  {
    try {    
      this.setState({isLoading: true});
      const data = await API.fetchData(query, page);
      this.setState(state => ({dataImages: [...state.dataImages, ...data.hits], isLoading:false}));
      console.log(data);
    }
    catch(error) {
      console.log(error)
    }
  };

  handleformSubmit = newQuery => {
    this.setState({query: newQuery});
  }

  render() {
    const { dataImages } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <SearchBar onSubmit={this.handleformSubmit}/>
        {this.state.isLoading && <h1>Загрузочка</h1>}
        {dataImages.length > 0 ? (<ImageGallery dataImages={dataImages} />) : (<span>nothing</span>)}
      </div>
    );
  }
};
