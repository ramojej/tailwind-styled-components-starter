import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

const MobileMenuWrapper = styled(motion.div)`
  ${tw`p-2 bg-gray-700 absolute h-full w-full`}

  @media ${(props) => props.theme.screens.md} {
    ${tw`hidden`}
  }
`;

const MobileMenuInner = styled.div`
  ${tw`p-5 rounded-lg bg-gray-200`}
`;

export const AnimatedMobileMenuWrapper = ({ isExpanded, onClick }) => {
  console.log(isExpanded);
  return (
    <MobileMenuWrapper
      initial={{ x: isExpanded ? "100vw" : 0 }}
      animate={{ x: isExpanded ? 0 : "100vw", opacity: isExpanded ? 1 : 0 }}
      transition={{ type: "tween" }}
      onClick={onClick}
    >
      <MobileMenuInner onClick={(e) => e.stopPropagation()}>
        <p>adf</p>
        <button onClick={onClick}>X</button>
      </MobileMenuInner>
    </MobileMenuWrapper>
  );
};

AnimatedMobileMenuWrapper.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
