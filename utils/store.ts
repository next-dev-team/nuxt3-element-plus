export const setStore = <IStore>(reactiveState: IStore, p: Partial<IStore>) => {
  Object.keys(p).forEach((item) => {
    reactiveState[item] = p?.[item]
  })
}
