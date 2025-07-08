export default function ComplexDashboardLayout({
  children,
  usersAnalytics,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  usersAnalytics: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{usersAnalytics}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    <div className="flex text-4xl font-bold text-amber-300">{login}</div>
  );
}
