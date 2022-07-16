import "./ToolIcon.scss";

import { t } from "../i18n";
import { ToolButton } from "./ToolButton";
import { RECORD } from "../constants";
import { Theme } from "../element/types";

// We chose to use only explicit toggle and not a third option for system value,
// but this could be added in the future.
export const RecordButtonToggle = (props: {
  value: Theme;
  onChange: (value: Theme) => void;
  title?: string;
}) => {
  // const title =
  //   props.title ||
  //   (props.value === "play" ? t("buttons.lightMode") : t("buttons.darkMode"));

  return (
    <ToolButton
      type="icon"
      icon={props.value === RECORD.PLAY ? ICONS.STOP_REC : ICONS.START_REC}
      // title={title}
       //aria-label={title}
       aria-label="title"
      onClick={() =>
        props.onChange(props.value === RECORD.PLAY ? RECORD.PAUSE : RECORD.PLAY)
      }
      data-testid="toggle-record-mode"
    />
  );
};

const ICONS = {
  STOP_REC: (
    <svg width="512" height="512" className="rtl-mirror" viewBox="0 0 512 512">
      <rect width="500" height="500" stroke="black" stroke-width="3" fill="red" />
    </svg>
  ),
  START_REC: (
    <svg width="512" height="512" className="rtl-mirror" viewBox="0 0 512 512">
      <circle cx="250" cy="250" r="250" stroke="black" stroke-width="3" fill="red" />
    </svg>
  ),
};
