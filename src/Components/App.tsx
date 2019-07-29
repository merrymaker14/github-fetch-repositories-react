import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import RepoList from './RepoList';
import { loadRepos } from '../actions/reposActions';
import { bindActionCreators } from 'redux';

const SearchForm = React.lazy(() => import('./SearchForm'));

type AppProps = {
  repos: any,
  loadRepos: (query: string) => void
}

type AppState = {
  repos: any,
  loading: boolean,
  query: string
}

class App extends Component<AppProps, AppState> {
  constructor(props: Readonly<AppProps>) {
		super(props);
		this.state = {
      repos: [],
      loading: true,
      query: ''
    };
		this.performSearch = this.performSearch.bind(this);
	}

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch(query = 'react') {
    console.log(this.props);
    this.setState({
      query: query,
      repos: this.props.loadRepos(query),
      loading: false
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
             : <div><h2>{this.state.query}</h2><RepoList data={this.props.repos} /></div>
          }          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: { repos: any; }) => ({
  repos: state.repos
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return bindActionCreators({
    loadRepos
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
