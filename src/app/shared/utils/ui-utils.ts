import React from 'react'
import { store } from '../../core/slices/store'
import { openLayerPopup, closeLayerPopup, closeAllLayerPopups, ModalParams } from '../../core/slices/ui-slice'
import { merge } from 'lodash'
import { setModalFunc } from './callback-utils'

const views = import.meta.glob('@components/*.tsx')

const Ui = {
  getComponent: (path: string): React.LazyExoticComponent<React.ComponentType<any>> | null => {
    const matched = Object.entries(views).find(([key]) => key.includes(path))

    if (!matched) return null

    return React.lazy(matched[1] as () => Promise<{ default: React.ComponentType<any> }>)
  },
  openLayerPopup: (path: string, params: ModalParams, callback?: () => void, cancel?: () => void) => {
    const layerPopups = store.getState().ui.layerPopups

    // 오류 팝업 중복 호출 방지
    if (document.querySelector('.pop_inner.error')) {
      return
    }

    // 오류 팝업 중복 호출 방지
    if (layerPopups.some(popup => popup.path === 'components/UiError') && path === 'components/UiError') {
      return
    }

    // 세션 팝업 중복 호출 방지
    if (layerPopups.some(popup => popup.path === 'components/UiSessionTimeout') && path === 'components/UiSessionTimeout') {
      return
    }

    const option = {
      id: crypto.randomUUID(),
      type: 'layerPopup',
      active: true,
      dimClose: true,
      dimIndexUpdate: true,
      zIndex: Ui.topPopupIndex(),
    }

    params = merge(option, params)

    store.dispatch(openLayerPopup({
      path: path,
      params: params,
    }))

    if (callback || cancel) {
      setModalFunc(option.id, { callback, cancel })
    }

    if (!document.querySelector('body')?.classList.contains('hidden')) {
      document.querySelector('body')?.classList.add('hidden')
    }

    layerPopups.forEach((layerPopup) => {
      console.log('layerPopups forEach', layerPopup)
      if (layerPopup.path !== path) {
        layerPopup.params.active = false
      }
    })
  },
  closeLayerPopup: () => {
    store.dispatch(closeLayerPopup())
  },
  closeAllLayerPopup: () => {
    store.dispatch(closeAllLayerPopups())
  },
  /* 최상단에 위치한 layerPopups index */
  topPopupIndex: () => {
    const popLen: number = store.getState().ui.layerPopups.length
    let idx = 101

    if (popLen > 0) {
      idx += popLen * 2
    }

    return idx
  },
}

export default Ui