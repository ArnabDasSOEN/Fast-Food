export default function SignUpForm({loginClicked}) {

    return(
        <main className="SignUpForm">
            <h1> Sign up form</h1>
            <form action="/signup" method="POST">
                <div>
                    <label htmlFor="username"><h2>UserName:</h2></label>
                    <input type="text" name="username" id="username" placeholder="Please enter your username" required></input>
                </div>
                <div>
                    <label htmlFor="password"><h2>Password:</h2></label>
                    <input type="password" name="password" id="password" placeholder="Please enter your password" required></input>
                </div>
                <button>Sign up</button>
            </form>
            <p className="clickable" onClick={loginClicked}>go back to login</p>
        </main>
    )
}