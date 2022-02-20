import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Homepage} from "./pages/homepage/Homepage";
import {ShopPage} from "./pages/shop/Shop";
import './App.css';
import {Header} from "./components/header/header";
import {SignInUp} from "./pages/sign-in-up/SignInUp";
import {auth, createUserProfileDocument} from './firebase/firebase.utils'


export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user});
      if(userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot( snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState({currentUser: userAuth});
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/signIn' element={<SignInUp/>} />
          {/*<Route path='/questions' element={<Questions/>} />*/}
        </Routes>
      </div>
    );
  }
}

export default App;
