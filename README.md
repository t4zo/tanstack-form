# React Form with TanStack Form and Zod

A modern React form implementation using TanStack Form (formerly React Hook Form) and Zod for form validation. This project demonstrates a robust registration form with various input types and validation rules.

## Features

- Form validation using Zod schema
- Type-safe form handling with TypeScript
- Support for various input types:
  - Text inputs
  - Email input
  - Number input
  - Date input
  - Checkbox
  - Select dropdown
  - Password fields with confirmation
- Real-time validation
- Custom error messages
- Form submission handling

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TanStack Form](https://tanstack.com/form/latest) - A form library for React that provides a great developer experience
- [Zod](https://zod.dev/) - TypeScript-first schema validation library
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:t4zo/tanstack-form.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Form Fields

The registration form includes the following fields:

- Username (required)
- Email (required, must be valid email format)
- First Name (required)
- Last Name (required)
- Age (required, must be 18 or older)
- Birthdate (required)
- Marital Status (checkbox)
- Nationality (dropdown with options: Canada, US, India, Brazil)
- Password (required, minimum 8 characters)
- Confirm Password (must match password)

## Validation Rules

The form implements the following validation rules:

- All required fields must be filled
- Email must be in a valid format
- Age must be 18 or older
- Password must be at least 8 characters long
- Confirm password must match the password
- Nationality must be one of the predefined options

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
