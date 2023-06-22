const listItem = (provided) => {
  const { img, name, count } = provided;

  return (
    <li className="w-full mt-2 flex p-2 rounded-xl items-center relative hover:border-[#EBEBEB] border-2 border-transparent hover:cursor-pointer">
      <img src={img} alt={`${img}`} className="w-[25px] h-[25px] ml-6" />
      <h3 className="text-xl font-medium ml-3">{name}</h3>
      <span className="absolute right-3 text-lg opacity-25">{count}</span>
    </li>
  );
};

export default listItem;
