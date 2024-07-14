export const Header = (props: { children }) => {
  return (
    <header className="even-shadow flex border-[0.5px] items-center gap-4 px-4 mb-3 h-14 bg-white w-[80%] rounded-r-full">
      <h1 className="text-lg font-semibold pl-[5%]">{props.children}</h1>
    </header>
  );
};

//after:filter blur-[20px]
