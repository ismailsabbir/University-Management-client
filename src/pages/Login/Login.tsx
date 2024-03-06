import { FieldValues } from "react-hook-form";
import { useAdduserMutation } from "../../redux/features/auth/authapi";
import { useAppDispatch } from "../../redux/hook";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { verifyJwtTiken } from "../../utils/verifyJwtTiken";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import PHForm from "../../components/form/PHForm";
import PHinput from "../../components/form/PHinput";
import { Row } from "antd";
const Login = () => {
    const navigate=useNavigate();
    const[login]=useAdduserMutation();
    const dispatch=useAppDispatch();
    const onSubmit=async(data:FieldValues)=>{
        console.log(data);
        const toastid=toast.loading('logging in',{duration:2000});
        try{
            const userInfo = {
                id: data.id,
                password: data.password,
              };
              const res=await login(userInfo).unwrap();
              const user=verifyJwtTiken(res.data.accessToken) as TUser;
              dispatch(setUser({user:user,token:res.data.accessToken}));
              toast.success('Login Sucessfull',{id:toastid,duration:2000})
              navigate(`/${user.role}/dashbord`)
        }
        catch(error){
           toast.error('something went Wrong',{id:toastid,duration:2000})
        }
    }
    return (
        <Row justify='center' align='middle' style={{height:'100vh'}}>
        <PHForm onSubmit={onSubmit}>
            <h1>Login</h1>
            <PHinput type='text' name='id' label='ID: '></PHinput>
            <PHinput type='text' name='password' label='Password:'></PHinput>
            <button type="submit">login</button>
            <Toaster position="top-center" />
        </PHForm>
        </Row>

    );
};

export default Login;