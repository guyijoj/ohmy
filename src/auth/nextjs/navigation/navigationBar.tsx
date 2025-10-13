const NavigationBar = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth()).padStart(2, "0");
  const year = now.getFullYear();
  const weekday = now.toLocaleDateString("en-EN", { weekday: "long" });
  return (
    <div className="w-full flex z-40 items-center p-5 justify-between bg-[#F8F8F8] fixed  top-0 h-20 shadow-sm text-neutral-950">
      <div className="text-5xl logo-font">
        <span className="text-[var(--main-themecolor)] ">S</span>
        <span className="text-[var(--sub-themecolor)]">H</span>
      </div>
      <div>
        <h2 className="text-lg font-medium leading-none ">
          {weekday.charAt(0).toUpperCase() + weekday.slice(1)}
        </h2>
        <h2 className="text-[#3ABEFF] text-md">{`${day}/${month}/${year}`}</h2>
      </div>
    </div>
  );
};

export default NavigationBar;
