import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { removeAllModalFunc, removeModalFunc } from '@shared/utils/callback-utils'

interface UiState {
  layerPopups: LayerPopup[]
}

export interface ModalParams {
  id?: string
  type?: string
  active?: boolean
  dimClose?: boolean
  dimIndexUpdate?: boolean
  zIndex?: number
}

export interface LayerPopup {
  path: string
  params: ModalParams
}

const initialState: UiState = {
  layerPopups: [],
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLayerPopups: (state, action: PayloadAction<LayerPopup[]>) => {
      state.layerPopups = action.payload
    },
    openLayerPopup: (state, action: PayloadAction<LayerPopup>) => {
      state.layerPopups.push(action.payload)
    },
    closeLayerPopup: (state) => {
      if (state.layerPopups.length > 0) {
        const targetPopup = state.layerPopups.pop()
        removeModalFunc(targetPopup!.params.id!)
      }
    },
    closeAllLayerPopups: (state) => {
      removeAllModalFunc()
      state.layerPopups = []
    }
  }
})

export const { openLayerPopup, closeLayerPopup, closeAllLayerPopups } = uiSlice.actions
export default uiSlice.reducer