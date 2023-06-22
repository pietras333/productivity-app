import approve from "../assets/illustrations/icons/approve.png";

const ApproveButton = ({ addSubTask }) => {
  const handleAddition = () => {
    addSubTask();
  };

  return (
    <section
      onClick={handleAddition}
      className="w-[30px] h-[30px] flex justify-center items-center absolute right-3"
    >
      <button className="w-full h-full border-2 border-[#EBEBEB] rounded-lg">
        <img
          src={approve}
          alt="done"
          className="w-full h-full rounded-md transition-all"
        />
      </button>
    </section>
  );
};
export default ApproveButton;
