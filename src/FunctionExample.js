// export default function Action() {
//     if ( operation === '' && type === "digit" ) {
//         const newNumber = String(firstNumber) + String(calcSymbol);
//         setFirstNumber(newNumber)
//         setResult('')
//     }
//
//     if (type === 'action' && operation === '' && result === '') {
//         setOperation(calcSymbol)
//     }
//
//     if (type === 'action' && result !== '') {
//         setFirstNumber(result)
//         setResult('')
//         setOperation(calcSymbol)
//     }
//
//     if ( operation !== '' && type === "digit" ) {
//         const newNumber = String(secondNumber) + String(calcSymbol);
//         setSecondNumber(newNumber)
//     }
//
//
//     if (type === "equally" || type === 'action' && operation !== '') {
//         let newResult
//         const first = Number(firstNumber);
//         const second = Number(secondNumber)
//         switch (operation) {
//             case '+':
//                 newResult = first + second;
//                 break;
//             case '-':
//                 newResult = first - second;
//                 break;
//             case '*':
//                 newResult = first * second;
//                 break;
//             case '/':
//                 newResult = first / second;
//                 break;
//             default:
//                 newResult = '';
//         }
//         if (type === 'equally') {
//             setFirstNumber('')
//             setResult(+newResult.toFixed(12))
//             setOperation('')
//
//         } else if (type === 'action') {
//             setFirstNumber(newResult)
//             setOperation(calcSymbol)
//         }
//         setSecondNumber('')
//     }
//
//     if (calcSymbol === 'C' && secondNumber !== '') {
//         setSecondNumber('')
//     }
//
//     if (calcSymbol === 'C' && secondNumber === 0 || secondNumber === '') {
//         setFirstNumber('')
//         setOperation('')
//         setResult('')
//     }
//
//     if (calcSymbol === '+/-' && secondNumber !== '' || operation !== '') {
//         let newSecond = -secondNumber;
//         setSecondNumber(newSecond)
//     }
//
//     if (calcSymbol === '+/-' && secondNumber === '') {
//         let newFirst = -firstNumber;
//         setFirstNumber(newFirst)
//     }
//
//     if (calcSymbol === '%') {
//         if (secondNumber === '') {
//             let newFirstNumber = firstNumber / 100;
//             setFirstNumber(newFirstNumber)
//         }
//         if (secondNumber !== '') {
//             let newSecondNumber = secondNumber / 100;
//             setSecondNumber(newSecondNumber)
//         }
//     }
// }