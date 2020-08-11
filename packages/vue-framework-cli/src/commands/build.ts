import { Command, flags } from '@oclif/command'
import builder from '@xarples/vue-framework-builder'
import generator from '@xarples/vue-framework-generator'

export default class Build extends Command {
  static description = 'describe the command here'

  static examples = [`$ vue-framework-cli build`]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  async run() {
    await generator.generate()
    // await builder.buildRoutes()
    await builder.buildClient()
    await builder.buildServer()
  }
}
