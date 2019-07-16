import React from 'react';
import Repo from './Repo';
import NoRepos from './NoRepos';
import PropTypes from 'prop-types';

const RepoList = ({data}: any) => { 
  let repos;
  if (data.length) {
    repos = data.map((repo: { name: any; html_url: any; description: any; id: string | number | undefined; }) => <Repo name={repo.name} url={repo.html_url} description={repo.description} key={repo.id} />);    
  } else {
    repos = <NoRepos />
  }

  return(
    <ul className="repo-list">
      {repos}
    </ul> 
  );
}

RepoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RepoList;