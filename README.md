## gg-components

[![Greenkeeper badge](https://badges.greenkeeper.io/georgegillams/gg-components.svg)](https://greenkeeper.io/)

A set of reusable React components, that are published as plain JS and CSS for maximum compatibility.

## Developing
To develop components within Storybook, run `npm start`.

If components have changed, snapshot tests may need to be updated. Backstop js visual regression tests may also need to be updated.

To update jest snapshots:
```
npx jest -u
```

To update backstopJS snapshots:
```
docker build -t backstopjs-test -f Dockerfile.backstopjstest .
docker run backstopjs-test
docker cp DOCKER_CONTAINER_ID:/usr/src/tmp/backstop_data ./
```

Any changes resulting from these commands should be verified and checked in.

## Publishing
The following publish process will transpile the code and then publish it using `release-it`:
`npm run release`

That's it!

## Contributing
Want to add or change something? Just fork me and open a PR.
