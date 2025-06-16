import { useEffect, useState } from "react";

const ChangePageTitleName = () => {
  const [countTitle, setCountTitle] = useState(0);

  useEffect(() => {
    document.title = `Title : ${countTitle}`;
  }, [countTitle]);
  return (
    <div>
      <h3>Title name is : {countTitle}</h3>
      <button
        onClick={() => {
          setCountTitle(countTitle + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default ChangePageTitleName;
