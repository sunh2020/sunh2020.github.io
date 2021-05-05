// import React, { useState } from "react";

// const Likes = (props) => {
//   // likeCount can change, but needs to start out as the value that is passed in from props.
//   // useState is given the starting value
//   const [likeCount, setLikeCount] = useState(props.likeCount);
//   console.log(props);

//   function like() {
//     setLikeCount(likeCount + 1);
//     console.log(likeCount);
//   }

// //   const numOfFireEmojis = Math.floor(likeCount / 10);
// //   /**
// //    * We need to take the numOfFireEmojis number and create an array out of it
// //    * containing the HTML for displaying a fire emoji because react needs an
// //    * array to loop over to display the repeated HTML elements.
// //    *
// //    * To create an array with N amount of items in it, I googled
// //    * "javascript create array with N elements"
// //    */

// //   const fireEmojiElements = Array.from(
// //     { length: numOfFireEmojis },
// //     (_, index) => {
// //       return <span>🔥</span>;
// //     }
// //   );

//   return (
//     <div className="profile text-center mr-5 border p-4 shadow rounded">
//       {/* <h2>{props.username}</h2>
//       <p>{props.bio}</p>
//       <img
//         className="thumbnail rounded-circle"
//         src={props.thumbnailUrl}
//         alt="Profile"
//       /> */}
//       <h2 className="mt-3">
//         <span
//           onClick={(event) => {
//             like();
//           }}
//           className="text-danger pointer"
//         >
//           &hearts;
//         </span>{" "}
//         {likeCount}
//       </h2>
//       <p>{fireEmojiElements}</p>
//     </div>
//   );
// };

// export default Likes;