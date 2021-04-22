import { getBlog } from "../JS/actions/blog";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Article from "./Article";
import { Link } from "react-router-dom";
import { toggleFlase } from "../JS/actions/edit";

const UserList = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogReducer.blog);
  const loading = useSelector((state) => state.blogReducer.loadblog);

  useEffect(() => {
    dispatch(getBlog());
  }, []);
  return (
    <div>
      <Link to={`/addArticle`}>
        <button onClick={() => dispatch(toggleFlase())}>Add</button>
      </Link>

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
          blog.map((el) => <Article key={el._id} article={el} />)
        )}
      </div>
    </div>
  );
};
export default UserList;
