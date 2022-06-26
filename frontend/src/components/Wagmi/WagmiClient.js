import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const ALCHEMY_ID = process.env.ALCHEMY_ID;

export const { chains, provider } = configureChains(
    // add more chains here.
  [chain.ropsten],
  [
    alchemyProvider({ alchemyId: ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Beerghain',
  chains
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})