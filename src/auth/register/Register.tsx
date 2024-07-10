import { AppDispatch, RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useFormik, FormikValues } from "formik";
import { Input } from "@/shared/ui/input";
import * as Yup from "yup";
import { Button } from "@/shared/ui/button";
import { Check, CircleX,} from "lucide-react";
import { registration } from "@/app/store/AuthSlice";
import { NotificationAuth } from "../notificationAuth/NotificationAuth";
import { useEffect, useState } from "react";

export const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [showNotification, setShowNotification] = useState<React.ReactChild | null>();
  const { notificationAuth} = useSelector((state: RootState) => state.authSlice);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required().trim(),
      email: Yup.string().email().trim().required(),
      password: Yup.string().required().min(8),
      repeatPassword: Yup.string()
        .required()
        .trim()
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values: FormikValues) => {
      const { username, email, password } = values;
      dispatch(registration({ username, email, password }));
    },
  });

  useEffect(() => {
    if (notificationAuth === "success") {
      setShowNotification(
        <NotificationAuth
          type="Registration"
          message="Registration successfully"
          notification="susscess"
          icon={<Check />}
        />
      );
    } else if (notificationAuth === 'failed') {
      setShowNotification(
        <NotificationAuth
          type="Registration"
          message="This user already exists"
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
            Registration
          </h2>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-300"
              >
                User Name
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-600 text-xs pt-2">
                  {formik.errors.username as string}
                </div>
              ) : null}
            </div>

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
              <label
                htmlFor="repeatPassword"
                className="block text-sm font-medium text-gray-300"
              >
                Repeat Password
              </label>
              <Input
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
                <div className="text-red-600 text-xs pt-2">
                  {formik.errors.repeatPassword as string}
                </div>
              ) : null}
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Registration
              </Button>
            </div>
          </form>
        </div>
      </div>
      {showNotification}
    </>
  );
};
