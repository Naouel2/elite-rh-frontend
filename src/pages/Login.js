
import loginImage from "../images/loginImage.png"
import logo from "../images/logo.png"

const Login = () => {

    return (
        <div className="login-container">
            <div className="login-form">
            <img
              src={logo}
              alt="logo"
            />
            <h2>Login</h2>
            <form>
            <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email..."
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password..."
              />
              <button type="submit">Login</button>
            </form>
            </div>
            <div className="login-img">
            <img
              src={loginImage}
              alt="women"
            />
            </div>
        </div>
    )

}

export default Login;