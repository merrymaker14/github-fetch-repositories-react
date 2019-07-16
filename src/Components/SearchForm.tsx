import React, { PureComponent } from 'react';
import styled from "styled-components";

const SearchFormCss = styled.form`
  border: 1px solid red;
`;

type SearchFormProps = {
  onSearch: (query: string) => void
}

type SearchFormState = {
  searchText: string
}

class SearchForm extends PureComponent<SearchFormProps, SearchFormState> {
   state = {
    searchText: ''
   }

   onSearchChange = (e: { target: { value: string; }; }) => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = (e: { preventDefault: () => void; currentTarget: { reset: () => void; }; }) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <SearchFormCss onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               placeholder="Search..." />
      </SearchFormCss>      
    );
  }
}

export default SearchForm;