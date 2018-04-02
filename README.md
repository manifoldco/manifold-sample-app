# Manifold Sample App

## Example

🖥 https://manifold-sample-app-ohrnvaytsi.now.sh

Credentials:

```
sample-app@manifold.co
verysecurepassword
```

### Versions

* [AWS version][branch-master] (`master` branch)
* [Manifold + JawsDB Postgres + Mailgun][branch-manifold] version (`manifold` branch)

## Local Installation

```sh
brew install manifold-cli
yarn
yarn seed
```

After creating a project in [Manifold Dashboard][dashboard], edit the
`.manifoldrc.example` file and save as `.manifoldrc` (delete `team` if you’re
not using Manifold Teams). Running `yarn start` will automatically inline
variables from your Manifold project!

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

[branch-master]: https://github.com/manifoldco/manifold-sample-app
[branch-manifold]: https://github.com/manifoldco/manifold-sample-app/tree/manifold
[dashboard]: https://dashboard.manifold.co
[zeit-now]: https://zeit.co/now
