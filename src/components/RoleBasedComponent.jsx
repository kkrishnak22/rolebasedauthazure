import { useMsal } from "@azure/msal-react";

export default function RoleBasedComponent() {
  const { accounts } = useMsal();
  const roles = accounts[0]?.idTokenClaims?.roles || [];

  return (
    <div>
      <h2>Welcome, {accounts[0]?.name}</h2>
      {roles.includes("admin") && <p>You are an Admin</p>}
      {roles.includes("user") && <p>You are a User</p>}
    </div>
  );
}
