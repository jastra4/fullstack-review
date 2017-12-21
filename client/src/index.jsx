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
  }

  search (term) {
    console.log(`${term} was searched`);
    term = {user: term};
    $.ajax({
      type: 'POST',
      url: '/repos',
      data: term
    })
    .done(function() {
      console.log( "posted successfully" );
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

  componentDidMount() {
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