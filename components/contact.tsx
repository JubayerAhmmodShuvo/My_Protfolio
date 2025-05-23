"use client";

import React, { useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at &nbsp;
        <a className="underline" href="mailto: jubayerahmmod@gmail.com">
          jubayerahmmod@gmail.com
        </a>
        &nbsp; or call me at &nbsp;
        <a className="underline" href="tel:+8801625752618">
          +8801625752618
        </a>
        &nbsp;or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          setIsSubmitting(true);

          try {
            const formData = new FormData(event.currentTarget);
            const { data, error } = await sendEmail(formData);
            
            if (error) {
              toast.error(error);
              return;
            }
            
            toast.success("Email sent successfully!");
            formRef.current?.reset();
          } catch (error) {
            toast.error("Something went wrong. Please try again later.");
            console.error("Error sending email:", error);
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          disabled={isSubmitting}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          disabled={isSubmitting}
        />
        <SubmitBtn isSubmitting={isSubmitting} />
      </form>
    </motion.section>
  );
}
