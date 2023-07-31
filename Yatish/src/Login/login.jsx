
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

export default function LoginForm(props){
    
    
    return(
        <div className="layoutBox">
                <div className="Head">Login Form</div>
                <input className="rectangle1" type="text" placeholder="Enter Username"
                onChange={(e)=>{
                    props.handleChange(e,"username");
                }}
                value={props.value["username"]}
                 />
                <input className="rectangle1" type="text" placeholder="Enter Password" 
                
                onChange={(e)=>{
                    props.handleChange(e,"password");
                }}
                value={props.value["password"]}
                />
                {/* <Button variant="outlined"
                        style={{
                            width: "202.43185424804688px",
                            height: "74.34534454345703px",
                            top: "554.3180541992188px",
                            left: "704.2698974609375px",
                            borderRadius: "8px",
                            border: "0.5px"
}}
                > Login </Button> */}

                <button className='login-button'
                  onClick={()=>{
                    props.handleLoginClick();
                  }}
                >Login</button>
                <div className="Register">
                Don’t have an account?<Link to="/signup"> Register</Link>
                </div>
        </div>
    );
}