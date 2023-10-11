import {createSelector, createEntityAdapter} from '@reduxjs/toolkit'
import { apiSlice } from '../app/api/apiSlice'

const projectAdapter = createEntityAdapter({})

const initialState = projectAdapter.getInitialState()

export const projectApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProjects: builder.query({
            query: () => ({
                url: '/projects',
                method: 'GET',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                }
            }),
            transformResponse: resposnseData => {
                const loadedProjects = resposnseData.map(project => {
                    project.id = project._id
                    return project
                })
                return projectAdapter.setAll(initialState, loadedProjects)
            },
            providesTags: (result, error, arg) => {
                if(result?.ids){
                    return [
                        {type: 'Project', id: 'LIST'},
                        ...result.ids.map(id => ({type: 'Project', id}))
                    ]
                }else{
                    return [{type: 'Project', id: 'LIST'}]
                }
            }
         }),
         addNewProject: builder.mutation({
            query: initialData => ({
                url: '/projects',
                method: 'POST',
                body: {...initialData},

            }),
            invalidatesTags: [
                {type: 'Project', id: 'LIST'}
            ]
         }),
         updateProject: builder.mutation({
            query: (initialData) => ({
                url: `/projects`,
                method: 'PUT',
                body: {...initialData}
            }),
            invalidatesTags: (result, error, arg) => [
                {type: 'Project', id: arg.id}
            ]
         }),
         deleteProject: builder.mutation({
            query: ({id}) => ({
                url: `/projects`,
                method: 'DELETE',
                body: {id}
            }),
            invalidatesTags: (result, error, arg) => [
                {type: 'Project', id: arg.id}
            ]
         })
    })
})

export const {
    useGetProjectsQuery,
    useAddNewProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation
}= projectApiSlice

const selectProjectResult = projectApiSlice.endpoints.getProjects.select()

const selectProjectData = createSelector(
    selectProjectResult,
    projectResult => projectResult.data
)

export const {
    selectAll: selectAllProjects,
    selectById: selectProjectById,
    selectIds: selectProjectIds
} = projectAdapter.getSelectors(state => selectProjectData(state) ?? initialState)