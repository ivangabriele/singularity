import { Icon, IconProps } from './Icon'

import type { HTMLAttributes } from 'react'

/**
 * @see https://iconmonstr.com/sort-14-svg/
 */
const SortDescSvg = (props: HTMLAttributes<SVGElement>) => (
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 22l6-8h-4v-12h-4v12h-4l6 8zm18-11v2h-8v-1.984l.009-.012 5.086-7.004h-5.095v-1.993h7.985v1.887l-5.318 7.106h5.333zm-4.946 4.011h1.586l2.374 6.989h-1.521l-.442-1.436h-2.471l-.455 1.436h-1.466l2.395-6.989zm-.093 4.348h1.719l-.848-2.75-.871 2.75z" />
  </svg>
)

export const SortDesc = (props: IconProps) => <Icon as={SortDescSvg} {...props} />
