import React from 'react'
import { ModalParams } from '../../core/slices/ui-slice'
import Ui from '../utils/ui-utils'

interface Params extends ModalParams {
  title: string
  content: string
}

const UiError: React.FC<Params> = (props: Params) => {
  /**
   * @name: closePopup
   * @description: dimmed 클릭해서 모달 닫기
   */
  const closePopup = () => {
    Ui.closeLayerPopup()
  }

  return (
    <div className="pop_inner error">
      { props.title &&
        <div className="pop_head">
          <h1 className="p__tit" dangerouslySetInnerHTML={{ __html: props.title }} />
        </div>
      }
      <div className="pop_con">
        <div className="alert_sm" dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
      <div className="pop_btn">
        <button type="button" className="btn-md-pm1 pop-close" onClick={ closePopup }>
          닫기
        </button>
      </div>
    </div>
  )
}

export default UiError