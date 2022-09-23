import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStoriesOfASpaceThunk,deleteStoryThunk } from "../store/stories/thunks";
import { selectSpace, selectStories } from "../store/stories/selectors";
import { selectUser } from "../store/user/selectors";
import { FormJ,FormSpace } from "../components";
export const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const space = useSelector(selectSpace);
  const stories = useSelector(selectStories);
  const sortedStories = [...stories].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const user = useSelector(selectUser);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
    const token = localStorage.getItem('token')
    
  const handleClick = () => {
    setToggle(!toggle);
  };
  const handleClick2 = () => {
    setToggle2(!toggle2);
  };
  useEffect(() => {
    setTimeout(()=>{dispatch(getStoriesOfASpaceThunk(id))},30)
    ;
  }, [dispatch, id]);

  return (
    <div style={{backgroundColor:space.backgroundColor,color:space.color}}>
      <h2>{space.title}</h2>
      <p>{space.description ? space.description : "No description yet"}</p>
      {user && user.id === space.userId && (
        <div>
          <button onClick={handleClick2}>Edit Space bro</button>
          <div style={{ display: !toggle2 ? "none" : "block" }}>
            <FormSpace id={id} />
          </div>
        </div>
      )}


      {user && user.id === space.userId && (
        <div>
          <button onClick={handleClick}>Post a cool story bro</button>
          <div style={{ display: !toggle ? "none" : "block" }}>
            <FormJ id={id} />
          </div>
        </div>
      )}

      <div>
        {sortedStories.map((el) => (
          <div key={el.id}>
            <h4>{el.name}</h4>
            <p>{el.content}</p>
            <img
              style={{ width: 250, height: 200 }}
              src={el.imageUrl}
              alt={el.name}
            />
            { space?.userId === user?.id && <button onClick={()=>dispatch(deleteStoryThunk(space.id,el.id,token))}>Delete</button>}
          </div>
        ))}
      </div>
    </div>
  );
};
