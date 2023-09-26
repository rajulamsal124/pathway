"use client"

import { signIn } from "next-auth/react"
import { ChangeEvent, useState } from "react"
import { toast } from "react-hot-toast"

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setFormValues({ name: "", email: "", password: "" })

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      })

      setLoading(false)
      if (!res.ok) {
        setError((await res.json()).message)
        toast.error("Error: " + error)
        return
      }
      // router.push("/login");
      toast.success("User created successfully")
      signIn(undefined, { callbackUrl: "/login" })
    } catch (error: any) {
      setLoading(false)
      setError(error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <form onSubmit={onSubmit}>
      {error && <p className="">{error}</p>}
      <div className="">
        <input
          required
          type="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </div>
      <div className="">
        <input
          required
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email address"
        />
      </div>
      <div className="">
        <input
          required
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <button type="submit" className="" disabled={loading}>
        {loading ? "loading..." : "Sign Up"}
      </button>
    </form>
  )
}
