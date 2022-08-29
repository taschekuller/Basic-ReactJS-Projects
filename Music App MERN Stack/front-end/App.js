import './App.css';
import NavBar from './components/NavBar';
import React from 'react'
import MusicList from './components/MusicList'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Topnews from './components/topnews'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends React.Component {
  // const [usernameReg, setUsernameReg] = useState('')

  constructor (props){
    super(props) 
    this.state={
    banner:[],
    music:[],
    topnews:[]
    }
  }
  componentDidMount(){
    Promise.all([
    fetch("http://localhost:9000/banner"),
    fetch("http://localhost:9000/music"),
    fetch("http://localhost:9000/topnew")

  ])
  .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
   .then(([data1, data2, data3]) => this.setState({
    banner: data1, 
    music: data2,
    topnews: data3
}));
}
  // callBannerAPI(){
  //   fetch("http://localhost:9000/banner")
  //   .then(res1 => res1.text ())
  //   .then(res1 => this.setState({banner: res1}));
  // }
  // callMusicAPI(){
  //   fetch("http://localhost:9000/music")
  //   .then(res2 => res2.text ())
  //   .then(res2 => this.setState({music: res2}));
  // }
  // componentDidMount(){
  //   this.callBannerAPI();
  //   this.callMusicAPI();    
  // }


  

  // state = {
  //     music: [],
  //     banner: []
  //     // top5news:[]
  // }

  // async componentDidMount(){
  //   const bannerURL = "http://localhost:9000/banner"
  //   const bannerResponse = await fetch(bannerURL)
  //   const bannerData = await bannerResponse.json()
  //   this.setState({banner:bannerData})

  //   console.log(bannerData)
    
  //   const musicURL = "http://localhost:9000/music"
  //   const musicResponse = await fetch(musicURL)
  //   const musicData = await musicResponse.json()
  //   this.setState({music:musicData})

  //   console.log(musicData)

  // }
  
  render() {
    return (
      <Router>

        <div className="App">
        
        <NavBar />
        <Switch>
        <Route exact path="/" render={() =>(
            <>
            
          {/* <Banner 
            banners={this.state.banner}
          /> */}
          <Topnews 
            topnews={this.state.topnews}
          />
          <MusicList 
            musics={this.state.music}
          />
        
          </>
          )} >
          </Route>

          <Route path="/login" render={() =>(
            
            <Login />
            
            )} />
          </Switch>
        
        <Footer />
        
      </div>
      
      </Router>
    );
  }

}
export default App;
