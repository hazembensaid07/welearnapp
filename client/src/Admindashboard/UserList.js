import { getUsers } from "../JS/actions/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const loading = useSelector((state) => state.contactReducer.loadusers);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {loading ? (
        <h2>Loading</h2>
      ) : (
        users.map((el) => <User key={el._id} user={el} />)
      )}
    </div>
  );
};
export default UserList;
