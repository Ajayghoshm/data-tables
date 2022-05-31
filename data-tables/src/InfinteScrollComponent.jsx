import useScrolhook from "./utils/useScroll";

const InfiniteScroll = ({ onScroll }) => {
  const { loaderRef } = useScrolhook(onScroll);
  return <div ref={loaderRef}></div>;
};

export default InfiniteScroll;
