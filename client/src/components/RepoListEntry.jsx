import React from 'react';

const RepoListEntry = ({repo}) => ( // why can't this work if repo does not get destructured?
	<div> Owned by: {repo.owner}
		<div className="repo-list-id"> ID: {repo.id} </div>
		<div className="repo-list-name"> Name: {repo.name} </div>
		<div className="repo-list-description"> Descritpion: {repo.description} </div>
		<div className="repo-list-url"> Url: {repo.html_url} </div>
		<div className="repo-list-create-at"> Created on: {repo.created_at} </div>
		<div className="repo-list-updated-at"> Last updated: {repo.updated_at} </div>
		<div className="repo-list-score"> Score: {repo.score} </div>
  </div>
)

export default RepoListEntry;