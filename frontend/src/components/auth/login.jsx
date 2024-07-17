import { useDispatch, useSelector } from "react-redux";
import { useAddLoginUserMutation } from "../../redux/user/userApiSlice"
import { clearLoginUser, setLoginUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loginUser} = useSelector(state => state.user);
    const [addLoginUser] = useAddLoginUserMutation();   
    const handleChange = (e) => {
       const {name,value} = e.target;
       dispatch(setLoginUser({name,value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(loginUser.username == "" || loginUser.password == ""){
            toast.warning('Please fill all the fields');
            return;
        }
        try{
            const response = await addLoginUser(loginUser);
            toast.success(response.data.message);
            localStorage.setItem("token", response.data.token);
            dispatch(clearLoginUser());
            navigate("/");
        } catch (error) {
            toast.error("Invalid username and password");
        }
       
    }
 
  return (
    <div>
        <form className="flex flex-col gap-y-4" action="" onSubmit={handleSubmit}>
            <input className="border border-black p-2 rounded-md" placeholder="Enter your name" type="text" name="username" value={loginUser.username} onChange={handleChange}/>
            <input className="border border-black p-2 rounded-md" placeholder="Enter your password" type="password" name="password" value={loginUser.password} onChange={handleChange} />
            <input type="submit" value="Login" className="border border-black bg-black text-white hover:text-black hover:bg-white duration-300" />
        </form>
    </div>
  )
}
export default Login