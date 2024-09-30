import Image from "next/image";
import styles from "./page.module.css";
import { comments } from "@/libs/comments";
import PostOwnner from "@/components/PostOwnner";
import { ReplyProps } from "@/libs/types";


interface CommentsProps {
  username: string;
  ImagePath: string;
  commentTitle: string;
  likes: number;
  replies : ReplyProps []  ;
}

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner
        PostTitle="Sorawit yokthlemthae 660610800"
        content="หนาวววววววววววววว"
        porfilepic="/profileImages/Sorawit.jpg"
        likes={0}
        ></PostOwnner>

        {/* Comment Example */}
        

        {/* Reply Example */}
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">หมาน้อย</span>
            <br />
            <span>จริงค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">2 คน</span>
            </div>
          </div>
        </div>

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}


