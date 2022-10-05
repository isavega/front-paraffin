// const submitPost = async () => {
// 	postResource({
// 		curriculumId: "4",
// 		learningUnitId: "2",
// 		name: "Hola mundo",
// 		url: "https://css-tricks.com/",
// 		description: "Un gran curso de css",
// 	});
// };

import ResourceCard from "../components/ ResourceCard/ ResourceCard";

const dummyDataComents = [
  { userId: 1, userName: "Isa", comment: "Mejor que Rails" },
  { userId: 2, userName: "Vane", comment: "Un poco imbeeeecil el profe" },
];

function Resource() {
  return (
    <div>
      <ResourceCard
        title="Django Master"
        rating={3.5}
        dataList={dummyDataComents}
        style={{ margin: "10%" }}
      />
    </div>
  );
}
export default Resource;
