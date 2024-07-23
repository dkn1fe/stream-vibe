import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { FC } from "react";
import settingsImg from "@/layouts/settings/settings.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { useFormik } from "formik";
import {
  onChangeEmail,
  onChangeImage,
  onChangeName,
  onChangePhone,
} from "@/app/store/AuthSlice";
import * as Yup from "yup";

interface SettingsModalProps {
  open: boolean;
  closeModal: () => void;
  type: string;
}

export const SettingsModal: FC<SettingsModalProps> = ({
  open,
  closeModal,
  type,
}) => {
  const { userData } = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      name: userData?.username || "",
      email: userData?.email || "",
      phone: userData?.phone || "+",
      img: null,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().trim().required("Введите имя"),
      email: Yup.string().email().trim().required("Введите почту"),
      phone: Yup.string()
        .trim()
        .required("Введите номер телефона")
        .max(15)
        .min(5),
      img: Yup.mixed().required("Загрузите изображение"),
    }),

    onSubmit: (values) => {
      switch (type) {
        case "name":
          dispatch(onChangeName(values.name));
          break;
        case "phone":
          dispatch(onChangePhone(values.phone));
          break;
        // case "icon":
        //   dispatch(onChangeImage(values.img));
        //   break;
        case "email":
          dispatch(onChangeEmail(values.email));
          break;
      }
      closeModal();
    },
  });

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-[#0D0B15] max-w-[1000px] w-full md:max-h-[95%] rounded-[20px] overflow-hidden">
            <Button
              variant="ghost"
              className="absolute cursor-pointer top-4 right-4 text-white text-4xl"
              onClick={closeModal}
            >
              x
            </Button>
            <div className="flex flex-col lg:flex-row relative">
              <div className="hidden lg:block lg:w-1/2 relative">
                <img
                  src={settingsImg}
                  alt="Settings Illustration"
                  className="object-cover h-full w-full"
                />
                <h2 className="absolute bottom-[220px] left-1/2 transform -translate-x-1/2 text-white font-bold text-6xl mb-6">
                  Настройка <span className="pl-5">аккаунта</span>
                </h2>
              </div>
              <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center lg:items-start pt-16 lg:pt-0">
                <form
                  onSubmit={formik.handleSubmit}
                  className="w-full max-w-lg"
                >
                  {type === "name" && (
                    <>
                      <h3 className="text-white font-bold text-4xl mb-4 text-center lg:text-left">
                        Как тебя зовут?
                      </h3>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Введите имя"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`p-2 mb-4 bg-[#1f1b2e] rounded-lg text-white w-full ${
                          formik.touched.name && formik.errors.name
                            ? "border-2 border-red-500"
                            : ""
                        }`}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500">{formik.errors.name}</div>
                      ) : null}
                    </>
                  )}
                  {type === "email" && (
                    <>
                      <h3 className="text-white font-bold text-4xl mb-4 text-center lg:text-left">
                        Введите новый Email
                      </h3>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Введите Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`p-2 mb-4 bg-[#1f1b2e] rounded-lg text-white w-full ${
                          formik.touched.email && formik.errors.email
                            ? "border-2 border-red-500"
                            : ""
                        }`}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500">{formik.errors.name}</div>
                      ) : null}
                    </>
                  )}
                  {type === "phone" && (
                    <>
                      <h3 className="text-white font-bold text-4xl mb-4 text-center lg:text-left">
                        Введите свой телефон
                      </h3>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Введите телефон"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`p-2 mb-4 bg-[#1f1b2e] rounded-lg text-white w-full ${
                          formik.touched.phone && formik.errors.phone
                            ? "border-2 border-red-500"
                            : ""
                        }`}
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-red-500">
                          {formik.errors.phone}
                        </div>
                      ) : null}
                    </>
                  )}
                  {type === "icon" && (
                    <>
                      <h3 className="text-white font-bold text-3xl mb-4 text-center lg:text-left">
                        Загрузите свою картинку
                      </h3>
                      <Input
                        type="file"
                        id="img"
                        name="img"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "img",
                            event.currentTarget.files[0]
                          );
                        }}
                        onBlur={formik.handleBlur}
                        className={`p-2 mb-4 bg-[#1f1b2e] rounded-lg text-white w-full ${
                          formik.touched.img && formik.errors.img
                            ? "border-2 border-red-500"
                            : ""
                        }`}
                      />
                      {formik.touched.img && formik.errors.img ? (
                        <div className="text-red-500">{formik.errors.img}</div>
                      ) : null}
                    </>
                  )}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="bg-pink-600 text-white p-4 rounded-xl max-w-xs"
                    >
                      Сохранить
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
