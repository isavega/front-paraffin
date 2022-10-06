// const submitPost = async () => {
// 	postResource({
// 		curriculumId: "4",
// 		learningUnitId: "2",
// 		name: "Hola mundo",
// 		url: "https://css-tricks.com/",
// 		description: "Un gran curso de css",
// 	});
// };

import React, { useState, useEffect } from "react";
import axios from "axios";
import ResourceCard from "../components/ ResourceCard/ ResourceCard";
import { useRouter } from "next/router";
import { postComment } from "../api/api";

function Resource() {
  const router = useRouter();
  const { roadmapId, checkpointId, id: resourceId } = router.query;
  const [comments, setComments] = useState([]);

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
  });

  const submitHandler = async (input, comment) => {
    const createNewComment = postComment({
      roadmapId: roadmapId,
      checkpointId: checkpointId,
      resourceId: resourceId,
      content: input,
      user_id: "1", //TODO falta el user.id en el comment, ahora muestra el nombre del usuario y no el id
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
