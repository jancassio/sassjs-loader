import path from 'path'
import sass from 'sass.js'

// It's a little funny to take the path module to use as an argument,
// but it's a way easier way to test this function in posix/win32 environments
// rather than actually setting up a Windows environment, or messing with Node
// globals to trick it into using using the win32 instead of posix path module.
//
// This function exists to work around https://github.com/medialize/sass.js/issues/69.

export const getPathVariations = (filePath, rawPath) =>
  sass.getPathVariations(
    (rawPath || path).basename(filePath)
  )