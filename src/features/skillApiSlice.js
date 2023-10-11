import {createSelector, createEntityAdapter} from '@reduxjs/toolkit'
import { apiSlice } from '../app/api/apiSlice'

const skillAdapter = createEntityAdapter({})

const initialState = skillAdapter.getInitialState()

export const skillApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSkills: builder.query({
            query: initialData => ({
                url: '/skills',
                method: 'GET',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                }
            }),
            
            transformResponse: resposnseData => {
                const loadedSkills = resposnseData.map(skill => {
                    skill.id = skill._id
                    return skill
                })
                return skillAdapter.setAll(initialState, loadedSkills)
            },
            providesTags: (result, error, arg) => {
                if(result?.ids){
                    return [
                        {type: 'Skill', id: 'LIST'},
                        ...result.ids.map(id => ({type: 'Skill', id}))
                    ]
                }else{
                    return [{type: 'Skill', id: 'LIST'}]
                }
            }
         }),
         addNewSkill: builder.mutation({
            query: (initialData) => ({
                url: '/skills',
                method: 'POST',
                body: {...initialData},

            }),
            invalidatesTags: [
                {type: 'Skill', id: 'LIST'}
            ]
         }),
         deleteSkill: builder.mutation({
            query: ({id}) => ({
                url: `/skills`,
                method: 'DELETE',
                body: {id}
            }),
            invalidatesTags: (result, error, arg) => [
                {type: 'Skill', id: arg.id}
            ]
         })
    })
})

export const {
    useGetSkillsQuery,
    useAddNewSkillMutation,
    useDeleteSkillMutation
}= skillApiSlice

const selectSkillResult = skillApiSlice.endpoints.getSkills.select()

const selectSkillData = createSelector(
    selectSkillResult,
    skillResult => skillResult.data
)

export const {
    selectAll: selectAllSkills,
    selectById: selectSkillById,
    selectIds: selectSkillIds
} = skillAdapter.getSelectors(state => selectSkillData(state) ?? initialState)