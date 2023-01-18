# NodeFi Integration Test

### Setup

1. `yarn install`
2. `npx pod-install`

Occasionally rn-nodeify will fail on `yarn install`. In this case, just run again.

#### ios

The following applies to development builds only.

1. Open xcode and navigate to pods
2. For both `react-native-udp` and `TCPSockets` pods:
   - Select `Build Phases` -> `Compile Sources`
   - Remove `GDAsyncRocket` by selecting it and then clicking the `-` button
