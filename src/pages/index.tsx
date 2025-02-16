import React from 'react'
import { graphql } from 'gatsby'
import type { PageProps, HeadFC } from 'gatsby'
import Header from '../components/Header'
import CoinBanner from '../components/CoinBanner'
import FeatureBanner from '../components/FeatureBanner'
import BasicFeatureBanner from '../components/BasicFeatureBanner'
import FeatureCards from '../components/FeatureCards'
import NetworksSupportedBanner from '../components/NetworksSupportedBanner'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const header = data.contentfulHeader
  const coinBanner = data.contentfulCoinBanner
  const globalAssets = data.contentfulGlobalAssets
  const featureBanner = data.contentfulFeatureBanner
  const featureBanner2 = data.contentfulFeatureBanner2
  const featureBanner3 = data.contentfulFeatureBanner3
  const basicFeatureBanner = data.contentfulBasicFeatureBanner
  const featureCards = data.contentfulFeatureCards
  const networksSupportedBanner = data.contentfulNetworks

  const coinLogo = globalAssets?.coinLogo?.file?.url

  return (
    <main>
      <Header logoSrc={header?.logo?.file?.url} />
      <CoinBanner
        backgroundImage={coinBanner?.background?.file?.url}
        coinLogo={coinLogo}
        title={coinBanner?.title}
        text1={coinBanner?.text1}
        text2={coinBanner?.text2}
        logoSize="h-32"
        height={coinBanner?.height}
      />
      <FeatureBanner
        imgSrc={featureBanner?.image?.file?.url}
        coinLogoSrc={coinLogo}
        title={featureBanner?.title?.title}
        text={featureBanner?.description?.description}
      />
      <div className="mt-64">
        <FeatureBanner
          imgSrc={featureBanner2?.image?.file?.url}
          coinLogoSrc={coinLogo}
          title={featureBanner2?.title?.title}
          text={featureBanner2?.description?.description}
          reverse
        />
      </div>
      <div className="mt-64">
        <BasicFeatureBanner title={basicFeatureBanner?.title?.title} imgSrc={basicFeatureBanner?.image?.file?.url} />
      </div>
      <div className="mt-64">
        <FeatureBanner
          imgSrc={featureBanner3?.image?.file?.url}
          coinLogoSrc={coinLogo}
          title={featureBanner3?.title?.title}
          text={featureBanner3?.description?.description}
        />
      </div>

      <div className="mt-64">
        <FeatureCards
          title={featureCards?.title?.title}
          items={featureCards?.cards?.map(card => ({
            imgSrc: card?.image?.file?.url,
            header: card?.title?.title,
            text: card?.description?.description
          }))}
        />
      </div>
      <div className="mt-8">
        <NetworksSupportedBanner
          number={networksSupportedBanner?.title?.title}
          networks={networksSupportedBanner?.networks?.map(network => ({
            src: network?.image?.file?.url,
            name: network?.name,
            ticker: network?.ticket
          }))}
          plusAsset={networksSupportedBanner?.plus?.file?.url}
          buttonText={networksSupportedBanner?.buttonText}
        />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC<Queries.IndexPageQuery> = ({ data }) => {
  return <title>{data?.contentfulPageData?.title}</title>
}

export const query = graphql`
  query IndexPage {
    contentfulGlobalAssets {
      coinLogo {
        file {
          url
        }
      }
    }
    contentfulPageData {
      title
    }
    contentfulHeader {
      logo {
        file {
          url
        }
      }
    }
    contentfulCoinBanner {
      title
      text1
      text2
      height
      background {
        file {
          url
        }
      }
    }
    contentfulFeatureBanner {
      title {
        title
      }
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
    contentfulFeatureBanner2 {
      title {
        title
      }
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
    contentfulFeatureBanner3 {
      title {
        title
      }
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
    contentfulBasicFeatureBanner {
      title {
        title
      }
      image {
        file {
          url
        }
      }
    }
    contentfulFeatureCards {
      title {
        title
      }
      cards {
        ... on ContentfulFeatureCard {
          title {
            title
          }
          description {
            description
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
    contentfulNetworks {
      title {
        title
      }
      plus {
        file {
          url
        }
      }
      buttonText
      networks {
        ... on ContentfulCoin {
          name
          ticket
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`
