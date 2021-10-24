const { promises: fs } = require('fs')
const R = require('ramda')

const distPackageExtraProps = {
  author: {
    email: 'ivan.gabriele@gmail.com',
    name: 'Ivan Gabriele',
    url: 'https://www.ivangabriele.com',
  },
  bugs: {
    url: 'https://github.com/singularity-ui/core/issues',
  },
  files: ['singularity.cjs.js'],
  homepage: 'https://singularity-ui.github.io/core/',
  main: './singularity.cjs.js',
  name: '@singularity-ui/core',
  publishConfig: {
    access: 'public',
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/singularity-ui/core.git',
  },
}

// eslint-disable-next-line import/newline-after-import
;(async () => {
  const rootPackageJson = await fs.readFile('./package.json', 'utf-8')
  const rootPackage = JSON.parse(rootPackageJson)
  const distPackage = R.pipe(
    R.omit(['devDependencies', 'eslintIgnore', 'prettier', 'private', 'release', 'scripts', 'workspaces']),
    R.mergeLeft(distPackageExtraProps),
  )(rootPackage)
  const distPackageJson = JSON.stringify(distPackage, null, 2)

  await fs.writeFile('./dist/package.json', distPackageJson)
})()