import path from 'path'

export const getRootNodeModulesDir = filePath =>
  filePath
    .split(path.sep)
    .filter((pathPart, index) => splitPath[index - 1] !== 'node_modules')
    .join(path.sep)