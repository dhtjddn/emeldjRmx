"use client";

import { supabase } from "@/supabase/client";
import { useState } from "react";

function writePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const handleChangeButton = (e) => {
    setIsPublic(e.target.checked);
  };
  const handleSubmitButton = (e) => {
    e.preventDefault();
    supabase.from("diaries").insert([{ title, content, is_public: isPublic }]);
  };
  return (
    <form onSubmit={handleSubmitButton} className="flex flex-col gap-y-4">
      <div>
        <p>사진이나 동영상을 선택해주세요</p>
        <input type="file" />
      </div>
      <div>
        <p>일기 제목ssss</p>
        <input
          type="text"
          className="border w-72"
          placeholder="일기 제목을 적어주세요"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <p>일기 내용</p>
        <textarea
          className="border w-72 h-44 resize-none"
          placeholder="일기 내용을 적어주세요"
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex gap-x-5">
        <p>공개/비공개 여부</p>
        <input
          checked={isPublic}
          onChange={handleChangeButton}
          type="checkbox"
        />
      </div>
      <button className="border w-72 active:brightness-75">작성하기</button>
    </form>
  );
}
export default writePage;