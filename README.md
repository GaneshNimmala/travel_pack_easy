# travel_pack_easy : Your Packing List Manager

PackingPal is a user-friendly web application designed to simplify the process of creating and managing your packing list for trips and travels. With PackingPal, you can easily keep track of what you need to pack, mark items as packed, and stay organized for your journeys.

## Features

- Add items to your packing list.
- Remove items from the list.
- Mark items as packed or unpacked.
- Clear the entire list with one click.
- Stay informed with statistics on your packing progress.

## Getting Started

1.  Clone the repository:

    ```bash
    git clone https://github.com/GaneshNimmala/travel_pack_easy.git
    ```

2.  Install dependencies:

        npm install

3.  Start the development server:

        npm start

4.  Open your web browser and visit http://localhost:3000 to use travel_pack_easy.

## Usage

- Use the form to add items to your packing list.
- Click the checkbox to mark items as packed when you're ready.
- Remove items by clicking the delete button.
- Clear your entire list with the "Clear List" button.
- Keep an eye on your packing progress with the statistics section.

## Concepts implemented

1. **React Components**: The project is built using React, which is a JavaScript library for building user interfaces. It utilizes various React components for structuring the user interface.

2. **State Management**: The project manages the state of the application using React's `useState` hook. It stores and updates the list of items that need to be packed, their quantities, and their packed/unpacked status.

3. **Form Handling**: Users can add items to the packing list by entering item descriptions and quantities using a form. The form input is handled and validated.

4. **Conditional Rendering**: The project uses conditional rendering to display items in the packing list, ensuring that only relevant items are shown based on their packed/unpacked status.

5. **Event Handling**: Event handlers are used to respond to user actions such as adding items to the list, deleting items, marking items as packed/unpacked, and clearing the entire list.

6. **Local Storage**: The application utilizes local storage to persist the user's packing list data between sessions, ensuring that the data is not lost when the user reloads the page.

7. **Confirm Dialog**: A confirmation dialog is used to confirm the user's intent to clear the packing list. This provides a user-friendly way to prevent accidental data deletion.

8. **Components and Modularization**: The project is well-organized into different components, making the code modular and easier to maintain. Components like `Logo`, `Form`, `PackingList`, and `Stats` are used for specific functionality.

9. **React Hooks**: The project demonstrates the use of React hooks such as `useState`, which manage component state, and `useEffect`, which handles side effects like updating the page title.

10. **CSS Styling**: The project includes CSS styles to make the application visually appealing and user-friendly.

11. **Dynamic UI**: The UI dynamically updates based on user interactions and the state of the application, providing real-time feedback to the user.

These concepts collectively make the "travel_pack_easy" project a practical and user-friendly tool for managing packing lists.
