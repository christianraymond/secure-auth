//Export all components in index.js so we can just import each one of them from './components' anywhere in our project.

export { default as NavBar } from '../components/Navigation/NavBar.jsx';
export { default as Todo } from '../components/todoList/Todo.jsx';
export { default as Register } from '../components/register/Register.jsx';
export { default as Landing } from './Landing';
export { default as Login } from '../components/login/Login.jsx';
export { default as FlashMessagesList } from '../components/flash/FlashMessagesList';
export { default as ProtectRoute } from '../utils/protectRoute'
