import Button from "../utils/Button";

const NewColumnButton = ({ addColumn }: any) => {
  return (
    <div className="w-[18.75rem] border-solid border border-black p-4">
      <Button
        onClick={addColumn}
        className="border w-full border-black p-2"
        label="Add new Column"
      />
    </div>
  );
};

export default NewColumnButton;
