import { useSignAndExecuteTransactionBlock } from '@mysten/dapp-kit';
import { SuiClient } from '@mysten/sui.js/client';
import { create } from 'zustand';
import { WalletAccount } from '@wallet-standard/base';

type ContractStoreState = {
  client: (SuiClient & { command: ReturnType<typeof useSignAndExecuteTransactionBlock> }) | null;
  account: WalletAccount | null;
  coin: { sui: string } | null;
  user: { id: string } | null;
};
type ContractStoreAction = {
  setClient: (client: ContractStoreState['client']) => void;
  setAccount: (account: ContractStoreState['account']) => void;
  setCoin: (account: ContractStoreState['coin']) => void;
  setUser: (account: ContractStoreState['user']) => void;
};

export const useContractStore = create<ContractStoreState & ContractStoreAction>((set) => ({
  client: null,
  account: null,
  coin: null,
  user: null,
  setClient: (client: ContractStoreState['client']) => set({ client }),
  setAccount: (account: ContractStoreState['account']) => set({ account }),
  setCoin: (coin: ContractStoreState['coin']) => set({ coin }),
  setUser: (user: ContractStoreState['user']) => set({ user }),
}));
