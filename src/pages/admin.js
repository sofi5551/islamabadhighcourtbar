import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { SiteContext } from "./_app";

const ADMIN_PASSWORD = "admin@123";

export default function Admin() {
  const router = useRouter();
  const { setShowComingSoon } = useContext(SiteContext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setShowComingSoon(false);
      router.push("/");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#143D2B" }}
    >
      <div
        className="w-full max-w-sm flex flex-col gap-6 px-8 py-10"
        style={{ backgroundColor: "#fff", borderRadius: "20px" }}
      >
        <div className="flex flex-col gap-1 text-center">
          <h1
            className="basker"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: "95%",
              letterSpacing: "-0.04em",
              color: "#143D2B",
            }}
          >
            Admin Access
          </h1>
          <p
            className="dmsans"
            style={{ fontSize: "14px", color: "#595959", marginTop: "6px" }}
          >
            Enter the admin password to access the site.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            className="dmsans w-full outline-none px-4 py-3 rounded-lg"
            style={{
              fontSize: "16px",
              border: "1px solid #E5E5E5",
              backgroundColor: "#F7F7F7",
              color: "#1E1E1E",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#143D2B")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E5E5")}
          />

          {error && (
            <p
              className="dmsans text-center"
              style={{ fontSize: "13px", color: "#c0392b" }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="dmsans w-full text-white rounded-full py-3 cursor-pointer transition-transform duration-200 hover:scale-105"
            style={{
              backgroundColor: "#143D2B",
              fontSize: "16px",
              border: "none",
            }}
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
