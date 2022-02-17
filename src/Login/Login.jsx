import React from "react";
//CSS
import "./Login.css";
import Modal from "./Modal";
// vars
const mode = "login";
var propy = "";

const OnLogin = () => {
  var getUrl = window.location;
  var Url = "";
  var k = 2;
  var funqciebi=(email, name)=>{
    console.log(email+" "+name)
  }
  if (propy == "signup") {
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const createpassword = document.getElementById("createpassword");
    const repeatpassword = document.getElementById("repeatpassword");

    switch (true) {
      case createpassword.value !== repeatpassword.value:
        Modal("Passwords don't match");
        break;
      case createpassword.value.length < 8:
        Modal("minimum length 8");
        break;
      case !(/[A-Z]/.test(createpassword.value)):
        Modal("password must contain a CAPITAL");
        break;
      case !(/\d/.test(createpassword.value)):
        Modal("password must contain a NUMBER");
        break;
      default:
        //Redirect
        Url = getUrl.protocol + "//" + getUrl.host + "/Login";
        window.location.href = Url;
        // DAtabase save 
        break;
    }

    
  } else {
    const name = document.getElementById("username"); //OR email
    const password = document.getElementById("password");
    
    console.log(password.value + " " + name.value);
    Modal("User doesn't exists");
    //Redirect
    //  Url = getUrl.protocol + "//" + getUrl.host + "/";
    // window.location.href = Url;
    
  }
  

   
   }

class LoginComponent extends React.Component {
  constructor (props) {
    
    super(props);
    this.state = {
      mode: this.props.mode,
    };
  }
  toggleMode() {
    var newMode = this.state.mode === "login" ? "signup" : "login";
    propy = newMode;
    this.setState({mode: newMode});
  }
  render() {
    return (
      <>
      <div>
        <div
          className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`}
        ></div>
        <section className={`form-block form-block--is-${this.state.mode}`}>
          <header className="form-block__header">
            <h1>{this.state.mode === "login" ? "Welcome back!" : "Sign up"}</h1>
            <div className="form-block__toggle-block">
              <span>
                {this.state.mode === "login" ? "Don't" : "Already"} have an
                account? Click here &#8594;
              </span>
              <input
                id="form-toggler"
                type="checkbox"
                onClick={this.toggleMode.bind(this)}
              />
              <label htmlFor="form-toggler"></label>
            </div>
            </header>
            <div id="modal"></div>
          <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
        </section>
      </div>
      
      </>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-block__input-wrapper">
          <div className="form-group form-group--login">
            <Input
              type="text"
              id="username"
              label="user name or Email"
              disabled={this.props.mode === "signup"}
              required={this.props.mode === "login"}
            />
            <Input
              type="password"
              id="password"
              label="password"
              disabled={this.props.mode === "signup"}
              required={this.props.mode === "login"}
            />
          </div>
          <div className="form-group form-group--signup">
            <Input
              type="text"
              id="fullname"
              label="full name"
              disabled={this.props.mode === "login"}
              required={this.props.mode === "signup"}
            />
            <Input
              type="email"
              id="email"
              label="email"
              disabled={this.props.mode === "login"}
              required={this.props.mode === "signup"}
            />
            <Input
              type="password"
              id="createpassword"
              label="password"
              disabled={this.props.mode === "login"}
              required={this.props.mode === "signup"}
            />
            <Input
              type="password"
              id="repeatpassword"
              label="repeat password"
              disabled={this.props.mode === "login"}
              required={this.props.mode === "signup"}
            />
          </div>
        </div>
        <button className="button button--primary full-width" type="submit">
          {this.props.mode === "login" ? "Log In" : "Sign Up"}
        </button>
      </form>
    );
  }
}

const Input = ({ id, type, label, disabled, required}) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    disabled={disabled}
    required={required}
   
  />
);
const Login = () => (
  <div className={`app app--is-${mode}`}>
    <LoginComponent
      mode={mode}
      onSubmit={function (event) {
              event.preventDefault();
                OnLogin();
      }}
    />
  </div>
);
export default Login;