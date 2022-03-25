import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

const PostById = () => {
  const router = useRouter();

  const { postId } = router.query;

  // console.log(postId);
  return (
    <Layout>
      <div>
        <div className="flex flex-col items-center justify-center px-[2rem] pt-[8rem] pb-[5rem]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[2rem]">
            <div className="col-span-3"></div>
            <div className="col-span-1 bg-[#e3e3e3] border border-[#e3e3e3] rounded-md"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostById;
