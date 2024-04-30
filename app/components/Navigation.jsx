"use client";

import VerticalBar from "./VerticalBar";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import {
  decrement,
  increment,
} from "../../lib/features/currentYear/currentYearSlice";
import Color from "color";

const Navigation = (props) => {
  const year = useAppSelector((state) => state.currentYear.value);
  const dispatch = useAppDispatch();
  const colorDark = Color(props.data[year].color.hex).darken(0.1);

  return (
    <VerticalBar color={props.data[year].color.hex}>
        <nav className="max-w-screen-lg w-full flex justify-between gap-4" key={year}>
          <button
            style={year > 2013 ? { backgroundColor: colorDark } : {opacity: 0, pointerEvents: "none"}}
            className="h-[10vh] my-[5vh] mx-[1vh] ib:h-[12vh] ib:my-[4vh] ib:mx-[4vh] aspect-square rounded-md"
            onClick={() => dispatch(decrement())}
          >
            {"<"}
          </button>
          <div className="flex flex-col justify-center w-full text-center">
            <h1 className="font-2049 text-lg md:text-4xl">{props.data[year].title}</h1>
            <span className="font-2049">{props.data[year].venue}</span>
          </div>
          <button
            style={year < 2024 ? { backgroundColor: colorDark } : {opacity: 0, pointerEvents: "none"}}
            className="h-[10vh] my-[5vh] mx-[1vh] ib:h-[12vh] ib:my-[4vh] ib:mx-[4vh] aspect-square rounded-md"
            onClick={() => dispatch(increment())}
          >
            {">"}
          </button>
        </nav>
    </VerticalBar>
  );
};
export default Navigation;
