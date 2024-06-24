import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-green-700 min-h-screen relative">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-green-700"></div>
      <div className="absolute inset-y-0 right-0 w-1/2 bg-white p-8 rounded-l-3xl shadow-md">
        <div className="flex flex-col justify-center pt-32 px-16 p-4 text-4xl font-bold">
          Daftar
        </div>
        <div className="px-16 py-1.5 mb-2">
          <input
            type="text"
            name="username"
            className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black"
            placeholder="Nama Pengguna"
          />
          <input
            type="email"
            name="email"
            className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black mt-2"
            placeholder="Alamat Email"
          />
          <input
            type="password"
            name="password"
            className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black mt-2"
            placeholder="Sandi"
          />
          <div className="flex items-center mt-2">
            <input type="checkbox" id="terms" className="w-4 h-4" />
            <label htmlFor="terms" className="text-sm ml-2 text-green-700">
              Saya menyetujui dengan Kebijakan Privasi dan Ketentuan Penggunaan
            </label>
          </div>
          <Link to="/src/pages/SignIn.jsx"
            type="submit"
            className="px-16 py-3 mt-4 text-white text-center bg-primary-700 font-normal rounded-lg block w-full p-4 text-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500"
          >
            Daftar
          </Link>
          <div className="mt-2 text-sm">
            Sudah memiliki akun?{" "}
            <Link
              to="/src/pages/SignIn.jsx"
              className="text-primary-600 hover:text-green-800"
            >
              Masuk
            </Link>
          </div>
          <p className="text-center mt-2"></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;