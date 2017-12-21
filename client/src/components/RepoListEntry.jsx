import React from 'react';

const RepoListEntry = ({repo}) => ( // why can't this work if repo does not get destructured?
  <div className="repo-list-id"> {repo.name} </div>
  <div className="repo-list-name"> {repo.name} </div>
  <div className="repo-list-description"> {repo.name} </div>
  <div className="repo-list-url"> {repo.name} </div>
  <div className="repo-list-create-at"> {repo.name} </div>
  <div className="repo-list-updated-at"> {repo.name} </div>
  <div className="repo-list-score"> {repo.name} </div>
)

export default RepoListEntry;