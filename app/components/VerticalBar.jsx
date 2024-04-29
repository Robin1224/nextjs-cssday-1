const VerticalBar = (props) => {
  return (
    <div className={"w-screen h-[20vh] min-h-20 overflow-hidden"}>
      <div
        style={{ backgroundColor: props.color }}
        className="w-screen flex justify-center h-full">
        {props.children}
      </div>
    </div>
  );
};
export default VerticalBar;
