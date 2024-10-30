---
sidebar_position: 2
title: CSS
---
*CSS fundamentals and components, Tailwind CSS*

## Index
| Section | Link | Key Points |
|---------|------|--------|
| Introduction | [Introduction](#introduction) |`Tailwind`|
| Fundamentals | [Box Model](#1-box-model) <br/> [Measuring Units](#2-measuring-units) <br/> [Flexbox](#3-flexbox) <br/> [Float](#4-float) <br/> |`flexbox` `float`|
| Components | [Components](#components) |`Navigation` `Forms`|

## Introduction
### CSS
### Popular CSS Frameworks
#### Bootstrap
#### Tailwind CSS
#### Material UI

### Fancy Applications
#### Animated Background
#### 3D library
#### UI design

[🔝 Back to Top](#index)
## Fundamentals
### 1. **Box Model**

The CSS box model defines how the size of a box (element) is calculated:

- **Box Types**:
  1. **Content Box**: The default box model where `width` and `height` properties include only the content. Padding, border, and margin are added outside this box.
  2. **Padding Box**: Includes the content and padding but excludes the border and margin.
  3. **Border Box**: The `width` and `height` properties include content, padding, and border. Only margin is excluded.
  4. **Margin Box**: Represents the outermost box, including content, padding, border, and margin.

- **Standard Box Model Calculation**:
  - Content Box: `width` = `content width` + `padding` * 2 + `border` * 2
  - Border Box: `width` = `border box width` - `padding` * 2 - `border` * 2 = `content width`

- **Recommended Usage**:
  ```css
  html { box-sizing: border-box; }
  *, *:before, *:after { box-sizing: inherit; }
  img { box-sizing: content-box; } /* Images shouldn't use border-box to prevent resizing issues */
  ```

- **Margin Collapsing**:
  - When vertical margins of adjacent elements overlap, the larger margin is used instead of adding them together. This is known as margin collapsing.

### 2. **Measuring Units**

- **Pixels (px)**:
  - 1px = 1/96th of 1 inch. It is a fixed length and does not scale with different screen resolutions.

- **Relative Units**:
  - **em**: Relative to the font size of the parent element. 
  - **rem**: Relative to the font size of the root element (`<html>`). More stable for responsive designs.
  - **Example**: Tailwind CSS uses `rem` as the basic unit for consistency and responsiveness.

### 3. **Flexbox**

Flexbox is a CSS layout model designed to manage one-dimensional layouts efficiently:

- **Main Axis and Cross Axis**:
  - **align-items**: Aligns flex items along the cross axis (vertical or horizontal depending on the flex direction).
    - Example: `align-items: center;`
  - **justify-content**: Aligns flex items along the main axis (horizontal by default).
    - Example: `justify-content: space-evenly;`

### 4. **Float**

The `float` property is used to position elements to the left or right within a container:

- **Example of Using Float**:
  - Applying special styles to the first letter of a paragraph:
    ```css
    .has-dropcap:first-letter {
      font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
      float: left;
      font-size: 3rem;
      line-height: 0.65;
      margin: 0.1em 0.1em 0 0;
    }
    ```
  - The `float` function moves the first letter to the left, allowing text to wrap around it.



[🔝 Back to Top](#index)


## Components
### **Navigation and Structure**

- **Breadcrumbs**: Navigation aid that shows the user’s path and allows tracing back through the hierarchy.
  - from a fairy tale in which charaters use the breabscrumbs to create a trail to find way home
- **Drawer**: A sidebar that slides in and out, commonly used for navigation.
- **Tabs**: Organizes content into sections or categories that users can switch between.
- **Dropdown Menu**: Displays a list of options for selection.
- **Sidebar**: A vertical panel for navigation or additional content.
- **Pagination**: Controls for moving through multiple pages of content.
- **Stepper**: Guides users through a series of steps in a process or form.

### **Feedback and Notifications**

- **Toast**: Brief notification that pops up temporarily to provide feedback or alerts.
  - like the toaster poping up the toast
- **Snackbar**: Similar to a toast, used for brief feedback or alerts, often appearing at the bottom of the screen.
- **Badge**: Displays notifications, counts, or status indicators.

### **User Interaction**

- **Accordion**: Expands or collapses to show or hide content, useful for organizing large amounts of information.
- **Chip**: Represents tags or small pieces of information with options to interact or remove.
- **Tooltip**: Provides additional context or tips when a user hovers over an element.
- **Modal**: A focused pop-up window requiring user interaction before proceeding.
- **Dialog**: A modal window used for interactions like confirmations or form submissions.

### **Content Display and Loading**

- **Skeleton Loader**: Placeholder that previews content while the actual data is loading.
- **Carousel/Slider**: Displays a series of images or items in a sliding format.
  - carousel is the 旋转木马
- **Data Table**: Displays tabular data with features like sorting and filtering.
- **Progress Bar**: Shows the progress of a task or process.

### **Input and Forms**

- **Radio Group**: A set of radio buttons for selecting one option from multiple choices.
- like the radio button in the old-fashioned radio
- **Avatar**: Represents a user or character, often as a profile picture.
- **Search Bar**: Input field for searching content within the application or website.
- **Rating Stars**: Captures and displays user ratings or reviews.

### **Overlays and Backgrounds**

- **Backdrop**: Overlay or background layer that appears behind a modal or focused element.
  - backdrop is the screen used for the phptography

### **Controls and Actions**

- **Speed Dial**: Quick-access buttons for frequently used actions or contacts.
- **Toolbar**: A set of controls or options providing quick access to common actions.
[🔝 Back to Top](#index)