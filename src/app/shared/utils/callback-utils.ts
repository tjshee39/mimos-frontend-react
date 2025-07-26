type ModalFuncMap = {
  callback?: () => void
  cancel?: () => void
}

const modalFuncMap = new Map<string, ModalFuncMap>()

export const setModalFunc = (id: string, func: ModalFuncMap) => {
  modalFuncMap.set(id, func)
}

export const getMoalFunc = (id: string): ModalFuncMap | undefined => {
  return modalFuncMap.get(id)
}

export const runModalCallback = (id: sting) => {
  const func = getMoalFunc(id)
  if (func?.callback) {
    func.callback()
  }
}

export const runModalCancel = (id: sting) => {
  const func = getMoalFunc(id)
  if (func?.cancel) {
    func.cancel()
  }
}

export const removeModalFunc = (id: string) => {
  modalFuncMap.delete(id)
}

export const removeAllModalFunc = () => {
  modalFuncMap.clear()
}