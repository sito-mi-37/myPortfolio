import { apiSlice } from "../../app/api/apiSlice";
import { logOut, setCredentials } from "./authSlice";


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: {...credentials}
            })
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}){
                try{
                    await queryFulfilled
                    dispatch(logOut())
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState())
                    }, 1000)
                } catch(err) {
                    // console.log(err)
                }
            }
        }),
        refresh: builder.mutation({
            query: () => ({
                url: '/refresh',
                method: 'GET'
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled, getState}){
                try {
                    const {data} = await queryFulfilled
                    dispatch(setCredentials({accessToken: data}))
                } catch (err) {
                    // console.log(err)
                }
            }

        })
        
        
    })
})

export const {
    useLoginMutation,
    useSendLogoutMutation,
    useRefreshMutation
} = authApiSlice