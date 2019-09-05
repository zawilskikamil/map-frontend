
to build

```docker build -t sample:dev .```

to run

```docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev```