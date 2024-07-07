import { useDispatch, useSelector } from "react-redux";
import { useAddRegisterUserMutation } from "../../redux/userApiSlice"
import { setCreateForm } from "../../redux/userSlice";

const Register = () => {
    const dispatch = useDispatch();
    const { createForm } = useSelector(state => state.user);
    const [addRegisterUser] = useAddRegisterUserMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setCreateForm({ name, value }));
    }
    console.log(createForm);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addRegisterUser(createForm);
            alert(response.data.message);
        } catch (error) {
            console.error("Registration error:", error);
            alert("Registration failed. Please try again.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="border-black border" name="username" type="text" value={createForm.username} onChange={handleChange} />
            <input className="border-black border" name="password" type="password" value={createForm.password} onChange={handleChange} />
            <input className="border-black border" type="submit" />
        </form>
    )
}
export default Register