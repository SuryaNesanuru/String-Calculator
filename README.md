# String Calculator:
-------------------------------------------------

## Description

This project implements a String Calculator using TypeScript and follows Test-Driven Development (TDD) principles. The calculator can handle various input formats and performs arithmetic operations accordingly.

## Features

- Addition of numbers separated by commas or new lines.
- Support for custom delimiters.
- Exception handling for negative numbers.
- Ignoring numbers greater than 1000.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager) or yarn installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SuryaNesanuru/String-Calculator.git
   cd string-calculator
Process Of Implementation:
----------------------------------------------------------------------------

Initialized a new Node.js project.
Installed necessary dependencies (typescript, ts-node, jest, @types/jest, @types/node).
Configured TypeScript (tsconfig.json) and Jest (jest.config.js) for testing.
Implement the add Method:

Step 2.1: Handle an empty string.

Added a test to ensure an empty string returns 0.
Implemented the add method to return 0 for an empty string.
Step 2.2: Handle a single number.

Added a test to verify that a single number returns the number itself.
Implemented the add method to parse and return a single number.
Step 2.3: Handle two numbers.

Added a test to check the sum of two numbers.
Updated the add method to handle and sum two numbers.
Step 2.4: Extend to handle multiple numbers.

Added a test to ensure the method sums multiple numbers.
Refactored the add method to handle and sum any number of comma-separated values.
Step 2.5: Handle new lines between numbers.

Added a test to handle new lines as delimiters between numbers.
Updated the add method to replace new lines with commas for consistent parsing.
Step 2.6: Support different delimiters.

Added a test to support custom delimiters specified at the beginning of the input.
Enhanced the add method to dynamically detect and use custom delimiters.
Step 2.7: Handle negative numbers with exceptions.

Added tests to ensure negative numbers throw exceptions with appropriate messages.
Modified the add method to detect negative numbers and throw an error listing all negatives. etc commits to REPO

