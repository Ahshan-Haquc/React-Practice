import { useEffect, useState } from "react";
const DummyApiDataFetch = (props) => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((responseObjData) => setUserInfo(responseObjData));
  }, []);
  return (
    <>
      {userInfo.map((user, index) => {
        return (
          <div>
            User {index} Info:
            <ul>
              <li>{user.name}</li>
              <li>{user.username}</li>
              <li>{user.email}</li>
            </ul>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default DummyApiDataFetch;
