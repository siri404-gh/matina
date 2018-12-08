# 8.3 React Hot module replacement

#### Sep 1, 2018 by Sreeram Padmanabhan, Last updated on Sep 13, 2018

## Summary

Before we begin bundling, lets take a detour to add something to tweak React components in real time. Generally, after you make an edit, you need to refresh the page which can be annoying and time consuming. With React Hot module replacement, we do not have to do that. The app refreshes automatically. Lets see how.

## Install

`npm i --save react-hot-loader`
## Code

Add this to your .babelrc if not already included.

    {
      "plugins": ["react-hot-loader/babel"]
    }

Create this file for the App component in this path: `src/web/components/App/App.js` with the below code to mark it as hot exported.

    import React from 'react';
    import { render } from 'react-dom';
    import App from './components/App/App';

    render(<App />, document.getElementById('root'));

Update the entry file in this path: `src/web/index.js` to import the App.

    import React from 'react';
    import { render } from 'react-dom';
    import App from './App/App';

    render(<App />, document.getElementById('root'));

## See in Action

[View in Stackblitz](https://stackblitz.com/edit/entry-point)

Now, lets implement the bundling process in the next chapter.