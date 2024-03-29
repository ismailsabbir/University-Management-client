import { Input } from "antd";
import { Controller} from "react-hook-form";
type TInputProps={
    type:string;
    name:string;
    label?:string
}
const PHinput = ({type,name,label}:TInputProps) => {
    return  ( 
      <div>
      {label?label:null}
      <Controller name={name} render={({field})=>
    <Input {...field} type={type} id={name}/>
    }/>
        
      </div>
    )
};

export default PHinput;