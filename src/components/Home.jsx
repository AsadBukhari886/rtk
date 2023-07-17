import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../api";
// import { authSlice } from "../redux/authSlice";

const HomePage = () => {
  const user = useSelector((state) => state.auth);
  // const { isLoading, error } = useGetUserQuery();
  console.log("Home user ", user?.user?.user?.name);
  if (!user || user == "undefined") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome {user?.user?.user?.name}</h2>
      <p>Your Email is {user?.user?.user?.email}</p>
      {/* {user && <p>Hello, {user.name}!</p>} */}
    </div>
  );
};

export default HomePage;

// import React from "react";
// // import { useSelector } from "react-redux";

// const HomePage = () => {
//   // const user = useSelector((state) => state.auth);
//   console.log("user logged in");

//   return (
//     <div>
//       <h2>Welcome to the Home Page!</h2>
//       {/* <p>Hello, {user.name}!</p> */}
//     </div>
//   );
// };

// export default HomePage;
