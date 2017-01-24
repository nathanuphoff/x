import { renderElement } from './renderElement'

export default function(node, template) {
  return function(store, abstract) {
    return renderElement(node, template, abstract || {
      node,
      type: null,    
      vdom: [],    
      attributes: {},
    }, store)
  }
}