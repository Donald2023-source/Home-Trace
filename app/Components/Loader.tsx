import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="500"
      width="500"
      color="#fff"
      radius="10"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
export default Loader;
