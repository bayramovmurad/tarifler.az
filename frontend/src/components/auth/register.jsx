import { useDispatch, useSelector } from "react-redux";
import { useAddRegisterUserMutation } from "../../redux/userApiSlice"
import { setRegisterUser } from "../../redux/userSlice";

const Register = () => {
    const dispatch = useDispatch();
    const { registerUser } = useSelector(state => state.user);
    const [addRegisterUser] = useAddRegisterUserMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setRegisterUser({ name, value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addRegisterUser(registerUser);
            alert(response.data.message);
        } catch (error) {
            console.error("Registration error:", error);
            alert("Registration failed. Please try again.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="border-black border" name="username" type="text" value={registerUser.username} onChange={handleChange} />
            <input className="border-black border" name="password" type="password" value={registerUser.password} onChange={handleChange} />
            <input className="border-black border" type="submit" />
        </form>
    )
}
export default Register