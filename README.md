# supertest-repro
Demo repo to facilitate reproducing a supertest issue

### To reproduce
1. Clone this repository
2. Install dependencies:
```
yarn
```
3. Run the test suite:
```
yarn test
```
4. Observe the following results:
```
✕ can make concurrent GET requests to the app (5 ms)

  ● can make concurrent GET requests to the app

    connect ECONNREFUSED 127.0.0.1:{port}
```
