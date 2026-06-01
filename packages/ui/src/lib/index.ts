export * from './utils'
export * from './registry'

import { PLAYGROUND_REGISTRY } from './registry'

export type Component = (typeof PLAYGROUND_REGISTRY)[keyof typeof PLAYGROUND_REGISTRY]

const registryItems = Object.values(PLAYGROUND_REGISTRY) as Component[]

export function getBlocks() {
  return registryItems.filter(item => item.type === 'registry:block' || item.type === 'widget')
}

export function getComponents() {
  return registryItems.filter(item => item.type === 'registry:component' || item.type === 'custom-component')
}

export function getUIPrimitives() {
  return registryItems.filter(item => item.type === 'registry:ui' || item.type === 'ui-primitive')
}
