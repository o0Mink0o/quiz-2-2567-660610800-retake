"use client";

import { profile } from "console";

interface PostComponent {
content: string;
porfilepic : string;
PostTitle: string;
likes : number;
}
export default function PostOwnner({
  content,
  porfilepic,
  PostTitle,
  likes,

}: PostComponent) {
  return <div>
<div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src={porfilepic}
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5">{PostTitle}</span>
          </div>

          <span>{content}</span>

          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">{likes}</span>
          </div>
          <hr className="m-0 border" />
        </div>
  </div>;
}
