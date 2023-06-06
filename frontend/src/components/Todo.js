const todo = (provided) => {
  const { color, paragraph, duration } = provided;

  return (
    <li className="w-full mt-5 relative p-4 font-bold text-xl bg-white rounded-2xl flex justify-between items-center">
      <p className="w-2/3 text-lg text-[rgba(0,34,106,0.75)]">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <span className="w-1/3 text-center text-[rgba(0,0,0,.3)]">1h 30m</span>
      <span className="absolute h-3/4 border-l-4 border-blue-600 -left-5 rounded-2xl"></span>
    </li>
  );
};

export default todo;
