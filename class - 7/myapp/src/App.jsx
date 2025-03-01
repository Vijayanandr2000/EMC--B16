import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

const profiles = [
  {
    name: "Vijay 1",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    age: "23",
  },
  {
    name: "Vijay 2",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    age: "23",
  },
  {
    name: "Vijay 3",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    age: "23",
  },
  {
    name: "Vijay 4",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    age: "23",
  },
  {
    name: "Vijay 5",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    age: "23",
  },
  {
    name: "Vijay 5",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    age: "23",
  },
  {
    name: "Vijay 7",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    age: "23",
  },
  {
    name: "Vijay 8",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    age: "23",
  },
  {
    name: "Vijay 9",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    age: "23",
  },
  {
    name: "Vijay 10",
    photo:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    age: "23",
  },
];

// const user = {
//   name: "Vijay 1",
//   photo:
//     "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
//   age: "23",
// };

function App() {
  return (
    <>
      {/* <h1>vijay</h1> */}
      {/* <Header title={"head2"} /> */}
      {/* <ProfileCard name={user.name} photo={user.photo} age={user.age} /> */}
      {profiles.map(function (user) {
        return (
          <ProfileCard name={user.name} photo={user.photo} age={user.age} />
        );
      })}
    </>
  );
}

export default App;

// camelCase
// PascalCase

// idcard

// colleage

// {phot}

// {name}
// {age}
