"use client";

import VerticalBar from "./VerticalBar";
import ListItem from "./ListItem";
import { useAppSelector } from "../../lib/hooks";
import Color from "color";

const TalksList = (props) => {
  const year = useAppSelector((state) => state.currentYear.value);
  console.log(props.data[year].color.hex);

  const colors = [Color(props.data[year].color.hex).darken(0.1), props.data[year].color.hex];
  const buttonColors = [props.data[year].color.hex, Color(props.data[year].color.hex).darken(0.1)];

  return (
    <ul>
      {props.data[year].talks.map((talk, index) => (
        <li key={index}>
          <VerticalBar color={colors[index % colors.length]} framerKey={`li${year}${index}`}>
            <ListItem data={talk} buttonColor={buttonColors[index % buttonColors.length]} />
          </VerticalBar>
        </li>
      ))}
    </ul>
  );
};
export default TalksList;
