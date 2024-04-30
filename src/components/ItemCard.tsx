import Button from "../utils/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function ItemCard() {
  return (
    <div className="flex items-center justify-between border border-black mt-4 p-4">
      <p>item</p>
      <Button
        className=""
        label={<FontAwesomeIcon icon={faEllipsisVertical} />}
      />
    </div>
  );
}
