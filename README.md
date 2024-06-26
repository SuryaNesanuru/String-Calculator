# String Calculator:
-------------------------------------------------

## Description

This project implements a String Calculator using TypeScript and follows Test-Driven Development (TDD) principles. 
The calculator can handle various input formats and performs arithmetic operations accordingly.

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
    cd String-Calculator
Process Of Implementation:
----------------------------------------------------------------------------

Initialized a new Node.js project.
Installed necessary dependencies (typescript, ts-node, jest, @types/jest, @types/node).
Configured TypeScript (tsconfig.json) and Jest (jest.config.js) for testing.
Implement the add Method:

 Handle an empty string.
 Handle a single number.
 Handle two numbers.
 Extend to handle multiple numbers.
 Handle new lines between numbers.
 Support different delimiters.
 Handle negative numbers with exceptions.
 Added tests to ensure negative numbers throw exceptions with appropriate messages.
 Modified the add method to detect negative numbers and throw an error listing all negatives. etc commits to REPO

