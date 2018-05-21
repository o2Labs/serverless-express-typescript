# Serverless Express Typescript Starter Kit

A starter kit for building express apps using typescript deployed to AWS Lambda via serverless.

## Getting Started

1. Clone the repo to your local machine.
2. Make sure you've got the required global tools by running:
    - `npm install -g yarn ts-node`
3. Restore packages by running `yarn`
4. Check everything works locally by running `yarn test`
5. Deploy to AWS by running `yarn deploy`
    - Hint set your `AWS_PROFILE` environment variable if not using the default
      - On fish: `set -x AWS_PROFILE profile`
      - On bash: `export AWS_PROFILE=profile`

Other commands:
- Check the serverless packaging works locally: `yarn package`
- Clean generated files left over from build: `yarn clean`

## Writing Tests

Jest has been configured to run any file ending in `*.test.ts`, `*.test.tsx` or `*.test.js`. You can put these in the `test` folder, but they can also live alongside your code in the `src` folder if you prefer.

## Infrastructure

Defaults:
- Doesn't use VPC
- Deployed to eu-west-1 (Ireland)
- Lambda timeout: 2 seconds

In the serverless.yml file uncomment from line 24 onwards to enable the hyper-paranoid security locked down setup. This uses private subnets in three availability zones, and does not include an internet gateway - which means the lambdas can't access the internet, and the only way they can be invoked is via API gateway.

Key Features when uncommented:
- No outbound connectivity at all.
- 3 private subnets.
- /24 block gives 250 addresses in each subnet
- 750 addresses available in total (limits lambda instances).
