// import { useEffect, useState, useRef, useReducer } from "react";
// import { TextAreaDiv } from "~/components/custom/textAreaDiv";
// import useTimeout from "~/hooks/useTimeout";
// import { shift } from "~/utils/arrayUtils";

// const inRange = (range, test) => {
//   if (range[0] == range[1]) return test[0] < range[0] && range[0] <= test[1];
//   else return !(range[1] <= test[0] || test[1] <= range[0]);
// };

// interface Action {
//   type: "add" | "shift" | "clear";
//   target?: { node: Node; className: string };
// }

// const queueReducer = (queue, a: Action) => {
//   switch (a.type) {
//     case "add":
//       return [...queue, a.target];
//     case "shift":
//       return shift(queue);
//     case "clear":
//       return [];
//   }
// };

// const splitNode = (node, range) => {
//   var centerNode = node.splitText(range[0]);
//   var nextNode = centerNode.splitText(range[1]);
//   return { centerNode: centerNode, nextNode: nextNode };
// };

// const wrapNode = (node, className) => {
//   var span = document.createElement("span");
//   node.parentNode.insertBefore(span, node);
//   span.appendChild(node);
//   span.className = className;
// };

// //animation is sometimes not rendering because of use effect, add "&& !animating" for different animation
// const SyntaxHighlightArea = () => {
//   const box = useRef<HTMLDivElement>();
//   const style = useRef<HTMLDivElement>();
//   const clipboard = useRef<string>();

//   const [queue, dispatchQueue] = useReducer(queueReducer, []);
//   const [requireRender, setRequireRender] = useState(false);
//   const [animating, setAnimating] = useState(false);
//   const { clear, reset } = useTimeout(() => setAnimating(false), 500);

//   useEffect(() => {
//     if (requireRender && !animating) {
//       renderInput();
//       setRequireRender(false);
//       dispatchQueue({ type: "clear" });
//     } else if (queue[0] && !animating) {
//       setAnimating(true);
//       wrapNode(queue[0].node, queue[0].className);
//       dispatchQueue({ type: "shift" });
//       reset();
//     }
//   });

//   const handleOnPaste = (e) => {
//     clipboard.current = e.clipboardData.getData("Text");
//   };

//   const handleOnInput = () => {
//     if (!animating) {
//       renderInput();
//     } else {
//       setRequireRender(true);
//     }
//   };

//   const renderInput = () => {
//     var cursor = document.getSelection().anchorOffset;
//     var range = clipboard.current ? [cursor - clipboard.current.length, cursor] : [cursor, cursor];
//     var children = box.current.cloneNode(true).childNodes;
//     style.current.replaceChildren(...children);

//     for (var i = 0; i < style.current.childNodes.length; i++) {
//       var node = style.current.childNodes[i];
//       if (node.nodeValue == "\n") {
//         node.replaceWith(document.createElement("br"));
//       } else if (i == 0) {
//         var matches = [...node.nodeValue.matchAll(/cake/g)].map((a) => [a.index, a.index + 4]);
//         var localMatches = matches.map((a, i) => (i == 0 ? a : [a[0] - matches[i - 1][1], a[1] - matches[i - 1][1]]));
//         console.log(localMatches);
//         //
//         var nextNode = node;
//         for (var j = 0; j < matches.length; ++j) {
//           var nodes = splitNode(nextNode, [localMatches[j][0], 4]);
//           if (inRange(range, matches[j])) {
//             dispatchQueue({ type: "add", target: { node: nodes.centerNode, className: "markup animated under red" } });
//           } else {
//             wrapNode(nodes.centerNode, "markup under red");
//           }
//           nextNode = nodes.nextNode;
//         }
//       }
//     }
//     clipboard.current = null;
//   };

//   return (
//     <>
//       <TextAreaDiv className="relative w-80">
//         <div ref={style} className="absolute px-7 py-6 w-full h-full top-0 left-0 text-transparent" contentEditable="plaintext-only"></div>
//         <div ref={box} className="relative px-7 py-6 w-full h-full" contentEditable="plaintext-only" onPaste={handleOnPaste} onInput={handleOnInput}></div>
//       </TextAreaDiv>
//     </>
//   );
// };
// export default SyntaxHighlightArea;
