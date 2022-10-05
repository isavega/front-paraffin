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
import ResourceCard from "../components/ ResourceCard/ ResourceCard";
import { useRouter } from "next/router";
import axios from "axios";

const dummyDataComents = [
  { userId: 1, userName: "Isa", comment: "Mejor que Rails" },
  { userId: 2, userName: "Vane", comment: "Un poco imbeeeecil el profe" },
];

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
  }, []);

  console.log(comments);

  return (
    <div>
      {comments?.map((comment, index) => (
        <ResourceCard
          key={index}
          title="Django Master"
          rating={3.5}
          dataList={comments}
          style={{ margin: "10%" }}
        />
      ))}
    </div>
  );
}
export default Resource;
