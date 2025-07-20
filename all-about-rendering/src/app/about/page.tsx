export default function About() {
    console.log("About page rendered");
  return (
    <div>
      <h1>About page load on: {new Date().toLocaleString()}</h1>
    </div>
  );
}
