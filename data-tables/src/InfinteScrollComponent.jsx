import useScrolhook from "./utils/useScroll";

const InfiniteScroll = ({ onScroll }) => {
  //the ref used for infinte scroll
  const { loaderRef } = useScrolhook(onScroll);
  return <div ref={loaderRef}></div>;
};

export default InfiniteScroll;
