// const submitPost = async () => {
// 	postResource({
// 		curriculumId: "4",
// 		learningUnitId: "2",
// 		name: "Hola mundo",
// 		url: "https://css-tricks.com/",
// 		description: "Un gran curso de css",
// 	});
// };

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ResourceCard from "../components/ ResourceCard/ ResourceCard";
<<<<<<< HEAD
import { useRouter } from "next/router";
import { postComment } from "../api/api";
import useCurrentUser from "../hooks/useCurrentUser";

function Resource() {
  const router = useRouter();
  const { roadmapId, checkpointId, id: resourceId } = router.query;
  const [comments, setComments] = useState([]);
  const { id: userId, name: userName, email: userEmail } = useCurrentUser();

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `/api/curriculums/${roadmapId}/learning_units/${checkpointId}/resources/${resourceId}/comments`
        );
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getComments();
  }, []); // TODO ver como hacer el render controladamente

  const submitHandler = async (input, comment) => {
    const createNewComment = postComment({
      roadmapId: roadmapId,
      checkpointId: checkpointId,
      resourceId: resourceId,
      content: input,
      user_id: userId,
      resource_id: resourceId,
    });
    //comments.push(createNewComment);
    setComments([...comments, createNewComment]);
  };

  return (
    <div>
      <ResourceCard
        title="Django Master"
        rating={3.5}
        dataList={comments}
        style={{ margin: "10%" }}
        newComment={(input) => submitHandler(input)}
      />
    </div>
  );
}
export default Resource;
