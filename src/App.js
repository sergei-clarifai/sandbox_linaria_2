import React, { useCallback, useState } from "react";

import { css, cx } from "@linaria/core";

const pointerClass = css`
  cursor: pointer;
`;

const redBoldClass = css`
  color: red;
  font-weight: bold;
`;

const greenClass = css`
  color: green;
`;

const App = () => {
  const [toggled, setToggled] = useState(false);
  const onClick = useCallback(() => setToggled((v) => !v), [setToggled]);

  return (
    <div>
      React app template.
      <div
        onClick={onClick}
        className={cx(
          pointerClass,
          toggled && redBoldClass,
          !toggled && greenClass
        )}
      >
        Click to change a color....
      </div>
    </div>
  );
};

export default App;
