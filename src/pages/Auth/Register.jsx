import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import Navber from "../../components/Navber";

const Register = () => {
  const { createUser, handlegoogllogin, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    handlegoogllogin()
      .then((result) => {
        toast.success("Signed in successfully with Google!");
        updateUserProfile({
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
        toast.error(error.message);
      });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const userdata = { photo, email, name };
    try {
      // Create the user
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      // save data to db
      fetch("http://localhost:3000/regestation", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userdata),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("send to data ", data);
          toast.success("Account created successfully!");
          navigate("/");
        });
      // Update profile
      await updateUserProfile({
        displayName: name,
        photoURL: photo,
      });
    } catch (error) {
      console.error("Registration error:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Navber />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleRegister}
          className="bg-white p-8 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Sign Up
          </h2>
          <div>
            {" "}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className=" mb-6 flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photo"
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Register
          </button>

          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
