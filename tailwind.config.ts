import type { Config } from 'tailwindcss'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

import harmonyPalette from '@evilmartians/harmony/tailwind'


export default <Partial<Config>>{
  theme: {
    colors: harmonyPalette,
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['tabler']),
    }),
  ],
}
