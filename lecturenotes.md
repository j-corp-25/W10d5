# React Lecture

There is a traditional Page lifecycle and then theres a SPA lifecycle

Simplifies alot of creation of html elements through the use of jsx

They are only render as needed



Components ony rerender as needed
- When the data being pased into a component into a component changes - called props
- when the internal `state` of the component changes
- when a parent component rerenders

- you dont want to rerender if you dont need it

We use curly bracketss to interpolate JS expressions into element body


``` javascript
const name = 'Mike Madsen';

const element = <h1>Hello,{ name }</h1>;

//or

consts element = <img src={user.avaterURL}
```


```node
npx create-react-app my-app --use-npm
```

```js
`import ReactDom from react-dom/client`;
```


```js

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


```
