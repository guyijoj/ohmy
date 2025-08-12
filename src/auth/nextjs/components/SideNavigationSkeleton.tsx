export const SideNavigationSkeleton = () => {
  return (
    <div className="relative pt-9 mb-3 animate-pulse">
      <div className=" w-18 h-18 bg-[#ff6767] dark:bg-[#fe5050] p-1 rounded-full absolute left-1/2 bottom-4 -translate-1/2 shadow-sm shadow-black" />
      <div className="flex flex-col gap-1.5 items-center mt-2">
        <div className="h-5 w-16 bg-[#fe5050] dark:bg-[#fe4545] rounded" />
        <div className="h-3.5 w-32 bg-[#fe5050] dark:bg-[#fe4545] rounded" />
      </div>
    </div>
  );
};
