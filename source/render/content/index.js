import { _document } from '../../_'

export function renderContent(parent, content, abstract = {}, store) {
  
  const createNode = !abstract.node || abstract.type
  const node = createNode ? document.createTextNode(content) : abstract.node
  
  if (abstract && abstract.type) parent.replaceChild(node, abstract.node)
  else if (createNode) parent.appendChild(node)
  else if (abstract.content !== content) node.nodeValue = content
  
  return { content, node }
  
}