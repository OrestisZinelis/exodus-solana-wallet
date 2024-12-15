import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Header from '../components/Header'
import CoinBanner from '../components/CoinBanner'
import ImageCompactBanner from '../components/ImageCompactBanner'
import CenteredTitleWithImage from '../components/CenteredTitleWithImage'
import TripleDottedImageHeaderGroup from '../components/TripleDottedImageHeaderGroup'
import NetworksSupportedBanner from '../components/NetworksSupportedBanner'
import logoImg from '../images/logo.png'
import coinLogoImg from '../images/coin-logo.svg'
import desktopImg from '../images/desktop.png'
import exchangeImg from '../images/exchange.png'
import sendReceiveSolImg from '../images/send-receive-sol.png'
import builtInExchangeImg from '../images/built-in-exchange.png'
import safetyImg from '../images/safety.png'
import userImg from '../images/user.png'
import solBtcExhangeImg from '../images/sol-btc.svg'
import coinBannerBackgroundImg from '../images/coin-banner-background.jpg'

import btcImg from '../images/networks/BTC.svg'
import bnbImg from '../images/networks/BNB.svg'
import bchImg from '../images/networks/BCH.svg'
import dashImg from '../images/networks/Dash.svg'
import eosImg from '../images/networks/EOS.svg'
import etcImg from '../images/networks/ETC.svg'
import ethImg from '../images/networks/ETH.svg'
import ltcImg from '../images/networks/LTC.svg'
import omgImg from '../images/networks/OMG.svg'
import oxImg from '../images/networks/OX.svg'
import qtumImg from '../images/networks/QTUM.svg'
import tronImg from '../images/networks/TRON.svg'
import usdtImg from '../images/networks/USDT.svg'
import venImg from '../images/networks/VEN.svg'
import xlmImg from '../images/networks/XLM.svg'
import xrpImg from '../images/networks/XRP.svg'
import zecImg from '../images/networks/ZEC.svg'

const whyUseExodusItems = [
  {
    imgSrc: builtInExchangeImg,
    header: 'Private and Secure',
    text: 'Exodus encrypts private keys and transaction data. On your device and for your eyes only. Your data remains private – no account setup or verification required.'
  },
  {
    imgSrc: safetyImg,
    header: 'User-friendly',
    text: `We've prepared extensive detailed guides and video tutorials for you. Whether you're a new or advanced user, our 24/7 Support Team is here to help.`
  },
  {
    imgSrc: userImg,
    header: 'Built-in Exchange',
    text: 'Store, but also buy and sell one cryptocurrency for another, from the comfort of your wallet, in seconds. No signup or verification needed.'
  }
]

const networks = [
  {
    src: btcImg,
    name: 'Bitcoin',
    ticker: 'BTC'
  },
  {
    src: ethImg,
    name: 'Ethereum',
    ticker: 'ETH'
  },
  {
    src: oxImg,
    name: 'Open Exchange ',
    ticker: 'OX'
  },
  {
    src: ltcImg,
    name: 'Litecoin',
    ticker: 'LTC'
  },
  {
    src: eosImg,
    name: 'EOS.IO',
    ticker: 'ETH'
  },
  {
    src: venImg,
    name: 'VeChain',
    ticker: 'VEN'
  },
  {
    src: xlmImg,
    name: 'Stellar',
    ticker: 'XLM'
  },
  {
    src: dashImg,
    name: 'Dash',
    ticker: 'DASH'
  },
  {
    src: qtumImg,
    name: 'Qtum',
    ticker: 'QTUM'
  },
  {
    src: xrpImg,
    name: 'Ripple',
    ticker: 'XRP'
  },
  {
    src: omgImg,
    name: 'OMGToken',
    ticker: 'OMG'
  },
  {
    src: usdtImg,
    name: 'Tether stablecoin',
    ticker: 'USDT'
  },
  {
    src: etcImg,
    name: 'Ethereum Classic',
    ticker: 'ETC'
  },
  {
    src: bchImg,
    name: 'Bitcoin Cash',
    ticker: 'BCH'
  },
  {
    src: bnbImg,
    name: 'Binance Coin',
    ticker: 'BNC'
  },
  {
    src: zecImg,
    name: 'Zcash ',
    ticker: 'ZEC'
  },
  {
    src: tronImg,
    name: 'Tron',
    ticker: 'TRX'
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header logoSrc={logoImg} />
      <CoinBanner
        backgroundImage={coinBannerBackgroundImg}
        coinLogo={coinLogoImg}
        title="Exodus Solana Wallet"
        text1="Send, Receive, and Exchange SOL"
        text2="with Exodus' free and secure multi-asset wallet"
        logoSize="h-32" // Custom size for the logo using Tailwind CSS classes
        height="1200px" // Set the desired height for the banner
      />
      <ImageCompactBanner
        imgSrc={desktopImg}
        coinLogoSrc={coinLogoImg}
        title="SOL fully integrated to Exodus Wallet"
        text="Send and receive any of the supported digital assets with an address or scannable QR code."
      />
      <div className="mt-64">
        <ImageCompactBanner
          imgSrc={exchangeImg}
          coinLogoSrc={coinLogoImg}
          title="Exchange digital assets anytime and anywhere"
          text="You can easily exchange crypto currencies directly in your mobile and desktop app. In seconds, without going through registration process, you can exchange tens of digital assets."
          reverse
        />
      </div>
      <div className="mt-64">
        <CenteredTitleWithImage
          title="Exchange SOL with 80+ more assets with just one click"
          imgSrc={solBtcExhangeImg}
        />
      </div>
      <div className="mt-64">
        <ImageCompactBanner
          imgSrc={sendReceiveSolImg}
          coinLogoSrc={coinLogoImg}
          title="Send and receive SOL"
          text="Send and receive any of the supported digital assets easily with an address or scannable QR code."
        />
      </div>
      <div className="mt-64">
        <TripleDottedImageHeaderGroup title="Why to use Exodus wallet" items={whyUseExodusItems} />
      </div>
      <div className="mt-64">
        <NetworksSupportedBanner number="50+" networks={networks} buttonText="See the Full List" />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>SOL</title>
