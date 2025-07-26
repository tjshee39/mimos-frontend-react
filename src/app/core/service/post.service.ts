import { api } from '@core/service/base/base-api'
import { Post } from "@core/models/Post"

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => `/post/list`,
      // providesTags: ['User'],
    }),
    getPostById: build.query<Post, number>({
      query: (postId) => `post/${postId}`
    })
  }),
  overrideExisting: false,
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi