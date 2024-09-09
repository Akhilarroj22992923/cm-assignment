# Celebrity Manager
# UI: ## HomePage
![image](https://github.com/user-attachments/assets/8bcf3607-2139-4f29-a27a-d132272e6bf7)
## Detailed
![image](https://github.com/user-attachments/assets/9e216074-2ab5-43ed-949b-a7ec946ffec2)
## Deleted
![image](https://github.com/user-attachments/assets/b5e5f6f3-320c-46d4-b70c-efa5c002b724)H

# Celebrity Manager

Welcome to the **Celebrity Manager** project! This application allows you to view and edit details of celebrities while hiding their public presence. You will be able to manage a list of celebrities using a user-friendly interface, with features including searching, viewing, editing, and deleting celebrity details.

## Features

1. **User Interface**: 
   - The page is designed with a search bar and an accordion list of celebrities.
   - The accordion expands the selected item and collapses others, toggling between open and closed states with `+` and `-` icons.

2. **Search Functionality**: 
   - A search bar allows you to search the list by celebrity name.

3. **Accordion Behavior**:
   - Clicking an accordion item will expand it and collapse others.
   - Clicking the same accordion again will collapse it.
   - The `+` and `-` icons indicate whether an accordion is open or closed.

4. **Data Handling**:
   - Fetch and display user data from a JSON file (editing of JSON file is not permitted).
   - Calculate age based on the provided date of birth.
   - Gender is managed via a dropdown menu with options (Male, Female, Transgender, Rather not say, Other).
   - Country is a text field.
   - Description is a text area.

5. **Editing and Deleting**:
   - **Edit Mode**:
     - Edit details directly in the accordion.
     - Editing is only allowed for adult users.
     - Input validation: 
       - No text allowed in the age field.
       - No numbers allowed in the nationality field.
       - All fields must be filled.
     - Save button is enabled only when changes are detected.
     - Cancel button reverts changes to the last known state.
     - Accordion cannot be opened while in edit mode.
   - **Delete Mode**:
     - Confirmation alert before deletion.
     - User is deleted upon confirmation or left unchanged otherwise.

6. **Typescript** (optional but recommended):
   - TypeScript can be used for better code quality and type safety.

## Project Setup

### Step 1: Set Up the Project

Initialize a React project with TypeScript:

```bash
npx create-react-app celebrity-manager --template typescript
cd celebrity-manager
```

Install required dependencies:

```bash
npm install axios
```

### Step 2: Implement Features

1. **Search Bar**:
   - Create a search bar component to filter the celebrity list.

2. **Accordion Component**:
   - Build an accordion component to display celebrity details.
   - Implement the expand/collapse functionality with `+` and `-` icons.

3. **Data Fetching**:
   - Fetch the JSON file containing celebrity data.
   - Calculate age based on the date of birth.

4. **Edit Mode**:
   - Create forms for editing celebrity details.
   - Implement validation rules and manage save/cancel functionality.

5. **Delete Mode**:
   - Implement delete functionality with a confirmation prompt.

### Step 3: Run the Application

Start the application with:

```bash
npm start
```

## Code Overview

- **CSS Styling**: The provided CSS includes styling for the search bar, accordion, and form elements with shadow effects for enhanced visuals.
- **React Components**: Components for the search bar, accordion, and editing functionality are implemented according to the requirements.

## Notes

- Ensure the application adheres to the provided design and functionality requirements.
- Test thoroughly to confirm that all features work as expected, especially the validation and edit/delete modes.

Happy coding!

---

Feel free to adjust the README as needed based on your specific implementation or any additional requirements.

