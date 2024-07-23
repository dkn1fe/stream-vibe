import { AppDispatch, RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useFormik, FormikValues } from "formik";
import { Input } from "@/shared/ui/input";
import * as Yup from "yup";
import { Button } from "@/shared/ui/button";
import { loginSistem } from "@/app/store/AuthSlice";
import { useEffect, useState } from "react";
import { NotificationAuth } from "../notificationAuth/NotificationAuth";
import { Check, CircleX } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [showNotification, setShowNotification] =
    useState<React.ReactChild | null>();
    const navigate = useNavigate()
  const { notificationAuth } = useSelector(
    (state: RootState) => state.authSlice
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().trim().required(),
      password: Yup.string().required().trim(),
    }),
    onSubmit: (values: FormikValues) => {
      const { email, password } = values;
      dispatch(loginSistem({ email, password }));
    },
  });

  useEffect(() => {
    if (notificationAuth === "success") {
      setShowNotification(
        <NotificationAuth
          type="Login"
          message="Login success"
          notification="susscess"
          icon={<Check />}
        />
      );
      navigate('/')
    } else if (notificationAuth) {
      setShowNotification(
        <NotificationAuth
          type="Login"
          message="Failed email or password"
          notification="failed"
          icon={<CircleX />}
        />
      );
    }
  }, [notificationAuth, dispatch]);

  

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Login
          </h2>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-xs pt-2">
                  {formik.errors.email as string}
                </div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600 text-xs pt-2">
                  {formik.errors.password as string}
                </div>
              ) : null}
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
      {showNotification}
    </>
  );
};
