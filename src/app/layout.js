import "./globals.css";

export const metadata = {
  title: "Rohit Singh Negi | Portfolio — AI/ML Developer & Software Engineer",
  description:
    "Portfolio of Rohit Singh Negi — AI/ML developer, competitive programmer, and B.Tech CSE student. Skilled in Python, C++, JavaScript, PyTorch, TensorFlow, and more.",
  keywords: [
    "Rohit Singh Negi",
    "Portfolio",
    "AI Developer",
    "Machine Learning",
    "Software Engineer",
    "Python",
    "C++",
  ],
  authors: [{ name: "Rohit Singh Negi" }],
  openGraph: {
    title: "Rohit Singh Negi | Portfolio",
    description:
      "AI/ML Developer & Software Engineer — Building intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
