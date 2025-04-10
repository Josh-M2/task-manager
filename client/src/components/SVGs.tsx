import elipseSVG from "@/assets/elipse-vertical.svg";
import plusSVG from "@/assets/plus.svg";
import editSVG from "@/assets/edit.svg";
import trashBinSVG from "@/assets/trash-bin.svg";

export const ElipseVertical = () => {
  return (
    <>
      <img
        className="h-4 dark:invert dark:brightness-200"
        src={elipseSVG}
        alt="elipse-vertical"
      />
    </>
  );
};

export const PlusSVG = () => {
  return (
    <>
      <img
        className="h-4 dark:invert dark:brightness-200"
        src={plusSVG}
        alt="plus"
      />
    </>
  );
};

export const EditSVG = () => {
  return (
    <>
      <img
        className="h-4 dark:invert dark:brightness-200"
        src={editSVG}
        alt="editSVG"
      />
    </>
  );
};

export const TrashBinSVG = () => {
  return (
    <>
      <img
        className="h-4 dark:invert dark:brightness-200"
        src={trashBinSVG}
        alt="trashBinSVG"
      />
    </>
  );
};
