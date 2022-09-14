# Template React App

<div align="center">
 <a href="#project">👉 Project</a>
 <a href="#technologies">👉 Technologies</a>
 <a href="#execution">👉 Execution</a>
 <a href="#more">👉 More</a>
</div>

<h2 id="project">:muscle: Project</h2>
This is a very well configured React template.

Where you have the main technologies, like:

- Jest for testing;
- Husky to validate commits and working together with it we have:
  - commitlint to follow the conventional commit pattern;
  - lint-staged to apply eslint settings to the files;
  - and also configured to run jest and not let the commit be done if it doesn't pass the tests;

<h2 id="technologies">:rocket: Used Technologies</h2>

This project was developed with the following technologies:

- [Node 16.17](https://nodejs.org/en/)
- [React 18.2](https://reactjs.org/)
- [TypeScript 4.6.4](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Styled-Components](https://github.com/styled-components/styled-components)
- [Jest](https://jestjs.io/)
- [SWC](https://swc.rs/docs/usage/jest)
- [Testing-Library](https://testing-library.com/docs/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint-Staged](https://github.com/okonet/lint-staged)
- [commitlint](https://commitlint.js.org/#/)
- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

<h2 id="execution">👨🏻‍💻 Execution</h2>

To run the project:

- Clone the project by running this command in the terminal `git clone <repo_url>`;
- Open the project folder in the terminal and run:
  - `yarn` or `npm install` -> To install all dependencies;
  - `npm prepare` -> To configure the husky;
  - `yarn dev` or `npm run dev` -> To run the project;
- To run the tests just run `yarn test` or `npm run test`.
- To apply the eslint settings and standardize the code, run: `yarn lint` or `npm run lint`.
- To test husky and commit lint just make some changes in the code and run:
  ```
    git add .
    git commit -m "fix: message commit"
  ```

<h2 id="more">🖇 More</h2>

Fork the project and contribute.

Let's keep the repository updated with the latest technologies.

And use and abuse the will!😎😎😎
