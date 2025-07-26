import React, { Suspense, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../core/slices/store'
import Ui from '../utils/ui-utils'
import UiError from './UiError'

const UiModal: React.FC = () => {
  const popups = useSelector((state: RootState) => state.ui.layerPopups)
  const [dimmedIndex, setDimmedIndex] = useState<number>(0)

  useEffect(() => {
    const newIndex = popups.length - 1

    const zIndex = popups[newIndex]?.params?.zIndex
    setDimmedIndex(zIndex !== undefined ? zIndex - 1 : 999)
  }, [popups])

  /**
   * @name: closePopup
   * @description: dimmed 클릭해서 모달 닫기
   */
  const closePopup = () => {
    Ui.closeLayerPopup()
  }

  return (
    <>
      { popups.length > 0 && (
        <>
        <div className="dimmed active" onClick={ closePopup } style={{ zIndex: dimmedIndex }} role="none" />

        <div>
          { popups.map(popup => {
            const PopupComponent = Ui.getComponent(popup.path)
            return (
              <div
                className="mobile modal alert" key={ popup.params.id }
                style={{ zIndex: popup.params.zIndex ?? '' }}
              >
                <Suspense fallback={ <div/> }>
                  {
                    PopupComponent ? (
                      <PopupComponent
                        key={ popup.params.id }
                        { ...popup.params }
                      />
                    ) : (
                      <UiError
                        { ...popup.params }
                        title="페이지를 찾을 수 없습니다"
                        content="요청하신 페이지가 제거되었거나, 변경되어 찾을 수 없습니다.<br>찾으시려는 페이지를 다시 확인해 주세요."
                      />
                    )
                  }
                </Suspense>
              </div>
            )
          })}
        </div>
        </>
      )}
    </>
  )
}

export default UiModal