import React, {Component} from 'react';
import UserCardList from '../components/UserCardList';
import NavButtons from '../components/NavButtons';
import SearchBar from '../components/SearchBar';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      searchField: '',
      page: 1
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  pageChangeMinus = () => {
    if (this.state.page >= 2)
    this.setState({ page: this.state.page-1});
  }

    pageChangePlus = () => {
    if (this.state.page <= 8)
    this.setState({page: this.state.page+1});
  }

  componentDidMount() {
    if (this.state.users.length===0)
      fetch(`https://swapi.co/api/people/?page=${this.state.page}`)
      .then(result=> result.json())
      .then(arrayUsers => {this.setState({users: arrayUsers.results})});
}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      fetch(`https://swapi.co/api/people/?page=${this.state.page}`)
        .then(result=> result.json())
        .then(arrayUsers => {this.setState({users: arrayUsers.results})});
    }
  }

  render(){
    const { users, searchField,page } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return users.length > 0 ? (
      <div className='tc'>
      <h1>StartWars Characters Project!</h1>
        <div className='flex flex-wrap justify-center'>
          <SearchBar searchChange= {this.onSearchChange}/>
          <NavButtons pageChangePlus={this.pageChangePlus} 
          pageChangeMinus={this.pageChangeMinus}
          />
        </div>
      <UserCardList users={filteredUsers}
      page={page}
      />
      </div>
      ) : 
    (<h1>Loaddding</h1>)
  }
}
export default App;
