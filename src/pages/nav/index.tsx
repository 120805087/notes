import React from "react";
import classNames from "classnames";
import { useDark } from "rspress/runtime";
import { Divider } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";

import Row from "./Row";
import { data } from "./data";

import "./index.css";

export default function Nav() {
  const dark = useDark();
  return (
    <div
      className={classNames("nav-container", {
        "bg-slate-50": !dark,
        "bg-slate-800": dark,
      })}
    >
      <div className="container mx-auto first:pt-6">
        {data.map((item, index) => (
          <div key={index}>
            <div className="text-center font-semibold text-4xl italic">
              {item.groupName}
            </div>
            <div className="nav-rows">
              {item.items.map((it, idx) => (
                <Row key={idx} item={it} />
              ))}
            </div>
            {data.length - 1 !== index && (
              <Divider
                style={{
                  borderBottomWidth: 2,
                  borderBottomStyle: "dotted",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
