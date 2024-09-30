"use client";
import Reply from "./Reply";
import {ReplyProps} from "../libs/types";

interface CommentsProps {
  username: string;
  ImagePath: string;
  commentTitle: string;
  likes: number;
  replies : ReplyProps [] |any ;
}
export default function Comment({
  ImagePath,
  username,
  commentTitle,
  likes,
  replies,
}: CommentsProps )  {
  return (
    <div>
      <div className="d-flex gap-2 my-2 ps-5">
          <img
            src={ImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{username}</span>
            <br />
            <span>{commentTitle}</span>
            <div className="d-flex align-items-center gap-1">
              {likes > 0 && <img src="/like.svg" width={20}></img>}
              {likes> 0 && <span className="text-muted">{likes} คน</span>}
            </div>
          </div>
        </div>
{replies.map( (reply:any) => (
  <Reply
    key={replies.username}
    Image={reply.image}
    username={reply.username}
    replyText={reply.replyText}
    likes={reply.likeNum}
></Reply>
))}
  </div>
  );
}
