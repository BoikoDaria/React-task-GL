import React from 'react';
import './App.css';
import './data-providers/getUser'
import getUsers from './data-providers/getUser';
import RepoList from './components/RepoList';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import getRepo from './data-providers/getRepo';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {items: []};
  }

  componentDidMount(){
    getUsers().then((items) => {
      this.setState = ({items});
    })
  }
  render () {
    const {items} = this.state;
    return (
        <div className='main-container'>
          <SideMenu item = {{}}/>
          <Header/>
          <RepoList items={items}/>
        </div>
    );
  }
}

export default App;
