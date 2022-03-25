import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import CustomImage from "../../../components/CustomImage";

const PostById = () => {
  const router = useRouter();

  const { postId } = router.query;

  // console.log(postId);
  return (
    <Layout>
      <div>
        <div className="flex flex-col items-center justify-center px-[2rem] pt-[8rem] pb-[5rem]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[2rem]">
            <div className="col-span-3">
              <div className="header">
                <CustomImage
                  className=""
                  src="/sampleId.jpg"
                  width={1000}
                  height={400}
                />
                <div className="heading text-[1.5rem] md:text-[2.5rem]">
                  <h1>This is a blog title</h1>
                </div>
                <div className="info mb-[1rem] md:mb-[2rem] flex items-end justify-between w-[335px]">
                  <div className="avatar rounded-full">
                    <CustomImage src="/sampleId.jpg" width={50} height={50} />
                  </div>
                  <span className="author text-[1rem] md:text-[1.2rem]">
                    Martins Ngene
                  </span>{" "}
                  <span className="date text-[0.8rem] md:text-[1rem] text-[#aaa]">
                    March 1 , 2022
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-[3rem] mx-auto">
                  <p className="text-[1rem] text-[#718096] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </div>
                <div className="mb-[5rem] mx-auto">
                  <p className="text-[1rem] text-[#718096] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-[#e3e3e3] border border-[#e3e3e3] rounded-md"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostById;
