@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #020817;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

* { box-sizing: border-box; }

button, input, textarea {
  font: inherit;
}

::selection {
  background: rgba(59, 130, 246, 0.45);
}

.shadow-glow {
  box-shadow: 0 20px 45px rgba(37, 99, 235, 0.35);
}
