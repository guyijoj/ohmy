export const Card = ({ children }: any) => {
  return (
    <div className="bg-gray-800  shadow-md shadow-gray-800  p-3 rounded-lg border-1 border-gray-300">
      {children}
    </div>
  );
};
export const CardTitle = ({ children }: any) => {
  return <div className="text-2xl mb-3 text-center">{children}</div>;
};
export const CardContent = ({ children }: any) => {
  return <div className="text-center">{children}</div>;
};

export const CardItem = ({ children }: any) => {
  return <div className="text-start">{children}</div>;
};
