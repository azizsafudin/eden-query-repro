## Setup

1. `cd` into each package (`mobile` and `backend`) and `bun install` separately.

If you don't have a way of running native simulators/devices: https://docs.expo.dev/workflow/ios-simulator/

2. `cd ./mobile && bun ios`

It's not necessary to run the server, the problem is on the client side.

You should see the following:

```sh
Logs for your project will appear below. Press Ctrl+C to exit.
iOS Bundling failed 1136ms node_modules/expo-router/entry.js (1253 modules)
Unable to resolve "elysia/error" from "node_modules/@ap0nia/eden/src/plugins/transform.ts"
```