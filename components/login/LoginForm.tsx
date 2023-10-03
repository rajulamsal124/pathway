"use client"

import Link from "next/link"
import React from "react"
import { signIn } from "next-auth/react"
import { useSearchParams, useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"
import toast from "react-hot-toast"

export default function LoginForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      setFormValues({ email: "", password: "" })

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      })

      setLoading(false)

      if (!res?.error) {
        router.push(callbackUrl)
      } else {
        error && toast.error(error)
        setError("Invalid credentials")
      }
      toast.success("Logged in successfully")
      router.push("/dashboard")
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
    <>
      <div className="form-page__content lg:py-50">
        <div className="container">
          <div className="row justify-center items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="px-60 py-60 md:px-30 md:py-30 bg-white shadow-1 rounded-16">
                <h3 className="text-30 lh-13">Login</h3>
                <p className="mt-10">
                  Do not have an account yet?
                  <Link href="/signup" className="text-purple-1">
                    Sign up for free
                  </Link>
                </p>

                <form
                  className="contact-form respondForm__form row y-gap-20 pt-30"
                  onSubmit={onSubmit}
                >
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder="Email address"
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Password
                    </label>
                    <input
                      required
                      type="password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="button -md -green-5 text-white fw-500 w-1/1 "
                      disabled={loading}
                    >
                      {loading ? "loading..." : "Log In"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
