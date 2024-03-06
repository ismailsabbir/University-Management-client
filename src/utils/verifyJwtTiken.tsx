import { jwtDecode } from "jwt-decode";

export const verifyJwtTiken = (token:string) => {
    return jwtDecode(token);
};
