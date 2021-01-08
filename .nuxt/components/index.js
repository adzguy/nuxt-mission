export { default as Logo } from '../../components/Logo.vue'
export { default as PlanetList } from '../../components/PlanetList.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyPlanetList = import('../../components/PlanetList.vue' /* webpackChunkName: "components/PlanetList" */).then(c => c.default || c)
