import type { App } from '@backend'
import { createEdenTreatyReactQuery } from '@ap0nia/eden-react-query'

// @ts-expect-error 
export const eden = createEdenTreatyReactQuery<App>()
