import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
	<div>
	  <div>
	    <h4> Repo List </h4>
	    There are {props.repos.length} repos.
	  </div>
	  <div className="repo-list">    
	    { props.repos.map((repo, index) => 
	      <RepoListEntry key={index} repo={repo} />
	    )}
	  </div>
  </div>
)

export default RepoList;