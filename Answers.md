1. What problem does the context API help solve?

It allows you to avoid prop drilling by creating a state object outside fo the typical component tree that you can access directly from the component that needs a particular thing passed to it.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Reducer: a function you call to change the global state
Action: An action is an object that contains a type that refers to which reducer to use and  typically a payload for the reducer to do something with. 
Store: is a global object passed to the apps components as needed.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State: is any variables that should be usable throught the application. For example user account information.

Component State: is relative to just that component for example the value of a form input.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows you to build asynchronous operations inside of you actions due to the synchronous nature of reducers 


1. What is your favorite state management system you've learned and this sprint? Please explain why!

Well really whichever i feel like using. redux is better for large scale applications and building reusable components while Context API is lighter weight and lends itself better to smaller applications but has the con of making it harder to reuse the component due to CA's nature.
