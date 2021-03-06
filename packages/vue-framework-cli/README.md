vue-framework-cli
=================



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/vue-framework-cli.svg)](https://npmjs.org/package/vue-framework-cli)
[![Downloads/week](https://img.shields.io/npm/dw/vue-framework-cli.svg)](https://npmjs.org/package/vue-framework-cli)
[![License](https://img.shields.io/npm/l/vue-framework-cli.svg)](https://github.com/xarples/vue-framework/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g vue-framework-cli
$ vue-framework COMMAND
running command...
$ vue-framework (-v|--version|version)
vue-framework-cli/0.0.0 darwin-x64 node-v10.17.0
$ vue-framework --help [COMMAND]
USAGE
  $ vue-framework COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vue-framework hello [FILE]`](#vue-framework-hello-file)
* [`vue-framework help [COMMAND]`](#vue-framework-help-command)

## `vue-framework hello [FILE]`

describe the command here

```
USAGE
  $ vue-framework hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ vue-framework hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/xarples/vue-framework/blob/v0.0.0/src/commands/hello.ts)_

## `vue-framework help [COMMAND]`

display help for vue-framework

```
USAGE
  $ vue-framework help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_
<!-- commandsstop -->
