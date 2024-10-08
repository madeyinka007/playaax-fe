import { useEffect } from "react";
import PropTypes from "prop-types";
export function useLockBodyScroll(freezeBodyScroll) {
  useEffect(() => {
    let paddingRight = document.documentElement.style.paddingRight;
    let scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (freezeBodyScroll) {
      document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
      window.document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.removeProperty("overflow");
    }
    return () => {
      document.documentElement.style.paddingRight = paddingRight;
    };
  }, [freezeBodyScroll]);
}

useLockBodyScroll.propTypes = {
  freezeBodyScroll: PropTypes.bool,
};
