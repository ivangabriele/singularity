import { Icon, IconProps } from './Icon'

import type { HTMLAttributes } from 'react'

/**
 * @see https://iconmonstr.com/sort-16-svg/
 */
const SortAscSvg = (props: HTMLAttributes<SVGElement>) => (
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6
22l6-8h-4v-12h-4v12h-4l6 8zm11.694-19.997h2.525l3.781 10.997h-2.421l-.705-2.261h-3.935l-.723
2.261h-2.336l3.814-10.997zm-.147 6.841h2.736l-1.35-4.326-1.386 4.326zm-.951
11.922l3.578-4.526h-3.487v-1.24h5.304v1.173l-3.624 4.593h3.633v1.234h-5.404v-1.234z"
    />
  </svg>
)

export const SortAsc = (props: IconProps) => <Icon as={SortAscSvg} {...props} />
