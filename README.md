[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/tazDMbQj)

# Task Management Application

A simple task management application built with React and Material-UI. This application allows users to create, edit, view, and delete tasks. Tasks can be marked as completed, and the interface provides functionality to manage task details interactively.

## Features

- **Create Task**: Add new tasks with a title and description.
- **Edit Task**: Modify the title and description of existing tasks.
- **Delete Task**: Remove tasks from the list.
- **Mark as Completed**: Toggle task status to mark tasks as completed or pending.
- **Expandable View**: Expand task details to view and edit them.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/tejack98/assignment-9-tejack98.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd task-management-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

    This will start the development server and open the application in your default web browser.

## Usage

### Task Component

The `TaskComponent` handles displaying individual tasks with options to edit, delete, and toggle their status. Tasks can be expanded to show or edit their details.

### Task Modal

The `TaskModal` component is used for creating new tasks. It includes a form to input the title and description of the task.

#### Key Files

- **`src/components/TaskComponent.tsx`**: Contains the main logic for task display, editing, and status toggling.
- **`src/components/TaskModal.tsx`**: Modal for creating new tasks.
- **`src/styles/Task.css`**: CSS styles for task items.
- **`src/styles/TaskModal.css`**: CSS styles for the task creation modal.

## Components

### TaskComponent

- **Props:**
  - `task` (Task): The task object to display.
  - `onDelete` (Function): Callback function to handle task deletion.

- **Features:**
  - Click to expand/collapse the task description.
  - Edit the task title and description.
  - Toggle task completion status.
  - Delete task.

### TaskModal

- **Props:**
  - `open` (boolean): Controls the visibility of the modal.
  - `handleClose` (Function): Callback to close the modal.
  - `onAdd` (Function): Callback to handle task addition.

- **Features:**
  - Input fields for title and description.
  - Submit button to create a new task.

## CSS Styles

### Task.css

- **`.task`**: Styles for the task card.
- **`.task-title`**: Styles for the task title.
- **`.task-description`**: Styles for the task description, including expandable view.
- **`.task-description.expanded`**: Styles for expanded description.

### TaskModal.css

- **`.task-modal`**: Styles for the modal container.
- **`.close-button`**: Styles for the close button in the modal.
- **`.modal-title`**: Styles for the modal title.
- **`.submit-button`**: Styles for the submit button in the modal.

## Contributing

1. **Fork the repository**.
2. **Create a new branch**:

    ```bash
    git checkout -b feature-branch
    ```

3. **Make your changes**.
4. **Commit your changes**:

    ```bash
    git add .
    git commit -m "Add a feature or fix a bug"
    ```

5. **Push to the branch**:

    ```bash
    git push origin feature-branch
    ```

6. **Create a Pull Request** on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A React component library that implements Google's Material Design.
