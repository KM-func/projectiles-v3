import SignupForm from "./SignupForm";

export default function LoginSignup(props){
    return(
        <div className="login-signup">
            <div>
                {/* insert carousel here */}
                <h1>ProjecTiles</h1>
                <p>Like a silver bullet piercing through all your project management needs</p>
            </div>
            {/* add conditional if signup or login form appears */}
            <div className="form-container">
                <SignupForm/>
            </div>
        </div>
    )
}