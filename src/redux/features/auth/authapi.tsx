import { baseApi } from "../../api/baseapi";

const authApi =baseApi.injectEndpoints({
    endpoints: (builder) => ({
        adduser:builder.mutation({
            query:(data)=>({
                url:'/auth/login',
                method:'POST',
                body:data
            })
        })
      }),
});
export const {useAdduserMutation}=authApi