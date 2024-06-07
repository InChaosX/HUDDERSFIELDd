'use client'
import React from 'react'
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { T, useTranslate } from "@tolgee/react";
// import { useTranslations } from "next-intl";

function Contact() {
   const { t } = useTranslate();
    // const t = useTranslations("Contact");

  // email form logic validation
   const form = useRef(null);
   const sendmail = (e: any) => {
     e.preventDefault();

     const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
     const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
     const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

     // Custom validation
     const formData = new FormData(form.current!);
     const nom = formData.get("nom");
     const email = formData.get("email");
     const phone = formData.get("phone");
     const room = formData.get("room");

     if (!nom && !email && !phone && !room) {
       // toast.error("Please fill in all fields");

       toast.error(t("toastMessage"));

       return;
     }

     if (!nom) {
       toast.error(t("nom"));
       return;
     }

     if (!email) {
       toast.error(t("email"));
       return;
     }

     if (!phone) {
       toast.error(t("phone"));
       return;
     }

     if (!room) {
       toast.error(t("room"));
       return;
     }

     emailjs
       .sendForm(serviceId, templateId, form.current ?? "", publicKey)
       .then(
         () => {
           toast.success(t("succes"));
         },
         () => {
           toast.error(t("error"));
         }
       );
     e.target.reset();
   };


  return (
    <section
      id="contact"
      className="  bg-white contact"
      style={{
        backgroundImage: 'url("/rt.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(100%)", // Adjust brightness here
        transition: "filter 0.3s",
      }}
    >
      {/* <!-- Contact Us --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black sm:text-4xl ">
              {t("FORMULAIRE DE PRE-INSCRIPTION")}
            </h1>
            {/* <p className="mt-1 text-gray-600 dark:text-gray-400">
              We'd love to talk about how we can help you.
            </p> */}
          </div>

          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16 ">
            {/* <!-- Card --> */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700 bg-slate-300">
              <h2 className="mb-8 text-xl font-semibold text-black">
                {t("Remplissez le formulaire")}
              </h2>

              <form ref={form} onSubmit={sendmail}>
                <div className="grid gap-4">
                  {/* nom */}
                  <div>
                    <p className="font-semibold text-gray-500">
                      {t("Nom Complete")}
                      <span className="text-red-500">*</span>{" "}
                    </p>
                    <label className="sr-only text-black">nom complete</label>
                    <input
                      name="nom"
                      type="text"
                      placeholder={t("Nom Complete")}
                      // id="hs-email-contacts-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white dark:border-gray-700 text-black font-semibold dark:focus:ring-gray-600"
                    />
                  </div>
                  {/* email */}
                  <div>
                    <p className="font-semibold text-gray-500">
                      {t("Email")}
                      <span className="text-red-500">*</span>
                    </p>
                    <label className="sr-only">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder={t("Email")}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white dark:border-gray-700 text-black font-semibold dark:focus:ring-gray-600"
                    />
                  </div>

                  {/* phone number */}
                  <div>
                    <p className="font-semibold text-gray-500">
                      {t("Numero De Telephone")}
                      <span className="text-red-500"> *</span>
                    </p>
                    <label className="sr-only">Phone Number</label>
                    <input
                      name="phone"
                      type="text"
                      placeholder={t("Numero De Telephone")}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white dark:border-gray-700 text-black font-semibold dark:focus:ring-gray-600"
                    />
                  </div>

                  {/* select */}

                  <div>
                    {/* <label className="sr-only">Details</label> */}
                    <p className="font-semibold text-gray-500">
                      {t("sélectionnez votre choix")}
                      <span className="text-red-500"> *</span>
                    </p>
                    <select
                      name="room"
                      className="select select-accent w-full max-w-2xl h-11 mb-6 pl-3  cursor-pointer custom-select"
                    >
                      <option disabled selected>
                        BAC ?
                      </option>
                      <option>{t("Marocain")}</option>
                      <option> {t("Français")}</option>
                      <option>{t("Autres")}</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {t("ENVOYER VOTRE CANDIDATURE")}
                  </button>
                </div>

                <div className="mt-3 text-center"></div>
              </form>
              <ToastContainer
                position="bottom-right"
                hideProgressBar={true}
                theme="light"
                autoClose={2000}
              />
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              <Image
                src="/contact-image12.png"
                alt="hudders"
                width={2000}
                height={2000}
                className="w-full h-[400px] object-cover -mt-14 "
                // sizes='400vh'
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;