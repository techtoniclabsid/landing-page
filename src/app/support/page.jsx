import React from "react";

const Page = () => {
  return (
    <div>
      <section className="bg-white dark:bg-[#09090b] pt-20">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Bantuan
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400 sm:text-xl">
            Punya masalah teknis?, Ingin memberikan masukan tentang fitur kami?
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="nama@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Judul
              </label>
              <input
                type="text"
                id="subject"
                placeholder="judul pesan"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Isi pesan
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="pesan"
              ></textarea>
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium  text-white rounded-lg bg-cyan-500 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-500 dark:hover:bg-cyan-400 "
              >
                Kirim pesan
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Page;
