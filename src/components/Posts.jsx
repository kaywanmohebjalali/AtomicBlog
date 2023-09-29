/* eslint-disable react-refresh/only-export-components */

import { memo } from "react";
import List from "./List";

const Posts = () => {
    return (
        <section>
          <List />
        </section>
      );
}

export default memo(Posts)
