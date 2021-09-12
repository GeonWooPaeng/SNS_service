import { useRef, useState, useEffect, useCallback } from "react";

const useInfiniteScroll = (targetEl) => {
  const observerRef = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  //   const observer = new IntersectionObserver((entries) =>
  //     //entires에서 일부가 하나라도 있으면 true 없으면 false
  //      setIntersecting(entries.some((entry) => entry.isIntersecting))
  //   );

  // 새로고침때마다 계속 useInfiniteScroll이 실행 되는 것을 막기 위함
  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) =>
        //entires에서 일부가 하나라도 있으면
        setIntersecting(entries.some((entry) => entry.isIntersecting))
      );
    }
    return observerRef.current;
  }, [observerRef.current]);

  //   useEffect(() => {
  //      감시할 대상 지정
  //     if (targetEl.current) observer.observe(targetEl.current);

  //     return () => {
  //    useInfiniteScroll이 화면상에 존재하지 않을 때
  //       observer.disconnect();
  //     };
  //   }, [targetEl.current]);

  useEffect(() => {
    if (targetEl.current) getObserver().observe(targetEl.current);

    return () => {
      //    useInfiniteScroll이 화면상에 존재하지 않을 때
      getObserver().disconnect();
    };
  }, [targetEl.current]);

  return intersecting;
};

export default useInfiniteScroll;
