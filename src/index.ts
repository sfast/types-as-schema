import minimist from 'minimist'
import * as ts from 'typescript'
import * as fs from 'fs'
import * as path from 'path'
import * as chokidar from 'chokidar'
import { Generator } from './core'
import * as packageJson from '../package.json'

import * as protobuf from 'protobufjs'
import Ajv from 'ajv'

const ajv = new Ajv()

async function executeCommandLine () {
  const argv = minimist(process.argv.slice(2), { '--': true })

  const showVersion = argv.v || argv.version
  if (showVersion) {
    showToolVersion()
    return
  }

  const protobufPath = argv.protobuf
  if (protobufPath && typeof protobufPath !== 'string') {
    throw new Error('expect the path of generated protobuf file')
  }

  const jsonPath = argv.json
  if (jsonPath && typeof jsonPath !== 'string') {
    throw new Error('expect the path of generated json file')
  }

  const debugPath = argv.debug
  if (debugPath && typeof debugPath !== 'string') {
    throw new Error('expect the path of generated debug file')
  }

  const filePaths = argv._
  if (filePaths.length === 0) {
    throw new Error('expect the path of types file')
  }
  if (filePaths.length > 1) {
    throw new Error('expect only one path of types file')
  }
  const filePath = filePaths[0]

  const watchMode: boolean = argv.w || argv.watch

  function run () {
    const program = ts.createProgram(filePaths, { target: ts.ScriptTarget.ESNext })

    const sourceFile = program.getSourceFile(filePath)

    const generator = new Generator(sourceFile!)

    if (debugPath) {
      fs.writeFileSync(debugPath, JSON.stringify(generator.models, null, '  '))
    }

    if (protobufPath) {
      const protobufContent = `/**
 * This file is generated by 'types-as-schema'
 * It is not mean to be edited by hand
 */
` + generator.generateProtobuf()
      protobuf.parse(protobufContent)
      fs.writeFileSync(protobufPath, protobufContent)
    }

    if (jsonPath) {
      const schemas = generator.generateJsonSchemas()
      for (const { entry, schema } of schemas) {
        if (ajv.validateSchema(schema)) {
          fs.writeFileSync(path.resolve(jsonPath, entry), JSON.stringify(schema, null, '  '))
        } else {
          printInConsole(`json schema verified fail for entry: ${entry}`)
          if (!watchMode) {
            process.exit(1)
          }
        }
      }
    }
  }

  if (watchMode) {
    chokidar.watch(filePath).on('all', (type: string, file: string) => {
      printInConsole(`Detecting ${type}: ${file}`)
      if (type === 'add' || type === 'change') {
        run()
      }
    })
  } else {
    run()
  }
}

function printInConsole (message: any) {
  console.log(message)
}

function showToolVersion () {
  printInConsole(`Version: ${packageJson.version}`)
}

executeCommandLine().then(() => {
  printInConsole('convert types to protobuf or json schema success.')
}, error => {
  printInConsole(error)
  process.exit(1)
})
