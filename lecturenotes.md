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


```js
const MyComponent = props => {
    return (
        <div className ="quotes">
            <h1 id="title"> I love JavaScript! </h1>
        </div>
    );
};
```

```js
const MyComponent = props => {{
    return (
        <>
        <h1>Quotes!</h1>
        <div className="quotes">
            <h1 id="title"> I love JavaScript! </h1>
        </div>
        <>
    )
}
```



## What causes a react component to rerender

1.any change to props
2.update to any internal state variable
3.ancestor re-render


#Component
![Component](/component.jpeg)

We are going to be using `BrowserRouter`


```js
function Jobshow() {
    Const params = UserParams();
    const jobId  = params.jobId;
    const job = jobData[jobId];

    return (
        <div class="job-show">
        <>
    )
}
```




### Wrapping in browser router

```js

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);


```
