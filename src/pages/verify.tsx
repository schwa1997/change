import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Verify() {
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "2222") {
      setIsVerified(true);
    } else {
      alert("Incorrect password");
      setPassword("");
    }
  };

  return (
    <Layout title="Verify" description="Password Verification Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
          flexDirection: "column",
        }}
      >
        {!isVerified ? (
          <form onSubmit={handleVerify}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{ fontSize: "18px", padding: "8px", marginRight: "10px" }}
            />
            <button
              type="submit"
              style={{ fontSize: "18px", padding: "8px 16px" }}
            >
              Verify
            </button>
          </form>
        ) : (
          <div>
            <p>Successfully verified!</p>
            <p>
              <Link to="/feminism/conversation/about">
                Check my feminism conversation
              </Link>
            </p>
            <p>
              <Link to="/buddhism/practice/ruding">Check buddism practice</Link>
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
