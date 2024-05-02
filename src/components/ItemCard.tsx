import Button from "../utils/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function ItemCard({ titleValue }: { titleValue: string }) {
  return (
    <div className="flex items-center justify-between border border-black mt-4 p-4">
      <p>{titleValue}</p>
      <Button label={<FontAwesomeIcon icon={faEllipsisVertical} />} />
    </div>
  );
}
