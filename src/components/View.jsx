import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";

export default function View() {

  const { accounts } = useMsal();
  const roles = accounts[0]?.idTokenClaims?.roles || [];

  return (
    <div>
      <h2>Role Based View</h2>
      {roles == "admin" && <div>Welcome Admin - show Admin Component here</div>}
      {roles == "hr" && <div>Welcome HR - show HR Component here</div>}
      {!roles && <div>Role not assigned or loading...</div>}
    </div>
  );
}
