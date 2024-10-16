import { supabase } from "@/supabase/client";
import Link from "next/link";

export const revalidate = 0;
async function PublicPage() {
  const response = await supabase.from("diaries").select();
  const diaries = response.data;
  console.log(response);
  const baseURL =
    "https://kudrchaizgkzyjzrkhhy.supabase.co/storage/v1/object/public";

  return (
    <>
      {/* 일기쓰기 버튼 */}
      <div className="mt-[30px] ml-[50px] py-2 rounded-[8px] w-[100px] h-[40px] font-semibold text-BrownPoint bg-point text-center transition duration-300 hover:bg-BrownPoint hover:text-white">
        <Link href={"/diaries/write"}>일기쓰기</Link>
      </div>
      {/* 클릭하면 일기 상세페이지로 들어감 */}
      <div className="ml-[50px] grid grid-cols-4">
        {diaries?.map((diary) => {
          return (
            <Link href={`/diaries/${diary.id}/detail`}>
              <div className="relative group mt-[30px] rounded-[8px] w-[280px] h-[370px] bg-point border-2 border-transparent">
                {/* 바깥쪽 테두리 쉐도우 */}
                <div className="absolute inset-0 rounded-[8px] group-hover:shadow-[0_0_20px_rgba(161,119,98,0.5)] transition duration-300"></div>

                <div className="flex items-center">
                  <div className="m-2 inline-block rounded-full bg-white w-[40px] h-[40px]"></div>
                  <span className="inline-block text-sm font-semibold text-BrownPoint">
                    jjugguming
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="w-[300px] h-[200px] object-cover"
                    src={`${baseURL}/${diary.imageUrl}`}
                  />
                </div>
                <div className="ml-5 flex gap-2">
                  <div className="w-[30px] h-[30px] bg-BrownPoint">좋</div>
                  <p>123</p>
                  <div className="w-[30px] h-[30px] bg-BrownPoint">댓</div>
                  <p>12</p>
                </div>
                <div className="text-center text-BrownPoint mt-[10px] font-semibold">
                  <p>{diary.title}.</p>
                </div>
                <div className="text-center text-BrownPoint mt-[10px]">
                  <p>{diary.content}.</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default PublicPage;
