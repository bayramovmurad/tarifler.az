import { useDispatch, useSelector } from "react-redux";
import { useAddLoginUserMutation } from "../../redux/userApiSlice"
import { setLoginUser } from "../../redux/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const {loginUser} = useSelector(state => state.user);
    const [addLoginUser] = useAddLoginUserMutation();   
    const handleChange = (e) => {
       const {name,value} = e.target;
       dispatch(setLoginUser({name,value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await addLoginUser(loginUser);
            alert(response.data.message);
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Please try again.");
        }
       
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input className="border border-black" type="text" name="username" value={loginUser.username} onChange={handleChange}/>
            <input className="border border-black" type="password" name="password" value={loginUser.password} onChange={handleChange} />
            <input type="submit" />
        </form>
    </div>
  )
}
export default Login