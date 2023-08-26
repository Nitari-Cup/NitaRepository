// import { useState } from "react";

// function Recommend() {
//     const [step, setStep] = useState(1);
//     const [selectedOption, setSelectOption] = useState(null);

//     //next step
//     const handleOptionSelect = (option) => {
//         setSelectOption(option);
//         if (option===2) {
//             setStep(-1);
//         }else {
//             setStep(step + 1);
//         }
//     };

//     //questions
//     const renderContent = () => {
//         switch(step) {
//             case 1:
//                 return (
//                     <div>
//                         <p>今MacBookが欲しいですか？</p>
//                         <button onClick={() => handleOptionSelect(1)}>欲しい！</button>
//                         <button onClick={() => handleOptionSelect(2)}>いらない</button>
//                     </div>
//                 );
//             case 2:
//                 return (
//                     <div>
//                         <p>ネットサーフィン、レポート以外にやりたいことがありますか？</p>
//                         <button onClick={() => handleOptionSelect(1)}>ある！</button>
//                         <button onClick={() => handleOptionSelect(2)}>ない</button>
//                     </div>
//                 );
//             case 3:
//                 return (
//                     <div>
//                         <p>ゲームはPCでやりたいですか？</p>
//                         <button onClick={() => handleOptionSelect(2)}>やる！</button>
//                         <button onClick={() => handleOptionSelect(1)}>やらない！</button>
//                     </div>
//                 )
//             case -1:
//                 return <p>終了しました。</p>
//             default:
//                 return <p>無効なステップです。</p>
//         }
//     }
//     return(
//         <div>
//             <h1></h1>
//             <div>
//                 {renderContent()}
//             </div>
//         </div>
//     )
// }

// export default Recommend;
