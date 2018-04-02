# Manifold Sample App

You’re viewing the updated **Manifold** version of the app. To see the old
AWS version, view the [old-aws][branch-old-aws] branch.

## Example

🖥 https://manifold-sample-app-ohrnvaytsi.now.sh

Credentials:

```
sample-app@manifold.co
verysecurepassword
```

## Local Installation

```sh
brew install manifoldco/brew/manifold-cli
yarn
yarn seed
```

After creating a project in [Manifold Dashboard][dashboard], edit the
`.manifoldrc.example` file and save as `.manifoldrc` (delete `team` if you’re
not using Manifold Teams). Running `yarn dev` or `yarn start` will
automatically inline variables from your Manifold project!

## Development Server

```sh
yarn dev
```

## Deployment

Deployment is set up to use [Zeit Now][zeit-now]. Once configured, run

```sh
now
```

To deploy your own instance.

[branch-old-aws]: https://github.com/manifoldco/manifold-sample-app/tree/old-aws
[dashboard]: https://dashboard.manifold.co
[zeit-now]: https://zeit.co/now
