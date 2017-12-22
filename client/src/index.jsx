import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListEntry from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.getRepos = this.getRepos.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
    term = {user: term};
    $.ajax({
      type: 'POST',
      url: '/repos',
      data: term
    })
    .done(() => { // arrow functions dont mess up this scope
      // call get
      this.getRepos();
      console.log( "posted successfully ", this );
    })
    .fail(function() {
      console.log( "error" );
    });
  }

  update(data) {
    this.setState({
      repos: data
    });
  }

  getRepos() {
    $.ajax({
      type: 'GET',
      url: '/repos'
    })
    .done((data) => {
      console.log('loaded sucessfully: ', data);
      this.update(data);
    })
    .fail(function() {
      console.log( "error" );
    });    
  }

  componentDidMount() {
    this.getRepos();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
      
    </div>)
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));