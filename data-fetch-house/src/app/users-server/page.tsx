type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  // console.log(users);

  return (
    <div>
      <h1 className="text-2xl font-bold my-4 text-center">Users</h1>
      <ul className="space-y-4 p-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <div>
              <h2 className="font-bold">{user.name}</h2>
            </div>
            <div className="text-sm">
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
