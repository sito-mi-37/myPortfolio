import {createSelector, createEntityAdapter} from '@reduxjs/toolkit'
import { apiSlice } from '../app/api/apiSlice'

const contactAdapter = createEntityAdapter({})

const initialState = contactAdapter.getInitialState()

export const contactApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => ({
                url: '/contact',
                method: 'GET',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                }
            }),
            
            transformResponse: resposnseData => {
                const loadedContacts = resposnseData.map(contact => {
                    contact.id = contact._id
                    return contact
                })
                return contactAdapter.setAll(initialState, loadedContacts)
            },
            providesTags: (result, error, arg) => {
                if(result?.ids){
                    return [
                        {type: 'Contact', id: 'LIST'},
                        ...result.ids.map(id => ({type: 'Contact', id}))
                    ]
                }else{
                    return [{type: 'Contact', id: 'LIST'}]
                }
            }
         }),
         addNewContact: builder.mutation({
            query: initialData => ({
                url: '/contact',
                method: 'POST',
                body: {...initialData},

            }),
            invalidatesTags: [
                {type: 'Contact', id: 'LIST'}
            ]
         })
    })
})

export const {
    useGetContactsQuery,
    useAddNewContactMutation
}= contactApiSlice

const selectContactResult = contactApiSlice.endpoints.getContacts.select()

const selectContactData = createSelector(
    selectContactResult,
    contactResult => contactResult.data
)

export const {
    selectAll: selectAllContacts,
    selectById: selectContactById,
    selectIds: selectContactIds
} = contactAdapter.getSelectors(state => selectContactData(state) ?? initialState)