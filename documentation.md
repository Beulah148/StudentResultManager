STUDENT RESULT MANAGER – FULL DOCUMENTATION

1. Introduction

The Student Result Manager is a simple web-based system designed to allow users to enter student scores, calculate total and average scores, determine grades, and display results in a clean report format.
It is built using HTML, CSS, and JavaScript and runs completely inside the browser.

2. System Objectives
	•	To allow easy input of student subject scores
	•	To automatically calculate total and average
	•	To generate grades using a grading algorithm
	•	To allow users to clear and reset data
	•	To provide a simple, user-friendly interface

3. System Architecture

The system follows a three-layer architecture:
	1.	Presentation Layer (HTML/CSS) – Handles layout and styling
	2.	Logic Layer (JavaScript) – Performs calculation and grading
	3.	Data Layer (Browser Memory) – Temporarily stores input until cleared

4. User Interface Design

The UI contains:
	•	Input fields for student name and student scores
	•	A Calculate button
	•	A Clear button
	•	A results display section
	•	Clean and modern layout using CSS

5. Data Model

The system uses the following data fields:

	.	Field					Description
	.	Student Name				Text 
	.	Subject 1				Number
	.	Subject 2				Number 
	.	Subject 3				Number 
	.	Total Score				Computed
	.	Average Score				Computed
	.	Grade					Computed 

6. System Flowchart 
	┌──────────────┐
        │  Start        │
        └──────┬───────┘
               ↓
      ┌──────────────────┐
      │ Enter Inputs      │
      └──────┬───────────┘
             ↓
  ┌───────────────────────┐
  │ Validate Inputs?       │─No─→ Error Message
  └──────────┬────────────┘
             ↓ Yes
  ┌───────────────────────┐
  │ Calculate Total/Avg    │
  └──────────┬────────────┘
             ↓
  ┌───────────────────────┐
  │ Determine Grade        │
  └──────────┬────────────┘
             ↓
  ┌───────────────────────┐
  │ Display Result         │
  └──────────┬────────────┘
             ↓
        ┌──────────────┐
        │     End       │
        └──────────────┘

7. Use-Case Description

Use Case: Calculate Student Result
	.	Item					Description
	.	Actor					User
	.	Pre-condition				User opens the webpage
	.	Main Flow				User enters details-> Clicks Calculate->System displays result
	.	Post-condition				Result is computed and shown 
	.	Exception				Invalid input procedure error message

8. Implementation

HTML
Defines structure: inputs, buttons, result area.

CSS
Provides layout, spacing, colors, fonts, and formatting.

JavaScript
Handles:
	•	Input validation
	•	Total score calculation
	•	Average score calculation
	•	Grade assignment
	•	Displaying result

9. Testing

Testing was done by entering different sets of scores and checking:
	•	Correct total
	•	Correct average
	•	Correct grade
	•	Proper error messages
	•	Layout responsiveness

All tests passed successfully.

10. Conclusion

The Student Result Manager is a simple and effective tool for processing student results.
It demonstrates the use of web technologies and basic logic to build a functional application. 					 			