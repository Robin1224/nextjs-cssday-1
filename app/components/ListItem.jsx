const ListItem = (props) => {
  return (
    <div className="max-w-screen-lg w-full flex justify-between gap-4">
      <img
        className="h-[8vh] my-[6vh] mx-[1vh] md:h-[14vh] md:my-[3vh] md:mx-[3vh] aspect-square rounded-md"
        src={props.data.speaker[0].avatar}
        alt={props.data.speaker[0].name}
      />
      <div className="flex flex-col gap-4 md:gap-0 justify-center w-full text-center">
        <h2 className="font-2049 text-sm md:text-4xl">{props.data.title}</h2>
        <p className="font-brut text-sm md:text-lg">{props.data.speaker[0].name}</p>
      </div>
      <div className="h-[8vh] my-[6vh] mx-[1vh] md:h-[14vh] md:my-[3vh] md:mx-[3vh] aspect-square flex flex-col justify-center gap-[3vh]">
        {props.data.video ? <a href={props.data.video["youtube-link"]} className="font-brut rounded-md h-full w-full flex items-center justify-center" style={{backgroundColor: props.buttonColor}}>Video {">"}</a> : null}
        {props.data.slides ? <a href={props.data.slides} className="font-brut rounded-md h-full w-full flex items-center justify-center" style={{backgroundColor: props.buttonColor}}>Slides {">"}</a> : null}
      </div>
    </div>
  );
};
export default ListItem;
