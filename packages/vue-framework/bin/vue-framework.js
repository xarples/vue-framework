#!/usr/bin/env node

const cli = require('@xarples/vue-framework-cli')

cli.run().then(cli.flush).catch(cli.handle)
