export const Card = ({ children }: any) => {
  return (
    <div className="bg-[var(--background)] flex items-center  shadow-md shadow-gray-800  px-6 py-4 rounded-lg border-1 border-gray-300">
      {children}
    </div>
  );
};
export const CardTitle = ({ children }: any) => {
  return (
    <div className="text-4xl mb-6 font-bold text-[var(--main-textcolor)]">
      {children}
    </div>
  );
};
export const CardContent = ({ children }: any) => {
  return <div className=" ">{children}</div>;
};

export const CardItem = ({ children }: any) => {
  return <div className="text-start">{children}</div>;
};
export const CardForm = ({ children }: any) => {
  return <div className="">{children}</div>;
};
export const CardPic = ({ children }: any) => {
  return <div className="">{children}</div>;
};
