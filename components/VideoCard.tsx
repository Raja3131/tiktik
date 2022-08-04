import React, { useState, useEffect, useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { BsPlay } from "react-icons/bs";

import { Video } from "./../types";

interface IProps {
  post: Video;
  isShowingOnHome?: boolean;
}
interface IProps {
  post: Video;
}
const VideoCard: NextPage<IProps> = ({ post }) => {
const imageUrl =post.postedBy.image
  
  return (
    <>
      <div className="flex flex-col border-b-2 border-gray-200 pb-6">
        <div>
          <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded ">
            <Link href="/">
              <>
                <Image
                  src={imageUrl}
                  width={40}
                  height={40}
                  className="rounded-full mr-2"
                  alt="profile"
                />
              </>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
