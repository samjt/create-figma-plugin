#!/usr/bin/env node
import sade from 'sade'

import { createFigmaPluginAsync } from './create-figma-plugin-async.js'

sade('create-figma-plugin [name]', true)
  .describe('Initialize a new Figma/FigJam plugin using a template')
  .option('-p, --path', 'Path to the directory to create the plugin in')
  .option('-t, --template', 'The name of the template to use')
  .option(
    '-e, --exclude',
    'Excludes copying these files from templates. Comma separated list file1.ts,file2.ts'
  )
  .action(async function (
    name: string,
    options: { exclude:string; path: string; template: string }
  ): Promise<void> {
    await createFigmaPluginAsync({
      exclude: options.exclude,
      name,
      path: options.path,
      template: options.template
    })
  })
  .parse(process.argv)
