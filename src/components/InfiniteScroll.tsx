import React, { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  loadMore: () => void;
  children: React.ReactNode;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ loadMore, children }) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }
  }, [loadMore]);

  return (
    <div>
      {children}
      <div ref={lastElementRef} style={{ height: 1 }} />
    </div>
  );
};

export default InfiniteScroll;
