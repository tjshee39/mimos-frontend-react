import React from 'react'
import { useGetPostsQuery } from "@core/service/post.service"
import { useNavigate } from "react-router-dom"

const PostList: React.FC = () => {
  const navigator = useNavigate()
  const { data: posts, isLoading, error } = useGetPostsQuery()

  const getPostDetail = (postId: number): void => {
    navigator(`/main/post/${postId}`)
  }

  return (
    <div className="contents portlet port-chat" style={{ height: '100vh' }}>
      <div className="pt-title">게시물 목록</div>
      <div>
        { posts?.map((post) => (
          <div
            key={ post.id } className="pt-box timetable"
            style={{ marginBottom: '10px' }} onClick={ () => getPostDetail(post.id) }
          >
            <div className="t_list">
              <div className="top">
                <div className="time" dangerouslySetInnerHTML={{ __html: post.title }} />
                <div className="name">{ post.author }</div>
              </div>
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}

export default PostList