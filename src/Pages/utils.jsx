import React from "react";

const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
      if (options.triggerOnce) observer.unobserve(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
};

const animateOnVisible = (ref, isIntersecting, animation) => {
  if (isIntersecting) {
    ref.current.style.opacity = 1;
    ref.current.classList.add(animation);
  } else {
    ref.current.classList.remove(animation);
    ref.current.style.opacity = 0;
  }
};

export { useIntersectionObserver, animateOnVisible };
