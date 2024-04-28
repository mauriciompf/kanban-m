# Kanban-m

## Introduction

The goal is to develop a simple and efficient Kanban board. **Kanban** is task management system designed to help users organize tasks and projects using visual boards. The application allows for the creation and customization of columns to represent different stages of work, as well as task management features such as editing, filtering, and prioritizing tasks.

## Functionalities

- When the user is on the website, an **editable title** for a column appears in the **left corner** of the page.
  - This allows the user to modify the title as desired.
- If the user clicks the **“Add New Task”** button, a box appears allowing the user to input the details of the new task.
  - The box includes fields for:
    - **Title**: A required field where the user must enter a title for the task (it cannot be empty).
    - **Description**: An optional field where the user can provide more information about the task.
    - **Priority Categories**: Three priority options (AAA, AA, and A) for the user to select from when assigning a priority to the task.
  - Once the user has filled in the details, there is an **enter button**.
    - Clicking the enter button creates a new task box within the column with the specified title.

## Tools

- [Vite](https://vitejs.dev)
- [ReactJS](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
