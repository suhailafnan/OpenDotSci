import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface WalletState {
  address: string | null;
}

const initialState: WalletState = {
  address: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const { setWalletAddress } = walletSlice.actions;
export default walletSlice.reducer;

// interface UserState {
//   walletAddress: string;
//   isConnected: boolean;
// }

// const initialState: UserState = {
//   walletAddress: '',
//   isConnected: false,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     connectWallet: (state, action: PayloadAction<string>) => {
//       state.walletAddress = action.payload;
//       state.isConnected = true;
//     },
//     disconnectWallet: (state) => {
//       state.walletAddress = '';
//       state.isConnected = false;
//     },
//   },
// });

// export const { connectWallet, disconnectWallet } = userSlice.actions;
// export default userSlice.reducer;
