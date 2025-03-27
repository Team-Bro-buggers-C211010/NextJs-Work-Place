// _lib is a private folder, so it won't be accessible from the browser
// This is a private page that cannot be accessed from the browser
const PrivateFolder = () => {
  return (
    <div>You cannot view this page in the browser</div>
  )
}

export default PrivateFolder


// Private folder are super useful for keeping sensitive information or code that should not be exposed to the public.
// For example, you might want to keep your API keys or database connection strings in a private folder.
// This way, you can keep your code organized and secure.
// You can also use private folders to keep your code modular and reusable. For example, you might want to create a private folder for your components or utilities that can be used across different pages.
// This way, you can keep your code DRY (Don't Repeat Yourself) and easy to maintain.

// If we needed actually an underscore in our URL, we can use "%5F" in the URL, which is the URL encoded version of "_".
// For example, if we wanted to access the page "products/_id", we can use the URL "products/%5Fid".
// This will work because "%5F" is the URL encoded version of "_".
// However, this is not a common use case and it is not recommended to use "_" in your URLs. It is better to use "-" or "_" in your URLs for better readability and SEO.