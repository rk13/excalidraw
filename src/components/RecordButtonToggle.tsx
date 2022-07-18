import "./ToolIcon.scss";

import { t } from "../i18n";
import React, { useState } from "react";
import { Dialog } from "./Dialog";
import { ToolButton } from "./ToolButton";
import { RECORD } from "../constants";
import { Theme } from "../element/types";
import { Card } from "./Card";
import { exportToFileIcon } from "./icons";

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
  const [modalIsShown, setModalIsShown] = useState(false);
  const handleClose = React.useCallback(() => {
    setModalIsShown(false);
  }, []);
  return (
    <>
      <ToolButton
        type="icon"
        icon={props.value === RECORD.PLAY ? ICONS.STOP_REC : ICONS.START_REC}
        // title={title}
        //aria-label={title}
        aria-label="title"
        onClick={() => {
          props.onChange(
            props.value === RECORD.PLAY ? RECORD.PAUSE : RECORD.PLAY,
          );
          if (props.value === RECORD.PAUSE) {
            setModalIsShown(true);
          }
        }}
        data-testid="toggle-record-mode"
      />
      {modalIsShown && (
        <Dialog onCloseRequest={handleClose} title={t("buttons.export")}>
          <div className="ExportDialog ExportDialog--json">
            <div className="ExportDialog-cards">
              <Card color="pink">
                <div className="Card-icon">{exportToFileIcon}</div>
                <h2>{t("exportDialog.link_title2")}</h2>
                <div className="Card-details">
                  {t("exportDialog.link_details")}
                </div>
                <ToolButton
                  className="Card-button"
                  type="button"
                  title={t("exportDialog.link_button2")}
                  aria-label={t("exportDialog.link_button2")}
                  showAriaLabel={true}
                  onClick={() => {}}
                />
              </Card>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
};

const ICONS = {
  STOP_REC: (
    <svg width="512" height="512" className="rtl-mirror" viewBox="0 0 512 512">
      <rect
        width="500"
        height="500"
        stroke="black"
        stroke-width="3"
        fill="red"
      />
    </svg>
  ),
  START_REC: (
    <svg width="512" height="512" className="rtl-mirror" viewBox="0 0 512 512">
      <circle
        cx="250"
        cy="250"
        r="250"
        stroke="black"
        stroke-width="3"
        fill="red"
      />
    </svg>
  ),
};
