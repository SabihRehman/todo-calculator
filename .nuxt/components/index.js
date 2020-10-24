export { default as Calculator } from '../../components/Calculator.vue'
export { default as Header } from '../../components/Header.vue'
export { default as ListItems } from '../../components/ListItems.vue'

export const LazyCalculator = import('../../components/Calculator.vue' /* webpackChunkName: "components/Calculator" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyListItems = import('../../components/ListItems.vue' /* webpackChunkName: "components/ListItems" */).then(c => c.default || c)
