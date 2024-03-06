import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TSidebarPath={
    key:string,
    label:ReactNode,
    children?:TSidebarPath[]
}
type TUserPath={
    name:string,
    path?:string,
    element?:ReactNode,
    children?:TUserPath[]
}
export const sidebarItemsGenarators = (item:TUserPath[],role:string) => {
    const SidebarItems=item.reduce((acc:TSidebarPath[],item)=>{
        if(item.path&&item.name){
            acc.push({
                key:item.name,
                label:<NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
            })
        }
        if(item.children){
            acc.push({
                key:item.name,
                label:item.name,
                children:item.children.map((child)=>({
                    key:child.name,
                label:<NavLink to={`/${role}/${child.path}`}>{item.name}</NavLink>
                }))
            })
        }
        return acc
    },[]);
    return SidebarItems
};

