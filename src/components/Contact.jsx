import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { fadeIn, slideIn } from "../utils/motion";
import { SECTIONS } from "../constants";

import { useForm } from "react-hook-form";
import InputTextArea from "./inputs/InputTextArea";
import InputText from "./inputs/InputText";
import ErrorText from "./ErrorText";

import SnackbarMessage from "./SnackbarMessage";

const TIME_TO_CLOSE_ALERT = 5000;

const FormSection = ({ setMessageAlert, setIsOpenAlert }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const public_key = import.meta.env.VITE_PUBLIC_KEY_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const service_id = import.meta.env.VITE_SERVICE_ID;

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await emailjs.send(
        service_id,
        template_id,
        {
          from_name: data.name,
          to_name: "Juan Felipe",
          from_email: data.email,
          to_email: "felipecorredor88@gmail.com",
          message: data.message,
        },
        public_key
      );

      setMessageAlert("Thank you. I will get back to you as soon as possible.");
      setIsOpenAlert(true);
      setLoading(false);
      reset();
    } catch (error) {
      setLoading(false);
      setIsOpenAlert(true);
      setMessageAlert("Ahh, something went wrong. Please try again.");
    }
  };

  console.log("errors===>", errors);

  return (
    <form
      autocomplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 flex flex-col gap-8"
    >
      <label className="flex flex-col">
        <InputText
          inputName="name"
          placeholder="What's your name?"
          register={register}
          validate={{
            required: true,
          }}
        />
        {errors.name && <ErrorText />}
      </label>

      <label className="flex flex-col">
        <InputText
          inputName="email"
          placeholder="What's your email?"
          register={register}
          validate={{
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          }}
        />
        {errors.email && <ErrorText message={errors.email.message} />}
      </label>

      <label className="flex flex-col">
        <InputTextArea
          inputName="message"
          placeholder="What you want to say?"
          register={register}
        />
        {errors.message && <ErrorText />}
      </label>

      <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

const Contact = () => {
  const [messageAlert, setMessageAlert] = useState("");
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const closeAlert = () => setIsOpenAlert(false);

  useEffect(() => {
    setTimeout(() => {
      if (isOpenAlert) setIsOpenAlert(false);
    }, TIME_TO_CLOSE_ALERT);
  }, [isOpenAlert]);

  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <FormSection
          setMessageAlert={setMessageAlert}
          setIsOpenAlert={setIsOpenAlert}
        />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      {isOpenAlert && (
        <SnackbarMessage message={messageAlert} closeAlert={closeAlert} />
      )}
    </div>
  );
};

export default SectionWrapper(Contact, SECTIONS.CONTACT);
