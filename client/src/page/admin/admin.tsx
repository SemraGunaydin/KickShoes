import { useState } from "react";
import useAuth from "../../service/auth";

const AdminLogin = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate(form); // role gönderme!
  };

  return (
    <div className="login-page">
      <h1>Admin Login</h1>

      <form onSubmit={submit}>
        <input
          placeholder="Admin Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;