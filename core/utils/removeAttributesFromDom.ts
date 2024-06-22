/* eslint-disable @typescript-eslint/ban-types */
import { cssValues, attributesToIgnoreFromDom } from './constants'

const removeAttributesFromDom = (attr: object) => {
  const rest = {}

  for (const tag in attr) {
    if (
      cssValues.indexOf(tag) === -1 && // remove css from dom
      attributesToIgnoreFromDom.indexOf(tag) === -1 // remove ignored attributes from dom
    ) {
      rest[tag] = attr[tag]
    }
  }

  return rest
}

export default removeAttributesFromDom
