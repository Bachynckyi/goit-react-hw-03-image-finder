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

  async componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== this.state.query)
    try {    
        this.setState({isLoading: true});
        const data = await API.fetchData(this.state.query, this.state.page);
        setTimeout(() => {
          this.setState(state => ({dataImages: [...state.dataImages, ...data.hits], isLoading:false}));
        }, 1000);

      }
      catch(error) {
        console.log(error)
      }
  }

  handleformSubmit = newQuery => {
    this.setState({query: newQuery, dataImages: [], page: 1});
    window.scrollTo({ top: 0, left: 0 });
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
          color: '#010101',
          paddingBottom: 24,
        }}
      >
        <SearchBar onSubmit={this.handleformSubmit}/>
        {this.state.isLoading && <h1>Загрузочка</h1>}
        {dataImages.length > 0 && (<ImageGallery dataImages={dataImages} />)}
      </div>
    );
  }
};
