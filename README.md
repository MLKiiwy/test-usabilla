# Usabilla Test : Dashboard app

## Choices

I decide to use a basic implementation with react / redux.
The base architecture of the project (with code format, eslint, storybook, jest) comes from one of my other project (https://github.com/MLKiiwy/list-web-widget).

Some comments :
- I added a pagination very quickly (not the best implementation for perf).
- the scss part is still using normal classnames (no unique classname), it can be improve with some webpack conf (importing scss file inside the component file and using a generated classname)
- clearly, i'm not an expert for the css part (usually i'm not doing it), there are lot possibility of improvement and of course we are far away from pixel perfect with the provided design.
- I have choosen to switch from table to list in case of mobile / litle width. That's better for the end user in term of UX.

## How to try it

### Requirements

- nodejs (lts/carbon)
- yarn

### Build and try

```bash
yarn install
yarn start
```

The app will be available on http://localhost:8080/

Warning: the build is only available for dev env (including dev tools)

## Launch tests

Unit tests

```bash
yarn test
```

Linter test
```bash
yarn lint
```

## View storybook

```bash
yarn storybook
```

The storybook will be accessible at : http://localhost:6006/

## Dev tools

### Auto format code

```bash
yarn format
```
