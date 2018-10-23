import { form } from './base'

export async function makeAsset (asset, options) {
  return form('/assets', {
    body: {
      file: asset,
      ...options
    }
  })
}
