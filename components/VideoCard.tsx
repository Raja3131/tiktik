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

const VideoCard: NextPage<IProps> = ({ post }) => {

useEffect(() => {
  console.log(post.postedBy.image)
}, []);

const imageUrl =post.postedBy.image

  const [playing, setPlaying] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef?.current?.pause();
      setPlaying(false);
    } else {
      videoRef?.current?.play();
      setPlaying(true);
    }
  };


  
  return (
    <>
      <div className="flex flex-col border-b-2 border-gray-200 pb-6">
        <div>
          <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded ">
            <Link href="/">
              <>
              {
                imageUrl.length > 0 ? (
                  <Image
                    src={imageUrl}
                    width={50}
                    height={50}
                    layout="fill"
                    className="rounded-full"
                    alt="profile"
                  />
                ) : (
                  <Image
                    src="/images/default-user.png"
                    width={50}
                    height={50}
                    layout="fill"
                    className="rounded-full"
                    alt="default-user"
                  />
                )

              }
              </>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <div>
                <>{post.postedBy.userName}</>
                <GoVerified className="text-blue-400 text-md"/>
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:ml-20 flex gap-4 relative">
          <div  onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className='rounded-3xl'>
            <Link href='/'>
              <video
                ref={videoRef}
                src={post.video.asset.url}
                className='lg:w-[600px] h-[300px] md:h-[400px] lg:h-[528px] w-[200px] rounded-2xl cursor-pointer bg-gray-100'
              >
                
              </video>
            </Link>
            {isHover && (
            <div className='absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] lg:w-[600px] p-3'>
              {playing ? (
                <button title="empty" onClick={onVideoPress}>
                  <BsFillPauseFill className='text-black text-2xl lg:text-4xl' />
                </button>
              ) : (
                <button title="empty" onClick={onVideoPress}>
                  <BsFillPlayFill className='text-black text-2xl lg:text-4xl' />
                </button>
              )}
              {isVideoMuted ? (
                <button title="empty" onClick={() => setIsVideoMuted(false)}>
                  <HiVolumeOff className='text-black text-2xl lg:text-4xl' />
                </button>
              ) : (
                <button title="empty" onClick={() => setIsVideoMuted(true)}>
                  <HiVolumeUp className='text-black text-2xl lg:text-4xl' />
                </button>
              )}
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
