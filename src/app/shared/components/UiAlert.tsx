import React from 'react'
import { ModalParams } from '../../core/slices/ui-slice'
import Ui from '../utils/ui-utils'
import { getMoalFunc, runModalCallback, runModalCancel } from '../utils/callback-utils'

interface Params extends ModalParams {
  title: string;
  content: string;
  cancelText?: string;
  confirmText?: string;
}

const UiAlert: React.FC<Params> = (props: Params) => {
  const popupId = props.id!

  /**
   * @name: closePopup
   * @description: 모달 닫기
   */
  const closePopup = () => {
    const func = getMoalFunc(popupId)
    if (func?.cancel) {
      runModalCancel(popupId)
    } else {
      Ui.closeLayerPopup()
    }
  }

  /**
   * @name: confirm
   * @description: 콜백 실행 후 모달 닫기
   */
  const confirm = () => {
    const func = getMoalFunc(popupId)
    if (func?.callback) {
      runModalCallback(popupId)
    } else {
      Ui.closeLayerPopup()
    }
  }

  return (
    <>
      <div className="pop_inner">
        { props.title &&
          <div className="pop_head" v-if="params.title">
            <h1 className="p__tit" dangerouslySetInnerHTML={{ __html: props.title }} />
          </div>
        }
        <div className="pop_con" dangerouslySetInnerHTML={{ __html: props.content }} />
        <div className="pop_btn">
          { props.cancelText &&
            <button type="button" className="btn-md-pm2 pop-close" onClick={ closePopup } v-if="params.cancel">
              { props.cancelText || '취소' }
            </button>
          }
          <button type="button" className="btn-md-pm1 confirm" onClick={ confirm }>
            { props.confirmText ? props.confirmText : '확인' }
          </button>
        </div>
      </div>
    </>
  )
}

export default UiAlert