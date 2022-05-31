import { useCallback, useEffect, useRef } from "react";

const useScrolhook = (callApi) => {
  const loaderRef = useRef(null);

  const loadNext = useCallback(
    (itemList) => {
      const target = itemList[0];
      if (target.isIntersecting) {
        console.debug("scroll success");
        callApi();
      }
    },
    [callApi]
  );

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", thresold: 0.25 };

    const observer = new IntersectionObserver(loadNext, options);

    if (loaderRef && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      observer.unobserve(loaderRef.current);
    };
  });

  return { loaderRef };
};

export default useScrolhook;
