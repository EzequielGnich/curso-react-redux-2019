import React from 'react'
import ReactDOM from 'react-dom'

// Primeiro compoenente simples
// import First from './components/first'

// Componente que recebe propriedades
// import ComponentWithProps from './components/componentWithProps'


/* importando componentes que foram exportados com export const _________
 * import { BoaNoite, BoaTarde } from './components/multiplesElements'
 * const rootElement = [
 * <BoaNoite key="BoaNoite" name="Ezequiel" />,
 * <BoaTarde key="BoaTarde" name="Ezequiel" />
 * ]
 */

/* Importando elementos que foram exportados com export default {}
 *import Multi from './components/multiplesElements'
 *
 *const rootElement = [
 *  <Multi.BoaNoite key="BoaNoite" name="Ezequiel" />,
 *  <Multi.BoaTarde key="BoaTarde" name="Ezequiel" />
 *]
 */

ReactDOM.render(rootElement, document.getElementById('root'))