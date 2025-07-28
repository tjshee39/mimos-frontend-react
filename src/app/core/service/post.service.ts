import { api } from '@core/service/base/base-api'
import { Post } from "@core/models/Post"

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => `/post/list`,
      // providesTags: ['User'],
      // transformResponse: (baseQueryReturnValue: CommonResponse<Post[]>) => {
      //   return baseQueryReturnValue.response
      // }
    }),
    getPostById: build.query<Post, number>({
      query: (postId) => `post/${postId}`
    }),
    // getPostById: build.query<Post, Post>({
    //   query: (body: Post) => ({
    //     url: `post/${body.id}`,
    //     method: 'POST',
    //     body,
    //   })
    // })
  }),
  overrideExisting: false,
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi
