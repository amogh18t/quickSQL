# quickSQL Web-App ![favicon](./favicon.ico)

## Overview

A SQL Editor built using Vite, React, and Tailwind CSS for a modern, responsive user experience.

Check out the live application here: ![favicon-16x16](favicon.ico) 
  [SQL Editor App](https://quick-sql.vercel.app/)
![image](https://github.com/amogh18t/quickSQL/assets/75831661/619fd4d5-3468-4d8f-8858-f4530b4eaf81)
![image](https://github.com/amogh18t/quickSQL/assets/75831661/38e00910-7cf1-413b-8be4-d9b0017d7a2d)
![image](https://github.com/amogh18t/quickSQL/assets/75831661/87ed6589-3596-4e66-9793-62f0320b0031)


<br>

## 🖊️ Features

- **SQL Query Editor**: Utilizes React Ace Editor for a powerful, syntax-highlighting editor experience.
- **Query and Data Sets**: Predefined queries and data sets that can be toggled through a user interface.
- **Result Display**: A mock display of query results in tabular format.
- **Export Result**: Result table can be exported in CSV format.
- **Tables Schema** - Available tables schema can be viewed in tables section.
- **Query History**: Recently ran queries can be seen in history section.
- **Dark Mode**: Dark mode can be toggled on or off, for seamless user experience.

<br>

## ⚙️ Dependencies

- **Code Editor**: React Ace Editor
- **Data Parser**: Papa Parse
- **Toasts**: React Hot Toasts (For notifications, such as success, warnings and errors)
- **Table**: React Table
- **Deployment**: Vercel
- **Version Control**: GitHub

<br>

## 📀 Optimizations

- **Code Splitting**: Implemented to load only the necessary code for each page view, reducing the initial load time.
- **Lazy Loading**: Used for deferring the loading of non-critical resources at page load time.
- **Efficient Asset Management**: Minified assets and images, leveraging caching for improved performance.

## 🔥 Installation

This application does not require installation. It runs in a web browser and is accessible via the [deployed link](https://quick-sql.vercel.app/#).

<br>

## 🛠️ Local Development

To set up this project locally for development purposes, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/amogh18t/quick-sql.git
```

2. Navigate to the project directory:

```bash
cd quick-sql
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```
5. Open http://localhost:3000 (or the url mentioned in the console) to view it in the browser.

<br>
