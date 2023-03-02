import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ul>
    {props.repos.map(repo=> <li key={repo.id.toString()}><a href={repo.html_url}>{repo.name}</a></li>
    )}
    </ul>
  </div>
)

export default RepoList;