# pkg-demo

### github actions

This repo has some github actions setup. For that to work, you will need to add a `NPM_TOKEN` in repository secrets:

- on your github project, go to `settings -> Secrets and variables -> Actions -> Repository secrets`
- create the token here `www.npmjs.com/settings/YOUR_NAME/tokens` if you dont already have one.

### resources

[intro to using changesets](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md)

tldr;

```sh
#cli to create a .changeset/*.md file (patch, minor or major)
#(not every change requires a changest, but often run this several times before creating a release)
pnpm changeset

#create a release
#combines .changeset/*.md files and edits CHANGELOG.md, also edits version in package.json
pnpm changeset version
```
