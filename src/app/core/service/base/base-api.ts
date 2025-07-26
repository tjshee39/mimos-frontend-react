import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_API_BASE_URL

export const api = createApi({
  reducerPath: 'api', // Redux slice 이름
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl
    // prepareHeaders: (headers, { getState }) => {
    // 토큰 인증 예시
    // const token = (getState() as any).auth?.token
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`)
    // }
    //   headers.set('Content-Type', 'application/json')
    //   return headers
    // },
  }),
  // tagTypes: ['User', 'Post', 'Product'], // 캐시 무효화에 사용될 tag 정의 (기능별로 확장)
  endpoints: () => ({}), // 실제 엔드포인트는 injectEndpoints에서 정의
})

