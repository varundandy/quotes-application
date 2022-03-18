import AppDetails from "./../data/appDetails";
import logo from "./../logo.svg";


const Header = (props) => {
  return (<>
 <header className="App-header1">
      <div className="container1">
      <h1 className="headline-primary1">{AppDetails.title}</h1>
       Author:  {props.formatter(AppDetails.me)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
        </div>
      </header>
  </>);
};


export default Header;