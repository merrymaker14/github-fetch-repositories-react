import React from 'react';
import PropTypes from 'prop-types';

type RepoProps = {
  url: string,
  name: string,
  description?: string
}

const Repo = ({ url, name, description }: RepoProps) => (
  <p>  
    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
    <span>{description}</span>
  </p>
);

Repo.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default Repo;