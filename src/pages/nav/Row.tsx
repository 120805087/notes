import React from "react";
import { motion } from "framer-motion";

import "./index.css";

interface Props {
  item: {
    icon: string;
    name: string;
    link: string;
  };
}

const Row = ({ item }: Props) => {
  return (
    <div className="nav-row-item">
      <motion.div
        className="w-[100px] h-[98px]"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{
          scale: 1,
          rotate: -360,
          borderRadius: "100%",
        }}
      >
        <a
          className="w-full h-full rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-white hover:shadow-lg hover:text-black"
          href={item.link}
          target="_blank"
        >
          <img className="w-[50px] h-[50px]" src={item.icon} alt="" />
          <p className="mt-2 text-xs">{item.name}</p>
        </a>
      </motion.div>
    </div>
  );
};

export default Row;
