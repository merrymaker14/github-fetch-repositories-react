import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import RepoList from './Components/RepoList';

const SearchForm = React.lazy(() => import('./Components/SearchForm'));

type AppState = {
  repos: any,
  loading: boolean,
  query: string
}

export default class App extends Component<{}, AppState> {
  state = {
    repos: [],
    loading: true,
    query: ''
  }

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'react') => {
    axios.get(`https://api.github.com/search/repositories?q=${query}`)
      .then(response => {
        this.setState({
          query: query,
          repos: response.data.items,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Search in repositories GitHub</h1>
            <React.Suspense fallback={<div>SearchForm loading...</div>}><SearchForm onSearch={this.performSearch} /></React.Suspense>     
          </div>   
        </div>    
        <div className="main-content">
          {
            this.state.loading
             ? <p>Loading...</p>
             : <div><h2>{this.state.query}</h2><RepoList data={this.state.repos} /></div>
          }          
        </div>
      </div>
    );
  }
}