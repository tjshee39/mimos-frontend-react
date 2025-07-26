import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetPostByIdQuery } from "@core/service/post.service"

const PostList: React.FC = () => {
  const { id } = useParams();
  const postId = id ? Number(id) : 0
  const { data: post, isLoading, error } = useGetPostByIdQuery(postId, {
    skip: !id,
  })

  return (
    <div className="contents portlet port-chat" style={{ height: '100vh' }}>
      { post && (
        <div className="pt-wrap timetable">
          <div className="pt-box today">
            <div className="date" dangerouslySetInnerHTML={{ __html: post.title }} />
            <div className="time_list">
              <div className="t_list">
                <div className="top">
                  <div className="time">{ post.author }</div>
                  <div className="name">{ post.regDate }</div>
                </div>
                <div className="btm">
                  <div className="subject" dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) }
    </div>
  )
}

export default PostList