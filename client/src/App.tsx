// import { useAppDispatch, useAppSelector } from './hooks';
// import { connectWallet, disconnectWallet } from './redux/features/user/userSlice';

// function App() {
//   const dispatch = useAppDispatch();
//   const user = useAppSelector((state) => state.user);

//   return (
//     <div className="text-center p-8">
//       <h1 className="text-4xl font-bold mb-4">OpenDotSci 🔬</h1>
//       {user.isConnected ? (
//         <>
//           <p className="text-green-500">Connected as: {user.walletAddress}</p>
//           <button
//             className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
//             onClick={() => dispatch(disconnectWallet())}
//           >
//             Disconnect
//           </button>
//         </>
//       ) : (
//         <button
//           className="px-4 py-2 bg-blue-600 text-white rounded"
//           onClick={() => dispatch(connectWallet('0xYourWalletAddressHereee'))}
//         >
//           Connect Wallet
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;
import Landing from './pages/Landing';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Landing />
    </div>
  );
}

export default App;
