import React from "react";
import styled from "styled-components";

{/* <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 0C5.1497 0 0 5.1497 0 11.5C0 17.8503 5.1497 23 11.5 23C17.8503 23 23 17.8503 23 11.5C23 5.1497 17.8503 0 11.5 0ZM8.15823 17.3848H5.35746V8.95858H8.15823V17.3848ZM6.75793 7.80798H6.73969C5.79984 7.80798 5.19199 7.161 5.19199 6.35241C5.19199 5.52557 5.81844 4.89648 6.77654 4.89648C7.73463 4.89648 8.32423 5.52557 8.34248 6.35241C8.34248 7.161 7.73463 7.80798 6.75793 7.80798ZM18.2572 17.3848H15.4568V12.877C15.4568 11.7441 15.0513 10.9715 14.0379 10.9715C13.2642 10.9715 12.8034 11.4926 12.6009 11.9957C12.5269 12.1758 12.5088 12.4274 12.5088 12.6792V17.3848H9.70821C9.70821 17.3848 9.74489 9.7491 9.70821 8.95858H12.5088V10.1516C12.881 9.57748 13.5469 8.76082 15.0329 8.76082C16.8755 8.76082 18.2572 9.96511 18.2572 12.5532V17.3848Z" fill="#E4E4E4"/>
</svg> */}



const LinkedIn = (props) => (
  <SvgCSS
    width={23}
    height={23}
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 0C5.1497 0 0 5.1497 0 11.5C0 17.8503 5.1497 23 11.5 23C17.8503 23 23 17.8503 23 11.5C23 5.1497 17.8503 0 11.5 0ZM8.15823 17.3848H5.35746V8.95858H8.15823V17.3848ZM6.75793 7.80798H6.73969C5.79984 7.80798 5.19199 7.161 5.19199 6.35241C5.19199 5.52557 5.81844 4.89648 6.77654 4.89648C7.73463 4.89648 8.32423 5.52557 8.34248 6.35241C8.34248 7.161 7.73463 7.80798 6.75793 7.80798ZM18.2572 17.3848H15.4568V12.877C15.4568 11.7441 15.0513 10.9715 14.0379 10.9715C13.2642 10.9715 12.8034 11.4926 12.6009 11.9957C12.5269 12.1758 12.5088 12.4274 12.5088 12.6792V17.3848H9.70821C9.70821 17.3848 9.74489 9.7491 9.70821 8.95858H12.5088V10.1516C12.881 9.57748 13.5469 8.76082 15.0329 8.76082C16.8755 8.76082 18.2572 9.96511 18.2572 12.5532V17.3848Z"
      fill="#E4E4E4"
    />
  </SvgCSS>
);

const SvgCSS = styled.svg`
path{
transition: 500ms ease-in-out;
}
&:hover {
  path {
    fill: #0177B5;
  }
}
`

export default LinkedIn;