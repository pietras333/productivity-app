import BoardNav from "./BoardNav";
import ListDisplay from "./ListDisplay";

const List = () => {
  return (
    <main className="w-screen h-screen flex items-center bg-home bg-cover bg-no-repeat">
      <BoardNav />
      <ListDisplay />
    </main>
  );
};
export default List;
