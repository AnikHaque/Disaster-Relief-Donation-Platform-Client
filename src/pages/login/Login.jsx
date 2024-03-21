

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const form = event. target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
  return (
    <div>
          <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex">
                  
                  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                      <form onSubmit={handleLogin} className="card-body">
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Email</span>
                              </label>
                              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Password</span>
                              </label>
                              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                              <label className="label">
                                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                              </label>
                          </div>
                          <div className="form-control mt-6">
                         
                              <input className="btn btn-primary" type="submit" value='Login'></input>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Login