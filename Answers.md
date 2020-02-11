1. What problem does the context API help solve?
Helps create a global state that can be accesed from inside diffrent components
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions tell the reducer which case to follow
reducers are functions that return a new state based on the state and action they are passed
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state would be like a global state accessible from any part of the application were component state is more local and can't be accessed further up the file tree.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk allows you to create asynchronous functionality inside of react and allows action creators to return a function instead of just an object
1. What is your favorite state management system you've learned and this sprint? Please explain why!
I would say context API because it uses less templating so its seems more flexible in its use and less complex to implement.