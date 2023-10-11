import {createSelector, createEntityAdapter} from '@reduxjs/toolkit'
import { apiSlice } from '../app/api/apiSlice'

const userAdapter = createEntityAdapter({})

const initialState = userAdapter.getInitialState()

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: initialData => ({
                url: '/users',
                method: 'GET',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                }
            }),
            transformResponse: resposnseData => {
                const loadedUsers = resposnseData.map(user => {
                    user.id = user._id
                    return user
                })
                return userAdapter.setAll(initialState, loadedUsers)
            },
            providesTags: (result, error, arg) => {
                if(result?.ids){
                    return [
                        {type: 'User', id: 'LIST'},
                        ...result.ids.map(id => ({type: 'User', id}))
                    ]
                }else{
                    return [{type: 'User', id: 'LIST'}]
                }
            }
         }),
         addNewUser: builder.mutation({
            query: initialData => ({
                url: '/users',
                method: 'POST',
                body: {...initialData},

            }),
            invalidatesTags: [
                {type: 'User', id: 'LIST'}
            ]
         }),
         updateUser: builder.mutation({
            query: initialData => ({
                url: '/users',
                method: 'PATCH',
                body: {...initialData}
            }),
            invalidatesTags: (result, error, arg) => [
                {type: 'User', id: arg.id}
            ]
         })
    })
})

export const {
    useGetUsersQuery,
    useAddNewUserMutation,
    useUpdateUserMutation
}= userApiSlice

const selectUserResult = userApiSlice.endpoints.getUsers.select()

const selectUserData = createSelector(
    selectUserResult,
    userResult => userResult.data
)

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds
} = userAdapter.getSelectors(state => selectUserData(state) ?? initialState)