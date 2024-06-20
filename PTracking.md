Summary of Yesterday's Work
appropiate font sizes was setup for the E-commerce application using tailwind css

Dark and light Mode implementation:
Both light and dark themes were created for improving user-friendly interface and accessibility.

* Implemented a theme toggle button in the navbar to switch between light and dark modes.
* Used state management to handle the theme switching.

Details:
* Created a ThemeToggle component for the toggle button.
* Used the theme state to apply conditional class names for dark and light themes across the application.

 State Management:

Objective: Utilize different state management libraries for different components.
Approach:
* Zustand: Used for managing the create post state.
* Redux: Planned for use in the CheckProductDetails component.
* Recoil: Planned for use in the Cart component.

Details:
* Installed redux and react-redux using npm.
* Created a Redux store and a product reducer.
* Integrated the Redux store in the main.jsx file to wrap the App component.

Issue Encountered:
Errors due to the store not being defined and import issues for redux.
Missing import for the store in main.jsx.