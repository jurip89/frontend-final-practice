import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createStoryThunk } from "../store/stories/thunks";
export const FormJ = ({ id }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if(!name) return
    imageUrl  === '' &&
      setImageUrl(
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
      );
    dispatch(createStoryThunk(token, id, { name, content, imageUrl }));
    setName("");
    setContent("");
    setImageUrl("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h5>Create a new Story Bro</h5>
      <form onSubmit={submit}>
        <p>
          Name:
          <input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          Content:
          <input
            type="text"
            placeholder="Write here something"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </p>
        <p>
          Image Url:
          <input
            type="text"
            placeholder="image url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </p>
        <br />
        <button type="submit">Create!</button>
      </form>
      {imageUrl ? (
        <div
          style={{ width: 250, height:250, backgroundImage:`url(${imageUrl})`,backgroundSize:'cover',backgroundPosition:'center'}}
          // src={imageUrl}
          // alt="maybe broken maybe incomplete"
        />
      ) : (
        <div>Nothing to show</div>
      )}
    </div>
  );
};
