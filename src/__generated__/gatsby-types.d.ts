/* eslint-disable */


declare namespace GatsbyTypes {

type Maybe<T> = T | null;
type InputMaybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  GatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

type AVIFOptions = {
  readonly lossless: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
  readonly speed: InputMaybe<Scalars['Int']>;
};

type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: InputMaybe<Scalars['Int']>;
};

type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly description: Maybe<Scalars['String']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly filename: Scalars['String'];
  readonly filesize: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  readonly gatsbyImage: Maybe<Scalars['GatsbyImageData']>;
  readonly gatsbyImageData: Maybe<Scalars['GatsbyImageData']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly mimeType: Scalars['String'];
  readonly node_locale: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly placeholderUrl: Maybe<Scalars['String']>;
  readonly publicUrl: Scalars['String'];
  readonly resize: Maybe<RemoteFileResize>;
  readonly size: Maybe<Scalars['Int']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


type ContentfulAsset_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulAsset_gatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<ReadonlyArray<RemoteFileFormat>>;
  height: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  cropFocus: InputMaybe<ContentfulImageCropFocus>;
  formats?: InputMaybe<ReadonlyArray<InputMaybe<GatsbyImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<GatsbyImagePlaceholder>;
  quality: InputMaybe<Scalars['Int']>;
  resizingBehavior: InputMaybe<ImageResizingBehavior>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


type ContentfulAsset_resizeArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


type ContentfulAsset_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulAssetConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldSelector;
};


type ContentfulAssetConnection_groupArgs = {
  field: ContentfulAssetFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulAssetConnection_maxArgs = {
  field: ContentfulAssetFieldSelector;
};


type ContentfulAssetConnection_minArgs = {
  field: ContentfulAssetFieldSelector;
};


type ContentfulAssetConnection_sumArgs = {
  field: ContentfulAssetFieldSelector;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

type ContentfulAssetFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly file: InputMaybe<ContentfulAssetFileFieldSelector>;
  readonly filename: InputMaybe<FieldSelectorEnum>;
  readonly filesize: InputMaybe<FieldSelectorEnum>;
  readonly gatsbyImage: InputMaybe<FieldSelectorEnum>;
  readonly gatsbyImageData: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mimeType: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly placeholderUrl: InputMaybe<FieldSelectorEnum>;
  readonly publicUrl: InputMaybe<FieldSelectorEnum>;
  readonly resize: InputMaybe<RemoteFileResizeFieldSelector>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulAssetSysFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ContentfulAssetFile = {
  readonly contentType: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
  readonly size: Maybe<Scalars['Int']>;
};

type ContentfulAssetFileDetailsFieldSelector = {
  readonly image: InputMaybe<ContentfulAssetFileDetailsImageFieldSelector>;
  readonly size: InputMaybe<FieldSelectorEnum>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly image: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
};

type ContentfulAssetFileDetailsImage = {
  readonly height: Maybe<Scalars['Int']>;
  readonly width: Maybe<Scalars['Int']>;
};

type ContentfulAssetFileDetailsImageFieldSelector = {
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ContentfulAssetFileDetailsImageSortInput = {
  readonly height: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ContentfulAssetFileDetailsSortInput = {
  readonly image: InputMaybe<ContentfulAssetFileDetailsImageSortInput>;
  readonly size: InputMaybe<SortOrderEnum>;
};

type ContentfulAssetFileFieldSelector = {
  readonly contentType: InputMaybe<FieldSelectorEnum>;
  readonly details: InputMaybe<ContentfulAssetFileDetailsFieldSelector>;
  readonly fileName: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

type ContentfulAssetFileFilterInput = {
  readonly contentType: InputMaybe<StringQueryOperatorInput>;
  readonly details: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulAssetFileSortInput = {
  readonly contentType: InputMaybe<SortOrderEnum>;
  readonly details: InputMaybe<ContentfulAssetFileDetailsSortInput>;
  readonly fileName: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

type ContentfulAssetFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly file: InputMaybe<ContentfulAssetFileFilterInput>;
  readonly filename: InputMaybe<StringQueryOperatorInput>;
  readonly filesize: InputMaybe<IntQueryOperatorInput>;
  readonly gatsbyImage: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  readonly gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mimeType: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly placeholderUrl: InputMaybe<StringQueryOperatorInput>;
  readonly publicUrl: InputMaybe<StringQueryOperatorInput>;
  readonly resize: InputMaybe<RemoteFileResizeFilterInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulAssetSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ContentfulAssetGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulAssetGroupConnection_distinctArgs = {
  field: ContentfulAssetFieldSelector;
};


type ContentfulAssetGroupConnection_groupArgs = {
  field: ContentfulAssetFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulAssetGroupConnection_maxArgs = {
  field: ContentfulAssetFieldSelector;
};


type ContentfulAssetGroupConnection_minArgs = {
  field: ContentfulAssetFieldSelector;
};


type ContentfulAssetGroupConnection_sumArgs = {
  field: ContentfulAssetFieldSelector;
};

type ContentfulAssetSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly file: InputMaybe<ContentfulAssetFileSortInput>;
  readonly filename: InputMaybe<SortOrderEnum>;
  readonly filesize: InputMaybe<SortOrderEnum>;
  readonly gatsbyImage: InputMaybe<SortOrderEnum>;
  readonly gatsbyImageData: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mimeType: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly placeholderUrl: InputMaybe<SortOrderEnum>;
  readonly publicUrl: InputMaybe<SortOrderEnum>;
  readonly resize: InputMaybe<RemoteFileResizeSortInput>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulAssetSysSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ContentfulAssetSys = {
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulAssetSysFieldSelector = {
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulAssetSysFilterInput = {
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulAssetSysSortInput = {
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulBasicFeatureBanner = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulBasicFeatureBannerTitleTextNode or null if there are no children of given type on this node */
  readonly childContentfulBasicFeatureBannerTitleTextNode: Maybe<contentfulBasicFeatureBannerTitleTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulBasicFeatureBannerTitleTextNode */
  readonly childrenContentfulBasicFeatureBannerTitleTextNode: Maybe<ReadonlyArray<Maybe<contentfulBasicFeatureBannerTitleTextNode>>>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly image: Maybe<ContentfulAsset>;
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulBasicFeatureBannerSys>;
  readonly title: Maybe<contentfulBasicFeatureBannerTitleTextNode>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulBasicFeatureBanner_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulBasicFeatureBanner_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulBasicFeatureBannerConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulBasicFeatureBannerEdge>;
  readonly group: ReadonlyArray<ContentfulBasicFeatureBannerGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulBasicFeatureBanner>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulBasicFeatureBannerConnection_distinctArgs = {
  field: ContentfulBasicFeatureBannerFieldSelector;
};


type ContentfulBasicFeatureBannerConnection_groupArgs = {
  field: ContentfulBasicFeatureBannerFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulBasicFeatureBannerConnection_maxArgs = {
  field: ContentfulBasicFeatureBannerFieldSelector;
};


type ContentfulBasicFeatureBannerConnection_minArgs = {
  field: ContentfulBasicFeatureBannerFieldSelector;
};


type ContentfulBasicFeatureBannerConnection_sumArgs = {
  field: ContentfulBasicFeatureBannerFieldSelector;
};

type ContentfulBasicFeatureBannerEdge = {
  readonly next: Maybe<ContentfulBasicFeatureBanner>;
  readonly node: ContentfulBasicFeatureBanner;
  readonly previous: Maybe<ContentfulBasicFeatureBanner>;
};

type ContentfulBasicFeatureBannerFieldSelector = {
  readonly childContentfulBasicFeatureBannerTitleTextNode: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenContentfulBasicFeatureBannerTitleTextNode: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly image: InputMaybe<ContentfulAssetFieldSelector>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulBasicFeatureBannerSysFieldSelector>;
  readonly title: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type ContentfulBasicFeatureBannerFilterInput = {
  readonly childContentfulBasicFeatureBannerTitleTextNode: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulBasicFeatureBannerTitleTextNode: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly image: InputMaybe<ContentfulAssetFilterInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulBasicFeatureBannerSysFilterInput>;
  readonly title: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulBasicFeatureBannerGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulBasicFeatureBannerEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulBasicFeatureBannerGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulBasicFeatureBanner>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulBasicFeatureBannerGroupConnection_distinctArgs = {
  field: ContentfulBasicFeatureBannerFieldSelector;
};


type ContentfulBasicFeatureBannerGroupConnection_groupArgs = {
  field: ContentfulBasicFeatureBannerFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulBasicFeatureBannerGroupConnection_maxArgs = {
  field: ContentfulBasicFeatureBannerFieldSelector;
};


type ContentfulBasicFeatureBannerGroupConnection_minArgs = {
  field: ContentfulBasicFeatureBannerFieldSelector;
};


type ContentfulBasicFeatureBannerGroupConnection_sumArgs = {
  field: ContentfulBasicFeatureBannerFieldSelector;
};

type ContentfulBasicFeatureBannerSortInput = {
  readonly childContentfulBasicFeatureBannerTitleTextNode: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenContentfulBasicFeatureBannerTitleTextNode: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly image: InputMaybe<ContentfulAssetSortInput>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulBasicFeatureBannerSysSortInput>;
  readonly title: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type ContentfulBasicFeatureBannerSys = {
  readonly contentType: Maybe<ContentfulBasicFeatureBannerSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulBasicFeatureBannerSysContentType = {
  readonly sys: Maybe<ContentfulBasicFeatureBannerSysContentTypeSys>;
};

type ContentfulBasicFeatureBannerSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulBasicFeatureBannerSysContentTypeSysFieldSelector>;
};

type ContentfulBasicFeatureBannerSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulBasicFeatureBannerSysContentTypeSysFilterInput>;
};

type ContentfulBasicFeatureBannerSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulBasicFeatureBannerSysContentTypeSysSortInput>;
};

type ContentfulBasicFeatureBannerSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulBasicFeatureBannerSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulBasicFeatureBannerSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulBasicFeatureBannerSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulBasicFeatureBannerSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulBasicFeatureBannerSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulBasicFeatureBannerSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulBasicFeatureBannerSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulBasicFeatureBannerSysSortInput = {
  readonly contentType: InputMaybe<ContentfulBasicFeatureBannerSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulCoin = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly image: Maybe<ContentfulAsset>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly networks: Maybe<ReadonlyArray<Maybe<ContentfulNetworks>>>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulCoinSys>;
  readonly ticket: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulCoin_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulCoin_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulCoinBanner = ContentfulEntry & ContentfulReference & Node & {
  readonly background: Maybe<ContentfulAsset>;
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly height: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulCoinBannerSys>;
  readonly text1: Maybe<Scalars['String']>;
  readonly text2: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulCoinBanner_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulCoinBanner_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulCoinBannerConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulCoinBannerEdge>;
  readonly group: ReadonlyArray<ContentfulCoinBannerGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulCoinBanner>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulCoinBannerConnection_distinctArgs = {
  field: ContentfulCoinBannerFieldSelector;
};


type ContentfulCoinBannerConnection_groupArgs = {
  field: ContentfulCoinBannerFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulCoinBannerConnection_maxArgs = {
  field: ContentfulCoinBannerFieldSelector;
};


type ContentfulCoinBannerConnection_minArgs = {
  field: ContentfulCoinBannerFieldSelector;
};


type ContentfulCoinBannerConnection_sumArgs = {
  field: ContentfulCoinBannerFieldSelector;
};

type ContentfulCoinBannerEdge = {
  readonly next: Maybe<ContentfulCoinBanner>;
  readonly node: ContentfulCoinBanner;
  readonly previous: Maybe<ContentfulCoinBanner>;
};

type ContentfulCoinBannerFieldSelector = {
  readonly background: InputMaybe<ContentfulAssetFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulCoinBannerSysFieldSelector>;
  readonly text1: InputMaybe<FieldSelectorEnum>;
  readonly text2: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type ContentfulCoinBannerFilterInput = {
  readonly background: InputMaybe<ContentfulAssetFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly height: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulCoinBannerSysFilterInput>;
  readonly text1: InputMaybe<StringQueryOperatorInput>;
  readonly text2: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulCoinBannerGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulCoinBannerEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulCoinBannerGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulCoinBanner>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulCoinBannerGroupConnection_distinctArgs = {
  field: ContentfulCoinBannerFieldSelector;
};


type ContentfulCoinBannerGroupConnection_groupArgs = {
  field: ContentfulCoinBannerFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulCoinBannerGroupConnection_maxArgs = {
  field: ContentfulCoinBannerFieldSelector;
};


type ContentfulCoinBannerGroupConnection_minArgs = {
  field: ContentfulCoinBannerFieldSelector;
};


type ContentfulCoinBannerGroupConnection_sumArgs = {
  field: ContentfulCoinBannerFieldSelector;
};

type ContentfulCoinBannerSortInput = {
  readonly background: InputMaybe<ContentfulAssetSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulCoinBannerSysSortInput>;
  readonly text1: InputMaybe<SortOrderEnum>;
  readonly text2: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type ContentfulCoinBannerSys = {
  readonly contentType: Maybe<ContentfulCoinBannerSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulCoinBannerSysContentType = {
  readonly sys: Maybe<ContentfulCoinBannerSysContentTypeSys>;
};

type ContentfulCoinBannerSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulCoinBannerSysContentTypeSysFieldSelector>;
};

type ContentfulCoinBannerSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulCoinBannerSysContentTypeSysFilterInput>;
};

type ContentfulCoinBannerSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulCoinBannerSysContentTypeSysSortInput>;
};

type ContentfulCoinBannerSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulCoinBannerSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulCoinBannerSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulCoinBannerSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulCoinBannerSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulCoinBannerSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulCoinBannerSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulCoinBannerSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulCoinBannerSysSortInput = {
  readonly contentType: InputMaybe<ContentfulCoinBannerSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulCoinConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulCoinEdge>;
  readonly group: ReadonlyArray<ContentfulCoinGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulCoin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulCoinConnection_distinctArgs = {
  field: ContentfulCoinFieldSelector;
};


type ContentfulCoinConnection_groupArgs = {
  field: ContentfulCoinFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulCoinConnection_maxArgs = {
  field: ContentfulCoinFieldSelector;
};


type ContentfulCoinConnection_minArgs = {
  field: ContentfulCoinFieldSelector;
};


type ContentfulCoinConnection_sumArgs = {
  field: ContentfulCoinFieldSelector;
};

type ContentfulCoinEdge = {
  readonly next: Maybe<ContentfulCoin>;
  readonly node: ContentfulCoin;
  readonly previous: Maybe<ContentfulCoin>;
};

type ContentfulCoinFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly image: InputMaybe<ContentfulAssetFieldSelector>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly networks: InputMaybe<ContentfulNetworksFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulCoinSysFieldSelector>;
  readonly ticket: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type ContentfulCoinFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly image: InputMaybe<ContentfulAssetFilterInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly networks: InputMaybe<ContentfulNetworksFilterListInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulCoinSysFilterInput>;
  readonly ticket: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulCoinFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulCoinFilterInput>;
};

type ContentfulCoinGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulCoinEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulCoinGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulCoin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulCoinGroupConnection_distinctArgs = {
  field: ContentfulCoinFieldSelector;
};


type ContentfulCoinGroupConnection_groupArgs = {
  field: ContentfulCoinFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulCoinGroupConnection_maxArgs = {
  field: ContentfulCoinFieldSelector;
};


type ContentfulCoinGroupConnection_minArgs = {
  field: ContentfulCoinFieldSelector;
};


type ContentfulCoinGroupConnection_sumArgs = {
  field: ContentfulCoinFieldSelector;
};

type ContentfulCoinSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly image: InputMaybe<ContentfulAssetSortInput>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly networks: InputMaybe<ContentfulNetworksSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulCoinSysSortInput>;
  readonly ticket: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type ContentfulCoinSys = {
  readonly contentType: Maybe<ContentfulCoinSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulCoinSysContentType = {
  readonly sys: Maybe<ContentfulCoinSysContentTypeSys>;
};

type ContentfulCoinSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulCoinSysContentTypeSysFieldSelector>;
};

type ContentfulCoinSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulCoinSysContentTypeSysFilterInput>;
};

type ContentfulCoinSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulCoinSysContentTypeSysSortInput>;
};

type ContentfulCoinSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulCoinSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulCoinSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulCoinSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulCoinSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulCoinSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulCoinSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulCoinSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulCoinSysSortInput = {
  readonly contentType: InputMaybe<ContentfulCoinSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulContentType = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly description: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldSelector;
};


type ContentfulContentTypeConnection_groupArgs = {
  field: ContentfulContentTypeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulContentTypeConnection_maxArgs = {
  field: ContentfulContentTypeFieldSelector;
};


type ContentfulContentTypeConnection_minArgs = {
  field: ContentfulContentTypeFieldSelector;
};


type ContentfulContentTypeConnection_sumArgs = {
  field: ContentfulContentTypeFieldSelector;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

type ContentfulContentTypeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly displayField: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<ContentfulContentTypeSysFieldSelector>;
};

type ContentfulContentTypeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly displayField: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulContentTypeGroupConnection_distinctArgs = {
  field: ContentfulContentTypeFieldSelector;
};


type ContentfulContentTypeGroupConnection_groupArgs = {
  field: ContentfulContentTypeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulContentTypeGroupConnection_maxArgs = {
  field: ContentfulContentTypeFieldSelector;
};


type ContentfulContentTypeGroupConnection_minArgs = {
  field: ContentfulContentTypeFieldSelector;
};


type ContentfulContentTypeGroupConnection_sumArgs = {
  field: ContentfulContentTypeFieldSelector;
};

type ContentfulContentTypeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly displayField: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<ContentfulContentTypeSysSortInput>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentTypeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulContentTypeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulEntry = {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
};

type ContentfulEntryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldSelector;
};


type ContentfulEntryConnection_groupArgs = {
  field: ContentfulEntryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulEntryConnection_maxArgs = {
  field: ContentfulEntryFieldSelector;
};


type ContentfulEntryConnection_minArgs = {
  field: ContentfulEntryFieldSelector;
};


type ContentfulEntryConnection_sumArgs = {
  field: ContentfulEntryFieldSelector;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

type ContentfulEntryFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type ContentfulEntryFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type ContentfulEntryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulEntryGroupConnection_distinctArgs = {
  field: ContentfulEntryFieldSelector;
};


type ContentfulEntryGroupConnection_groupArgs = {
  field: ContentfulEntryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulEntryGroupConnection_maxArgs = {
  field: ContentfulEntryFieldSelector;
};


type ContentfulEntryGroupConnection_minArgs = {
  field: ContentfulEntryFieldSelector;
};


type ContentfulEntryGroupConnection_sumArgs = {
  field: ContentfulEntryFieldSelector;
};

type ContentfulEntrySortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type ContentfulFeatureBanner = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulFeatureBannerDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulFeatureBannerDescriptionTextNode: Maybe<contentfulFeatureBannerDescriptionTextNode>;
  /** Returns the first child node of type contentfulFeatureBannerTitleTextNode or null if there are no children of given type on this node */
  readonly childContentfulFeatureBannerTitleTextNode: Maybe<contentfulFeatureBannerTitleTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulFeatureBannerDescriptionTextNode */
  readonly childrenContentfulFeatureBannerDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulFeatureBannerDescriptionTextNode>>>;
  /** Returns all children nodes filtered by type contentfulFeatureBannerTitleTextNode */
  readonly childrenContentfulFeatureBannerTitleTextNode: Maybe<ReadonlyArray<Maybe<contentfulFeatureBannerTitleTextNode>>>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly description: Maybe<contentfulFeatureBannerDescriptionTextNode>;
  readonly id: Scalars['ID'];
  readonly image: Maybe<ContentfulAsset>;
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulFeatureBannerSys>;
  readonly title: Maybe<contentfulFeatureBannerTitleTextNode>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulFeatureBanner_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulFeatureBanner_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulFeatureBanner2 = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulFeatureBanner2DescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulFeatureBanner2DescriptionTextNode: Maybe<contentfulFeatureBanner2DescriptionTextNode>;
  /** Returns the first child node of type contentfulFeatureBanner2TitleTextNode or null if there are no children of given type on this node */
  readonly childContentfulFeatureBanner2TitleTextNode: Maybe<contentfulFeatureBanner2TitleTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulFeatureBanner2DescriptionTextNode */
  readonly childrenContentfulFeatureBanner2DescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulFeatureBanner2DescriptionTextNode>>>;
  /** Returns all children nodes filtered by type contentfulFeatureBanner2TitleTextNode */
  readonly childrenContentfulFeatureBanner2TitleTextNode: Maybe<ReadonlyArray<Maybe<contentfulFeatureBanner2TitleTextNode>>>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly description: Maybe<contentfulFeatureBanner2DescriptionTextNode>;
  readonly id: Scalars['ID'];
  readonly image: Maybe<ContentfulAsset>;
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulFeatureBanner2Sys>;
  readonly title: Maybe<contentfulFeatureBanner2TitleTextNode>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulFeatureBanner2_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulFeatureBanner2_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulFeatureBanner2Connection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulFeatureBanner2Edge>;
  readonly group: ReadonlyArray<ContentfulFeatureBanner2GroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulFeatureBanner2>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulFeatureBanner2Connection_distinctArgs = {
  field: ContentfulFeatureBanner2FieldSelector;
};


type ContentfulFeatureBanner2Connection_groupArgs = {
  field: ContentfulFeatureBanner2FieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulFeatureBanner2Connection_maxArgs = {
  field: ContentfulFeatureBanner2FieldSelector;
};


type ContentfulFeatureBanner2Connection_minArgs = {
  field: ContentfulFeatureBanner2FieldSelector;
};


type ContentfulFeatureBanner2Connection_sumArgs = {
  field: ContentfulFeatureBanner2FieldSelector;
};

type ContentfulFeatureBanner2Edge = {
  readonly next: Maybe<ContentfulFeatureBanner2>;
  readonly node: ContentfulFeatureBanner2;
  readonly previous: Maybe<ContentfulFeatureBanner2>;
};

type ContentfulFeatureBanner2FieldSelector = {
  readonly childContentfulFeatureBanner2DescriptionTextNode: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeFieldSelector>;
  readonly childContentfulFeatureBanner2TitleTextNode: InputMaybe<contentfulFeatureBanner2TitleTextNodeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenContentfulFeatureBanner2DescriptionTextNode: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeFieldSelector>;
  readonly childrenContentfulFeatureBanner2TitleTextNode: InputMaybe<contentfulFeatureBanner2TitleTextNodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly image: InputMaybe<ContentfulAssetFieldSelector>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulFeatureBanner2SysFieldSelector>;
  readonly title: InputMaybe<contentfulFeatureBanner2TitleTextNodeFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureBanner2FilterInput = {
  readonly childContentfulFeatureBanner2DescriptionTextNode: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeFilterInput>;
  readonly childContentfulFeatureBanner2TitleTextNode: InputMaybe<contentfulFeatureBanner2TitleTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulFeatureBanner2DescriptionTextNode: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeFilterListInput>;
  readonly childrenContentfulFeatureBanner2TitleTextNode: InputMaybe<contentfulFeatureBanner2TitleTextNodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly description: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly image: InputMaybe<ContentfulAssetFilterInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulFeatureBanner2SysFilterInput>;
  readonly title: InputMaybe<contentfulFeatureBanner2TitleTextNodeFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulFeatureBanner2GroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulFeatureBanner2Edge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulFeatureBanner2GroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulFeatureBanner2>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulFeatureBanner2GroupConnection_distinctArgs = {
  field: ContentfulFeatureBanner2FieldSelector;
};


type ContentfulFeatureBanner2GroupConnection_groupArgs = {
  field: ContentfulFeatureBanner2FieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulFeatureBanner2GroupConnection_maxArgs = {
  field: ContentfulFeatureBanner2FieldSelector;
};


type ContentfulFeatureBanner2GroupConnection_minArgs = {
  field: ContentfulFeatureBanner2FieldSelector;
};


type ContentfulFeatureBanner2GroupConnection_sumArgs = {
  field: ContentfulFeatureBanner2FieldSelector;
};

type ContentfulFeatureBanner2SortInput = {
  readonly childContentfulFeatureBanner2DescriptionTextNode: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeSortInput>;
  readonly childContentfulFeatureBanner2TitleTextNode: InputMaybe<contentfulFeatureBanner2TitleTextNodeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenContentfulFeatureBanner2DescriptionTextNode: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeSortInput>;
  readonly childrenContentfulFeatureBanner2TitleTextNode: InputMaybe<contentfulFeatureBanner2TitleTextNodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly image: InputMaybe<ContentfulAssetSortInput>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulFeatureBanner2SysSortInput>;
  readonly title: InputMaybe<contentfulFeatureBanner2TitleTextNodeSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureBanner2Sys = {
  readonly contentType: Maybe<ContentfulFeatureBanner2SysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulFeatureBanner2SysContentType = {
  readonly sys: Maybe<ContentfulFeatureBanner2SysContentTypeSys>;
};

type ContentfulFeatureBanner2SysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulFeatureBanner2SysContentTypeSysFieldSelector>;
};

type ContentfulFeatureBanner2SysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulFeatureBanner2SysContentTypeSysFilterInput>;
};

type ContentfulFeatureBanner2SysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulFeatureBanner2SysContentTypeSysSortInput>;
};

type ContentfulFeatureBanner2SysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulFeatureBanner2SysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureBanner2SysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulFeatureBanner2SysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureBanner2SysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulFeatureBanner2SysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureBanner2SysFilterInput = {
  readonly contentType: InputMaybe<ContentfulFeatureBanner2SysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulFeatureBanner2SysSortInput = {
  readonly contentType: InputMaybe<ContentfulFeatureBanner2SysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureBanner3 = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulFeatureBanner3DescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulFeatureBanner3DescriptionTextNode: Maybe<contentfulFeatureBanner3DescriptionTextNode>;
  /** Returns the first child node of type contentfulFeatureBanner3TitleTextNode or null if there are no children of given type on this node */
  readonly childContentfulFeatureBanner3TitleTextNode: Maybe<contentfulFeatureBanner3TitleTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulFeatureBanner3DescriptionTextNode */
  readonly childrenContentfulFeatureBanner3DescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulFeatureBanner3DescriptionTextNode>>>;
  /** Returns all children nodes filtered by type contentfulFeatureBanner3TitleTextNode */
  readonly childrenContentfulFeatureBanner3TitleTextNode: Maybe<ReadonlyArray<Maybe<contentfulFeatureBanner3TitleTextNode>>>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly description: Maybe<contentfulFeatureBanner3DescriptionTextNode>;
  readonly id: Scalars['ID'];
  readonly image: Maybe<ContentfulAsset>;
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulFeatureBanner3Sys>;
  readonly title: Maybe<contentfulFeatureBanner3TitleTextNode>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulFeatureBanner3_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulFeatureBanner3_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulFeatureBanner3Connection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulFeatureBanner3Edge>;
  readonly group: ReadonlyArray<ContentfulFeatureBanner3GroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulFeatureBanner3>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulFeatureBanner3Connection_distinctArgs = {
  field: ContentfulFeatureBanner3FieldSelector;
};


type ContentfulFeatureBanner3Connection_groupArgs = {
  field: ContentfulFeatureBanner3FieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulFeatureBanner3Connection_maxArgs = {
  field: ContentfulFeatureBanner3FieldSelector;
};


type ContentfulFeatureBanner3Connection_minArgs = {
  field: ContentfulFeatureBanner3FieldSelector;
};


type ContentfulFeatureBanner3Connection_sumArgs = {
  field: ContentfulFeatureBanner3FieldSelector;
};

type ContentfulFeatureBanner3Edge = {
  readonly next: Maybe<ContentfulFeatureBanner3>;
  readonly node: ContentfulFeatureBanner3;
  readonly previous: Maybe<ContentfulFeatureBanner3>;
};

type ContentfulFeatureBanner3FieldSelector = {
  readonly childContentfulFeatureBanner3DescriptionTextNode: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeFieldSelector>;
  readonly childContentfulFeatureBanner3TitleTextNode: InputMaybe<contentfulFeatureBanner3TitleTextNodeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenContentfulFeatureBanner3DescriptionTextNode: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeFieldSelector>;
  readonly childrenContentfulFeatureBanner3TitleTextNode: InputMaybe<contentfulFeatureBanner3TitleTextNodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly image: InputMaybe<ContentfulAssetFieldSelector>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulFeatureBanner3SysFieldSelector>;
  readonly title: InputMaybe<contentfulFeatureBanner3TitleTextNodeFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureBanner3FilterInput = {
  readonly childContentfulFeatureBanner3DescriptionTextNode: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeFilterInput>;
  readonly childContentfulFeatureBanner3TitleTextNode: InputMaybe<contentfulFeatureBanner3TitleTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulFeatureBanner3DescriptionTextNode: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeFilterListInput>;
  readonly childrenContentfulFeatureBanner3TitleTextNode: InputMaybe<contentfulFeatureBanner3TitleTextNodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly description: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly image: InputMaybe<ContentfulAssetFilterInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulFeatureBanner3SysFilterInput>;
  readonly title: InputMaybe<contentfulFeatureBanner3TitleTextNodeFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulFeatureBanner3GroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulFeatureBanner3Edge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulFeatureBanner3GroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulFeatureBanner3>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulFeatureBanner3GroupConnection_distinctArgs = {
  field: ContentfulFeatureBanner3FieldSelector;
};


type ContentfulFeatureBanner3GroupConnection_groupArgs = {
  field: ContentfulFeatureBanner3FieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulFeatureBanner3GroupConnection_maxArgs = {
  field: ContentfulFeatureBanner3FieldSelector;
};


type ContentfulFeatureBanner3GroupConnection_minArgs = {
  field: ContentfulFeatureBanner3FieldSelector;
};


type ContentfulFeatureBanner3GroupConnection_sumArgs = {
  field: ContentfulFeatureBanner3FieldSelector;
};

type ContentfulFeatureBanner3SortInput = {
  readonly childContentfulFeatureBanner3DescriptionTextNode: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeSortInput>;
  readonly childContentfulFeatureBanner3TitleTextNode: InputMaybe<contentfulFeatureBanner3TitleTextNodeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenContentfulFeatureBanner3DescriptionTextNode: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeSortInput>;
  readonly childrenContentfulFeatureBanner3TitleTextNode: InputMaybe<contentfulFeatureBanner3TitleTextNodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly image: InputMaybe<ContentfulAssetSortInput>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulFeatureBanner3SysSortInput>;
  readonly title: InputMaybe<contentfulFeatureBanner3TitleTextNodeSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureBanner3Sys = {
  readonly contentType: Maybe<ContentfulFeatureBanner3SysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulFeatureBanner3SysContentType = {
  readonly sys: Maybe<ContentfulFeatureBanner3SysContentTypeSys>;
};

type ContentfulFeatureBanner3SysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulFeatureBanner3SysContentTypeSysFieldSelector>;
};

type ContentfulFeatureBanner3SysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulFeatureBanner3SysContentTypeSysFilterInput>;
};

type ContentfulFeatureBanner3SysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulFeatureBanner3SysContentTypeSysSortInput>;
};

type ContentfulFeatureBanner3SysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulFeatureBanner3SysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureBanner3SysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulFeatureBanner3SysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureBanner3SysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulFeatureBanner3SysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureBanner3SysFilterInput = {
  readonly contentType: InputMaybe<ContentfulFeatureBanner3SysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulFeatureBanner3SysSortInput = {
  readonly contentType: InputMaybe<ContentfulFeatureBanner3SysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureBannerConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulFeatureBannerEdge>;
  readonly group: ReadonlyArray<ContentfulFeatureBannerGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulFeatureBanner>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulFeatureBannerConnection_distinctArgs = {
  field: ContentfulFeatureBannerFieldSelector;
};


type ContentfulFeatureBannerConnection_groupArgs = {
  field: ContentfulFeatureBannerFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulFeatureBannerConnection_maxArgs = {
  field: ContentfulFeatureBannerFieldSelector;
};


type ContentfulFeatureBannerConnection_minArgs = {
  field: ContentfulFeatureBannerFieldSelector;
};


type ContentfulFeatureBannerConnection_sumArgs = {
  field: ContentfulFeatureBannerFieldSelector;
};

type ContentfulFeatureBannerEdge = {
  readonly next: Maybe<ContentfulFeatureBanner>;
  readonly node: ContentfulFeatureBanner;
  readonly previous: Maybe<ContentfulFeatureBanner>;
};

type ContentfulFeatureBannerFieldSelector = {
  readonly childContentfulFeatureBannerDescriptionTextNode: InputMaybe<contentfulFeatureBannerDescriptionTextNodeFieldSelector>;
  readonly childContentfulFeatureBannerTitleTextNode: InputMaybe<contentfulFeatureBannerTitleTextNodeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenContentfulFeatureBannerDescriptionTextNode: InputMaybe<contentfulFeatureBannerDescriptionTextNodeFieldSelector>;
  readonly childrenContentfulFeatureBannerTitleTextNode: InputMaybe<contentfulFeatureBannerTitleTextNodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<contentfulFeatureBannerDescriptionTextNodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly image: InputMaybe<ContentfulAssetFieldSelector>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulFeatureBannerSysFieldSelector>;
  readonly title: InputMaybe<contentfulFeatureBannerTitleTextNodeFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureBannerFilterInput = {
  readonly childContentfulFeatureBannerDescriptionTextNode: InputMaybe<contentfulFeatureBannerDescriptionTextNodeFilterInput>;
  readonly childContentfulFeatureBannerTitleTextNode: InputMaybe<contentfulFeatureBannerTitleTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulFeatureBannerDescriptionTextNode: InputMaybe<contentfulFeatureBannerDescriptionTextNodeFilterListInput>;
  readonly childrenContentfulFeatureBannerTitleTextNode: InputMaybe<contentfulFeatureBannerTitleTextNodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly description: InputMaybe<contentfulFeatureBannerDescriptionTextNodeFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly image: InputMaybe<ContentfulAssetFilterInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulFeatureBannerSysFilterInput>;
  readonly title: InputMaybe<contentfulFeatureBannerTitleTextNodeFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulFeatureBannerGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulFeatureBannerEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulFeatureBannerGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulFeatureBanner>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulFeatureBannerGroupConnection_distinctArgs = {
  field: ContentfulFeatureBannerFieldSelector;
};


type ContentfulFeatureBannerGroupConnection_groupArgs = {
  field: ContentfulFeatureBannerFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulFeatureBannerGroupConnection_maxArgs = {
  field: ContentfulFeatureBannerFieldSelector;
};


type ContentfulFeatureBannerGroupConnection_minArgs = {
  field: ContentfulFeatureBannerFieldSelector;
};


type ContentfulFeatureBannerGroupConnection_sumArgs = {
  field: ContentfulFeatureBannerFieldSelector;
};

type ContentfulFeatureBannerSortInput = {
  readonly childContentfulFeatureBannerDescriptionTextNode: InputMaybe<contentfulFeatureBannerDescriptionTextNodeSortInput>;
  readonly childContentfulFeatureBannerTitleTextNode: InputMaybe<contentfulFeatureBannerTitleTextNodeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenContentfulFeatureBannerDescriptionTextNode: InputMaybe<contentfulFeatureBannerDescriptionTextNodeSortInput>;
  readonly childrenContentfulFeatureBannerTitleTextNode: InputMaybe<contentfulFeatureBannerTitleTextNodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<contentfulFeatureBannerDescriptionTextNodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly image: InputMaybe<ContentfulAssetSortInput>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulFeatureBannerSysSortInput>;
  readonly title: InputMaybe<contentfulFeatureBannerTitleTextNodeSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureBannerSys = {
  readonly contentType: Maybe<ContentfulFeatureBannerSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulFeatureBannerSysContentType = {
  readonly sys: Maybe<ContentfulFeatureBannerSysContentTypeSys>;
};

type ContentfulFeatureBannerSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulFeatureBannerSysContentTypeSysFieldSelector>;
};

type ContentfulFeatureBannerSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulFeatureBannerSysContentTypeSysFilterInput>;
};

type ContentfulFeatureBannerSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulFeatureBannerSysContentTypeSysSortInput>;
};

type ContentfulFeatureBannerSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulFeatureBannerSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureBannerSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulFeatureBannerSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureBannerSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulFeatureBannerSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureBannerSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulFeatureBannerSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulFeatureBannerSysSortInput = {
  readonly contentType: InputMaybe<ContentfulFeatureBannerSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureCard = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulFeatureCardDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulFeatureCardDescriptionTextNode: Maybe<contentfulFeatureCardDescriptionTextNode>;
  /** Returns the first child node of type contentfulFeatureCardTitleTextNode or null if there are no children of given type on this node */
  readonly childContentfulFeatureCardTitleTextNode: Maybe<contentfulFeatureCardTitleTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulFeatureCardDescriptionTextNode */
  readonly childrenContentfulFeatureCardDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulFeatureCardDescriptionTextNode>>>;
  /** Returns all children nodes filtered by type contentfulFeatureCardTitleTextNode */
  readonly childrenContentfulFeatureCardTitleTextNode: Maybe<ReadonlyArray<Maybe<contentfulFeatureCardTitleTextNode>>>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly description: Maybe<contentfulFeatureCardDescriptionTextNode>;
  readonly featurecards: Maybe<ReadonlyArray<Maybe<ContentfulFeatureCards>>>;
  readonly id: Scalars['ID'];
  readonly image: Maybe<ContentfulAsset>;
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulFeatureCardSys>;
  readonly title: Maybe<contentfulFeatureCardTitleTextNode>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulFeatureCard_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulFeatureCard_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulFeatureCardConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulFeatureCardEdge>;
  readonly group: ReadonlyArray<ContentfulFeatureCardGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulFeatureCard>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulFeatureCardConnection_distinctArgs = {
  field: ContentfulFeatureCardFieldSelector;
};


type ContentfulFeatureCardConnection_groupArgs = {
  field: ContentfulFeatureCardFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulFeatureCardConnection_maxArgs = {
  field: ContentfulFeatureCardFieldSelector;
};


type ContentfulFeatureCardConnection_minArgs = {
  field: ContentfulFeatureCardFieldSelector;
};


type ContentfulFeatureCardConnection_sumArgs = {
  field: ContentfulFeatureCardFieldSelector;
};

type ContentfulFeatureCardEdge = {
  readonly next: Maybe<ContentfulFeatureCard>;
  readonly node: ContentfulFeatureCard;
  readonly previous: Maybe<ContentfulFeatureCard>;
};

type ContentfulFeatureCardFieldSelector = {
  readonly childContentfulFeatureCardDescriptionTextNode: InputMaybe<contentfulFeatureCardDescriptionTextNodeFieldSelector>;
  readonly childContentfulFeatureCardTitleTextNode: InputMaybe<contentfulFeatureCardTitleTextNodeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenContentfulFeatureCardDescriptionTextNode: InputMaybe<contentfulFeatureCardDescriptionTextNodeFieldSelector>;
  readonly childrenContentfulFeatureCardTitleTextNode: InputMaybe<contentfulFeatureCardTitleTextNodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<contentfulFeatureCardDescriptionTextNodeFieldSelector>;
  readonly featurecards: InputMaybe<ContentfulFeatureCardsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly image: InputMaybe<ContentfulAssetFieldSelector>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulFeatureCardSysFieldSelector>;
  readonly title: InputMaybe<contentfulFeatureCardTitleTextNodeFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureCardFilterInput = {
  readonly childContentfulFeatureCardDescriptionTextNode: InputMaybe<contentfulFeatureCardDescriptionTextNodeFilterInput>;
  readonly childContentfulFeatureCardTitleTextNode: InputMaybe<contentfulFeatureCardTitleTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulFeatureCardDescriptionTextNode: InputMaybe<contentfulFeatureCardDescriptionTextNodeFilterListInput>;
  readonly childrenContentfulFeatureCardTitleTextNode: InputMaybe<contentfulFeatureCardTitleTextNodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly description: InputMaybe<contentfulFeatureCardDescriptionTextNodeFilterInput>;
  readonly featurecards: InputMaybe<ContentfulFeatureCardsFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly image: InputMaybe<ContentfulAssetFilterInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulFeatureCardSysFilterInput>;
  readonly title: InputMaybe<contentfulFeatureCardTitleTextNodeFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulFeatureCardFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulFeatureCardFilterInput>;
};

type ContentfulFeatureCardGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulFeatureCardEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulFeatureCardGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulFeatureCard>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulFeatureCardGroupConnection_distinctArgs = {
  field: ContentfulFeatureCardFieldSelector;
};


type ContentfulFeatureCardGroupConnection_groupArgs = {
  field: ContentfulFeatureCardFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulFeatureCardGroupConnection_maxArgs = {
  field: ContentfulFeatureCardFieldSelector;
};


type ContentfulFeatureCardGroupConnection_minArgs = {
  field: ContentfulFeatureCardFieldSelector;
};


type ContentfulFeatureCardGroupConnection_sumArgs = {
  field: ContentfulFeatureCardFieldSelector;
};

type ContentfulFeatureCardSortInput = {
  readonly childContentfulFeatureCardDescriptionTextNode: InputMaybe<contentfulFeatureCardDescriptionTextNodeSortInput>;
  readonly childContentfulFeatureCardTitleTextNode: InputMaybe<contentfulFeatureCardTitleTextNodeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenContentfulFeatureCardDescriptionTextNode: InputMaybe<contentfulFeatureCardDescriptionTextNodeSortInput>;
  readonly childrenContentfulFeatureCardTitleTextNode: InputMaybe<contentfulFeatureCardTitleTextNodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<contentfulFeatureCardDescriptionTextNodeSortInput>;
  readonly featurecards: InputMaybe<ContentfulFeatureCardsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly image: InputMaybe<ContentfulAssetSortInput>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulFeatureCardSysSortInput>;
  readonly title: InputMaybe<contentfulFeatureCardTitleTextNodeSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureCardSys = {
  readonly contentType: Maybe<ContentfulFeatureCardSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulFeatureCardSysContentType = {
  readonly sys: Maybe<ContentfulFeatureCardSysContentTypeSys>;
};

type ContentfulFeatureCardSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulFeatureCardSysContentTypeSysFieldSelector>;
};

type ContentfulFeatureCardSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulFeatureCardSysContentTypeSysFilterInput>;
};

type ContentfulFeatureCardSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulFeatureCardSysContentTypeSysSortInput>;
};

type ContentfulFeatureCardSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulFeatureCardSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureCardSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulFeatureCardSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureCardSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulFeatureCardSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureCardSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulFeatureCardSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulFeatureCardSysSortInput = {
  readonly contentType: InputMaybe<ContentfulFeatureCardSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureCards = ContentfulEntry & ContentfulReference & Node & {
  readonly cards: Maybe<ReadonlyArray<Maybe<ContentfulFeatureCard>>>;
  /** Returns the first child node of type contentfulFeatureCardsTitleTextNode or null if there are no children of given type on this node */
  readonly childContentfulFeatureCardsTitleTextNode: Maybe<contentfulFeatureCardsTitleTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulFeatureCardsTitleTextNode */
  readonly childrenContentfulFeatureCardsTitleTextNode: Maybe<ReadonlyArray<Maybe<contentfulFeatureCardsTitleTextNode>>>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulFeatureCardsSys>;
  readonly title: Maybe<contentfulFeatureCardsTitleTextNode>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulFeatureCards_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulFeatureCards_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulFeatureCardsConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulFeatureCardsEdge>;
  readonly group: ReadonlyArray<ContentfulFeatureCardsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulFeatureCards>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulFeatureCardsConnection_distinctArgs = {
  field: ContentfulFeatureCardsFieldSelector;
};


type ContentfulFeatureCardsConnection_groupArgs = {
  field: ContentfulFeatureCardsFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulFeatureCardsConnection_maxArgs = {
  field: ContentfulFeatureCardsFieldSelector;
};


type ContentfulFeatureCardsConnection_minArgs = {
  field: ContentfulFeatureCardsFieldSelector;
};


type ContentfulFeatureCardsConnection_sumArgs = {
  field: ContentfulFeatureCardsFieldSelector;
};

type ContentfulFeatureCardsEdge = {
  readonly next: Maybe<ContentfulFeatureCards>;
  readonly node: ContentfulFeatureCards;
  readonly previous: Maybe<ContentfulFeatureCards>;
};

type ContentfulFeatureCardsFieldSelector = {
  readonly cards: InputMaybe<ContentfulFeatureCardFieldSelector>;
  readonly childContentfulFeatureCardsTitleTextNode: InputMaybe<contentfulFeatureCardsTitleTextNodeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenContentfulFeatureCardsTitleTextNode: InputMaybe<contentfulFeatureCardsTitleTextNodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulFeatureCardsSysFieldSelector>;
  readonly title: InputMaybe<contentfulFeatureCardsTitleTextNodeFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureCardsFilterInput = {
  readonly cards: InputMaybe<ContentfulFeatureCardFilterListInput>;
  readonly childContentfulFeatureCardsTitleTextNode: InputMaybe<contentfulFeatureCardsTitleTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulFeatureCardsTitleTextNode: InputMaybe<contentfulFeatureCardsTitleTextNodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulFeatureCardsSysFilterInput>;
  readonly title: InputMaybe<contentfulFeatureCardsTitleTextNodeFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulFeatureCardsFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulFeatureCardsFilterInput>;
};

type ContentfulFeatureCardsGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulFeatureCardsEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulFeatureCardsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulFeatureCards>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulFeatureCardsGroupConnection_distinctArgs = {
  field: ContentfulFeatureCardsFieldSelector;
};


type ContentfulFeatureCardsGroupConnection_groupArgs = {
  field: ContentfulFeatureCardsFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulFeatureCardsGroupConnection_maxArgs = {
  field: ContentfulFeatureCardsFieldSelector;
};


type ContentfulFeatureCardsGroupConnection_minArgs = {
  field: ContentfulFeatureCardsFieldSelector;
};


type ContentfulFeatureCardsGroupConnection_sumArgs = {
  field: ContentfulFeatureCardsFieldSelector;
};

type ContentfulFeatureCardsSortInput = {
  readonly cards: InputMaybe<ContentfulFeatureCardSortInput>;
  readonly childContentfulFeatureCardsTitleTextNode: InputMaybe<contentfulFeatureCardsTitleTextNodeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenContentfulFeatureCardsTitleTextNode: InputMaybe<contentfulFeatureCardsTitleTextNodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulFeatureCardsSysSortInput>;
  readonly title: InputMaybe<contentfulFeatureCardsTitleTextNodeSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureCardsSys = {
  readonly contentType: Maybe<ContentfulFeatureCardsSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulFeatureCardsSysContentType = {
  readonly sys: Maybe<ContentfulFeatureCardsSysContentTypeSys>;
};

type ContentfulFeatureCardsSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulFeatureCardsSysContentTypeSysFieldSelector>;
};

type ContentfulFeatureCardsSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulFeatureCardsSysContentTypeSysFilterInput>;
};

type ContentfulFeatureCardsSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulFeatureCardsSysContentTypeSysSortInput>;
};

type ContentfulFeatureCardsSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulFeatureCardsSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureCardsSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulFeatureCardsSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulFeatureCardsSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulFeatureCardsSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulFeatureCardsSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulFeatureCardsSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulFeatureCardsSysSortInput = {
  readonly contentType: InputMaybe<ContentfulFeatureCardsSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulGlobalAssets = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly coinLogo: Maybe<ContentfulAsset>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulGlobalAssetsSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulGlobalAssets_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulGlobalAssets_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulGlobalAssetsConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulGlobalAssetsEdge>;
  readonly group: ReadonlyArray<ContentfulGlobalAssetsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulGlobalAssets>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulGlobalAssetsConnection_distinctArgs = {
  field: ContentfulGlobalAssetsFieldSelector;
};


type ContentfulGlobalAssetsConnection_groupArgs = {
  field: ContentfulGlobalAssetsFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulGlobalAssetsConnection_maxArgs = {
  field: ContentfulGlobalAssetsFieldSelector;
};


type ContentfulGlobalAssetsConnection_minArgs = {
  field: ContentfulGlobalAssetsFieldSelector;
};


type ContentfulGlobalAssetsConnection_sumArgs = {
  field: ContentfulGlobalAssetsFieldSelector;
};

type ContentfulGlobalAssetsEdge = {
  readonly next: Maybe<ContentfulGlobalAssets>;
  readonly node: ContentfulGlobalAssets;
  readonly previous: Maybe<ContentfulGlobalAssets>;
};

type ContentfulGlobalAssetsFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly coinLogo: InputMaybe<ContentfulAssetFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulGlobalAssetsSysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type ContentfulGlobalAssetsFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly coinLogo: InputMaybe<ContentfulAssetFilterInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulGlobalAssetsSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulGlobalAssetsGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulGlobalAssetsEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulGlobalAssetsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulGlobalAssets>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulGlobalAssetsGroupConnection_distinctArgs = {
  field: ContentfulGlobalAssetsFieldSelector;
};


type ContentfulGlobalAssetsGroupConnection_groupArgs = {
  field: ContentfulGlobalAssetsFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulGlobalAssetsGroupConnection_maxArgs = {
  field: ContentfulGlobalAssetsFieldSelector;
};


type ContentfulGlobalAssetsGroupConnection_minArgs = {
  field: ContentfulGlobalAssetsFieldSelector;
};


type ContentfulGlobalAssetsGroupConnection_sumArgs = {
  field: ContentfulGlobalAssetsFieldSelector;
};

type ContentfulGlobalAssetsSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly coinLogo: InputMaybe<ContentfulAssetSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulGlobalAssetsSysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type ContentfulGlobalAssetsSys = {
  readonly contentType: Maybe<ContentfulGlobalAssetsSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulGlobalAssetsSysContentType = {
  readonly sys: Maybe<ContentfulGlobalAssetsSysContentTypeSys>;
};

type ContentfulGlobalAssetsSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulGlobalAssetsSysContentTypeSysFieldSelector>;
};

type ContentfulGlobalAssetsSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulGlobalAssetsSysContentTypeSysFilterInput>;
};

type ContentfulGlobalAssetsSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulGlobalAssetsSysContentTypeSysSortInput>;
};

type ContentfulGlobalAssetsSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulGlobalAssetsSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulGlobalAssetsSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulGlobalAssetsSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulGlobalAssetsSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulGlobalAssetsSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulGlobalAssetsSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulGlobalAssetsSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulGlobalAssetsSysSortInput = {
  readonly contentType: InputMaybe<ContentfulGlobalAssetsSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulHeader = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly logo: Maybe<ContentfulAsset>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulHeaderSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulHeader_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulHeader_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulHeaderConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulHeaderEdge>;
  readonly group: ReadonlyArray<ContentfulHeaderGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulHeader>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulHeaderConnection_distinctArgs = {
  field: ContentfulHeaderFieldSelector;
};


type ContentfulHeaderConnection_groupArgs = {
  field: ContentfulHeaderFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulHeaderConnection_maxArgs = {
  field: ContentfulHeaderFieldSelector;
};


type ContentfulHeaderConnection_minArgs = {
  field: ContentfulHeaderFieldSelector;
};


type ContentfulHeaderConnection_sumArgs = {
  field: ContentfulHeaderFieldSelector;
};

type ContentfulHeaderEdge = {
  readonly next: Maybe<ContentfulHeader>;
  readonly node: ContentfulHeader;
  readonly previous: Maybe<ContentfulHeader>;
};

type ContentfulHeaderFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly logo: InputMaybe<ContentfulAssetFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulHeaderSysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type ContentfulHeaderFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly logo: InputMaybe<ContentfulAssetFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulHeaderSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulHeaderGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulHeaderEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulHeaderGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulHeader>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulHeaderGroupConnection_distinctArgs = {
  field: ContentfulHeaderFieldSelector;
};


type ContentfulHeaderGroupConnection_groupArgs = {
  field: ContentfulHeaderFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulHeaderGroupConnection_maxArgs = {
  field: ContentfulHeaderFieldSelector;
};


type ContentfulHeaderGroupConnection_minArgs = {
  field: ContentfulHeaderFieldSelector;
};


type ContentfulHeaderGroupConnection_sumArgs = {
  field: ContentfulHeaderFieldSelector;
};

type ContentfulHeaderSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly logo: InputMaybe<ContentfulAssetSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulHeaderSysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type ContentfulHeaderSys = {
  readonly contentType: Maybe<ContentfulHeaderSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulHeaderSysContentType = {
  readonly sys: Maybe<ContentfulHeaderSysContentTypeSys>;
};

type ContentfulHeaderSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulHeaderSysContentTypeSysFieldSelector>;
};

type ContentfulHeaderSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulHeaderSysContentTypeSysFilterInput>;
};

type ContentfulHeaderSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulHeaderSysContentTypeSysSortInput>;
};

type ContentfulHeaderSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulHeaderSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulHeaderSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulHeaderSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulHeaderSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulHeaderSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulHeaderSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulHeaderSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulHeaderSysSortInput = {
  readonly contentType: InputMaybe<ContentfulHeaderSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulImageCropFocus =
  | 'bottom'
  | 'bottom_right'
  | 'bottom_left'
  | 'center'
  | 'face'
  | 'faces'
  | 'left'
  | 'right'
  | 'top'
  | 'top_left'
  | 'top_right';

type ContentfulNetworks = ContentfulEntry & ContentfulReference & Node & {
  readonly buttonText: Maybe<Scalars['String']>;
  /** Returns the first child node of type contentfulNetworksTitleTextNode or null if there are no children of given type on this node */
  readonly childContentfulNetworksTitleTextNode: Maybe<contentfulNetworksTitleTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulNetworksTitleTextNode */
  readonly childrenContentfulNetworksTitleTextNode: Maybe<ReadonlyArray<Maybe<contentfulNetworksTitleTextNode>>>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly networks: Maybe<ReadonlyArray<Maybe<ContentfulCoin>>>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly plus: Maybe<ContentfulAsset>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulNetworksSys>;
  readonly title: Maybe<contentfulNetworksTitleTextNode>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulNetworks_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulNetworks_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulNetworksConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulNetworksEdge>;
  readonly group: ReadonlyArray<ContentfulNetworksGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulNetworks>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulNetworksConnection_distinctArgs = {
  field: ContentfulNetworksFieldSelector;
};


type ContentfulNetworksConnection_groupArgs = {
  field: ContentfulNetworksFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulNetworksConnection_maxArgs = {
  field: ContentfulNetworksFieldSelector;
};


type ContentfulNetworksConnection_minArgs = {
  field: ContentfulNetworksFieldSelector;
};


type ContentfulNetworksConnection_sumArgs = {
  field: ContentfulNetworksFieldSelector;
};

type ContentfulNetworksEdge = {
  readonly next: Maybe<ContentfulNetworks>;
  readonly node: ContentfulNetworks;
  readonly previous: Maybe<ContentfulNetworks>;
};

type ContentfulNetworksFieldSelector = {
  readonly buttonText: InputMaybe<FieldSelectorEnum>;
  readonly childContentfulNetworksTitleTextNode: InputMaybe<contentfulNetworksTitleTextNodeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenContentfulNetworksTitleTextNode: InputMaybe<contentfulNetworksTitleTextNodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly networks: InputMaybe<ContentfulCoinFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly plus: InputMaybe<ContentfulAssetFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulNetworksSysFieldSelector>;
  readonly title: InputMaybe<contentfulNetworksTitleTextNodeFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type ContentfulNetworksFilterInput = {
  readonly buttonText: InputMaybe<StringQueryOperatorInput>;
  readonly childContentfulNetworksTitleTextNode: InputMaybe<contentfulNetworksTitleTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulNetworksTitleTextNode: InputMaybe<contentfulNetworksTitleTextNodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly networks: InputMaybe<ContentfulCoinFilterListInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly plus: InputMaybe<ContentfulAssetFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulNetworksSysFilterInput>;
  readonly title: InputMaybe<contentfulNetworksTitleTextNodeFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulNetworksFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulNetworksFilterInput>;
};

type ContentfulNetworksGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulNetworksEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulNetworksGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulNetworks>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulNetworksGroupConnection_distinctArgs = {
  field: ContentfulNetworksFieldSelector;
};


type ContentfulNetworksGroupConnection_groupArgs = {
  field: ContentfulNetworksFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulNetworksGroupConnection_maxArgs = {
  field: ContentfulNetworksFieldSelector;
};


type ContentfulNetworksGroupConnection_minArgs = {
  field: ContentfulNetworksFieldSelector;
};


type ContentfulNetworksGroupConnection_sumArgs = {
  field: ContentfulNetworksFieldSelector;
};

type ContentfulNetworksSortInput = {
  readonly buttonText: InputMaybe<SortOrderEnum>;
  readonly childContentfulNetworksTitleTextNode: InputMaybe<contentfulNetworksTitleTextNodeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenContentfulNetworksTitleTextNode: InputMaybe<contentfulNetworksTitleTextNodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly networks: InputMaybe<ContentfulCoinSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly plus: InputMaybe<ContentfulAssetSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulNetworksSysSortInput>;
  readonly title: InputMaybe<contentfulNetworksTitleTextNodeSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type ContentfulNetworksSys = {
  readonly contentType: Maybe<ContentfulNetworksSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulNetworksSysContentType = {
  readonly sys: Maybe<ContentfulNetworksSysContentTypeSys>;
};

type ContentfulNetworksSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulNetworksSysContentTypeSysFieldSelector>;
};

type ContentfulNetworksSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulNetworksSysContentTypeSysFilterInput>;
};

type ContentfulNetworksSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulNetworksSysContentTypeSysSortInput>;
};

type ContentfulNetworksSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulNetworksSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulNetworksSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulNetworksSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulNetworksSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulNetworksSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulNetworksSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulNetworksSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulNetworksSysSortInput = {
  readonly contentType: InputMaybe<ContentfulNetworksSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulPageData = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulPageDataSys>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulPageData_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulPageData_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulPageDataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulPageDataEdge>;
  readonly group: ReadonlyArray<ContentfulPageDataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulPageData>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulPageDataConnection_distinctArgs = {
  field: ContentfulPageDataFieldSelector;
};


type ContentfulPageDataConnection_groupArgs = {
  field: ContentfulPageDataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulPageDataConnection_maxArgs = {
  field: ContentfulPageDataFieldSelector;
};


type ContentfulPageDataConnection_minArgs = {
  field: ContentfulPageDataFieldSelector;
};


type ContentfulPageDataConnection_sumArgs = {
  field: ContentfulPageDataFieldSelector;
};

type ContentfulPageDataEdge = {
  readonly next: Maybe<ContentfulPageData>;
  readonly node: ContentfulPageData;
  readonly previous: Maybe<ContentfulPageData>;
};

type ContentfulPageDataFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulPageDataSysFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type ContentfulPageDataFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulPageDataSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulPageDataGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulPageDataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulPageDataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulPageData>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulPageDataGroupConnection_distinctArgs = {
  field: ContentfulPageDataFieldSelector;
};


type ContentfulPageDataGroupConnection_groupArgs = {
  field: ContentfulPageDataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ContentfulPageDataGroupConnection_maxArgs = {
  field: ContentfulPageDataFieldSelector;
};


type ContentfulPageDataGroupConnection_minArgs = {
  field: ContentfulPageDataFieldSelector;
};


type ContentfulPageDataGroupConnection_sumArgs = {
  field: ContentfulPageDataFieldSelector;
};

type ContentfulPageDataSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulPageDataSysSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type ContentfulPageDataSys = {
  readonly contentType: Maybe<ContentfulPageDataSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulPageDataSysContentType = {
  readonly sys: Maybe<ContentfulPageDataSysContentTypeSys>;
};

type ContentfulPageDataSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulPageDataSysContentTypeSysFieldSelector>;
};

type ContentfulPageDataSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulPageDataSysContentTypeSysFilterInput>;
};

type ContentfulPageDataSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulPageDataSysContentTypeSysSortInput>;
};

type ContentfulPageDataSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulPageDataSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulPageDataSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulPageDataSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulPageDataSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulPageDataSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type ContentfulPageDataSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulPageDataSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulPageDataSysSortInput = {
  readonly contentType: InputMaybe<ContentfulPageDataSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type DateQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Date']>;
  readonly gt: InputMaybe<Scalars['Date']>;
  readonly gte: InputMaybe<Scalars['Date']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt: InputMaybe<Scalars['Date']>;
  readonly lte: InputMaybe<Scalars['Date']>;
  readonly ne: InputMaybe<Scalars['Date']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type Directory_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_groupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldSelector;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
};

type DirectoryFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type DirectoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_groupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldSelector;
};

type DirectorySortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly opacity: InputMaybe<Scalars['Int']>;
  readonly shadow: Scalars['String'];
};

type FieldSelectorEnum =
  | 'SELECT';

type File = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type File_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type FileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileConnection_distinctArgs = {
  field: FileFieldSelector;
};


type FileConnection_groupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileConnection_maxArgs = {
  field: FileFieldSelector;
};


type FileConnection_minArgs = {
  field: FileFieldSelector;
};


type FileConnection_sumArgs = {
  field: FileFieldSelector;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly blksize: InputMaybe<FieldSelectorEnum>;
  readonly blocks: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly childImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly publicURL: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
};

type FileFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly blksize: InputMaybe<IntQueryOperatorInput>;
  readonly blocks: InputMaybe<IntQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly publicURL: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type FileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_groupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_minArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldSelector;
};

type FileSortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly blksize: InputMaybe<SortOrderEnum>;
  readonly blocks: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly childImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly publicURL: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
};

type FloatQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Float']>;
  readonly gt: InputMaybe<Scalars['Float']>;
  readonly gte: InputMaybe<Scalars['Float']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt: InputMaybe<Scalars['Float']>;
  readonly lte: InputMaybe<Scalars['Float']>;
  readonly ne: InputMaybe<Scalars['Float']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

type GatsbyImageDataQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['GatsbyImageData']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>>;
  readonly ne: InputMaybe<Scalars['GatsbyImageData']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>>;
};

type GatsbyImageFormat =
  | 'auto'
  | 'avif'
  | 'jpg'
  | ''
  | 'png'
  | 'webp';

type GatsbyImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type GatsbyImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageCropFocus =
  | 17
  | 0
  | 2
  | 16
  | 1
  | 5
  | 8
  | 3
  | 6
  | 7
  | 4;

type ImageFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageFormat =
  | ''
  | 'avif'
  | 'jpg'
  | ''
  | 'png'
  | 'webp';

type ImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type ImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageResizingBehavior =
  /** Crop a part of the original image to match the specified size. */
  | 'crop'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'fill'
  | ''
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'pad'
  /** Scale the image regardless of the original aspect ratio. */
  | 'scale'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'thumb';

type ImageSharp = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['GatsbyImageData'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly parent: Maybe<Node>;
  readonly resize: Maybe<ImageSharpResize>;
};


type ImageSharp_fixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_fluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};


type ImageSharp_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AVIFOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JPGOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PNGOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_resizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

type ImageSharpConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpConnection_groupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldSelector;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly fixed: InputMaybe<ImageSharpFixedFieldSelector>;
  readonly fluid: InputMaybe<ImageSharpFluidFieldSelector>;
  readonly gatsbyImageData: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly original: InputMaybe<ImageSharpOriginalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly resize: InputMaybe<ImageSharpResizeFieldSelector>;
};

type ImageSharpFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly fixed: InputMaybe<ImageSharpFixedFilterInput>;
  readonly fluid: InputMaybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly original: InputMaybe<ImageSharpOriginalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly resize: InputMaybe<ImageSharpResizeFilterInput>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: InputMaybe<ImageSharpFilterInput>;
};

type ImageSharpFixed = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly base64: Maybe<Scalars['String']>;
  readonly height: Scalars['Float'];
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Scalars['Float'];
};

type ImageSharpFixedFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly base64: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly srcSet: InputMaybe<FieldSelectorEnum>;
  readonly srcSetWebp: InputMaybe<FieldSelectorEnum>;
  readonly srcWebp: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpFixedFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpFixedSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly base64: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly srcSet: InputMaybe<SortOrderEnum>;
  readonly srcSetWebp: InputMaybe<SortOrderEnum>;
  readonly srcWebp: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ImageSharpFluid = {
  readonly aspectRatio: Scalars['Float'];
  readonly base64: Maybe<Scalars['String']>;
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationHeight: Scalars['Int'];
  readonly presentationWidth: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
};

type ImageSharpFluidFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly base64: InputMaybe<FieldSelectorEnum>;
  readonly originalImg: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly presentationHeight: InputMaybe<FieldSelectorEnum>;
  readonly presentationWidth: InputMaybe<FieldSelectorEnum>;
  readonly sizes: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly srcSet: InputMaybe<FieldSelectorEnum>;
  readonly srcSetWebp: InputMaybe<FieldSelectorEnum>;
  readonly srcWebp: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpFluidFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly originalImg: InputMaybe<StringQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly presentationHeight: InputMaybe<IntQueryOperatorInput>;
  readonly presentationWidth: InputMaybe<IntQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

type ImageSharpFluidSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly base64: InputMaybe<SortOrderEnum>;
  readonly originalImg: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly presentationHeight: InputMaybe<SortOrderEnum>;
  readonly presentationWidth: InputMaybe<SortOrderEnum>;
  readonly sizes: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly srcSet: InputMaybe<SortOrderEnum>;
  readonly srcSetWebp: InputMaybe<SortOrderEnum>;
  readonly srcWebp: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
};

type ImageSharpGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpGroupConnection_groupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldSelector;
};

type ImageSharpOriginal = {
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Float']>;
};

type ImageSharpOriginalFieldSelector = {
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpOriginalFilterInput = {
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpOriginalSortInput = {
  readonly height: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ImageSharpResize = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type ImageSharpResizeFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpResizeFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ImageSharpResizeSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ImageSharpSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly fixed: InputMaybe<ImageSharpFixedSortInput>;
  readonly fluid: InputMaybe<ImageSharpFluidSortInput>;
  readonly gatsbyImageData: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly original: InputMaybe<ImageSharpOriginalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly resize: InputMaybe<ImageSharpResizeSortInput>;
};

type IntQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Int']>;
  readonly gt: InputMaybe<Scalars['Int']>;
  readonly gte: InputMaybe<Scalars['Int']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt: InputMaybe<Scalars['Int']>;
  readonly lte: InputMaybe<Scalars['Int']>;
  readonly ne: InputMaybe<Scalars['Int']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly contentFilePath: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFieldSelector = {
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly contentDigest: InputMaybe<FieldSelectorEnum>;
  readonly contentFilePath: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly fieldOwners: InputMaybe<FieldSelectorEnum>;
  readonly ignoreType: InputMaybe<FieldSelectorEnum>;
  readonly mediaType: InputMaybe<FieldSelectorEnum>;
  readonly owner: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type InternalFilterInput = {
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
  readonly contentFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type InternalSortInput = {
  readonly content: InputMaybe<SortOrderEnum>;
  readonly contentDigest: InputMaybe<SortOrderEnum>;
  readonly contentFilePath: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly fieldOwners: InputMaybe<SortOrderEnum>;
  readonly ignoreType: InputMaybe<SortOrderEnum>;
  readonly mediaType: InputMaybe<SortOrderEnum>;
  readonly owner: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type JPGOptions = {
  readonly progressive: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type JSONQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']>;
  readonly glob: InputMaybe<Scalars['JSON']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly ne: InputMaybe<Scalars['JSON']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type NodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type NodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: InputMaybe<NodeFilterInput>;
};

type NodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type PNGOptions = {
  readonly compressionSpeed: InputMaybe<Scalars['Int']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly alphaMax: InputMaybe<Scalars['Float']>;
  readonly background: InputMaybe<Scalars['String']>;
  readonly blackOnWhite: InputMaybe<Scalars['Boolean']>;
  readonly color: InputMaybe<Scalars['String']>;
  readonly optCurve: InputMaybe<Scalars['Boolean']>;
  readonly optTolerance: InputMaybe<Scalars['Float']>;
  readonly threshold: InputMaybe<Scalars['Int']>;
  readonly turdSize: InputMaybe<Scalars['Float']>;
  readonly turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'left'
  | 'majority'
  | 'minority'
  | 'right'
  | 'white';

type Query = {
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly allContentfulBasicFeatureBanner: ContentfulBasicFeatureBannerConnection;
  readonly allContentfulBasicFeatureBannerTitleTextNode: contentfulBasicFeatureBannerTitleTextNodeConnection;
  readonly allContentfulCoin: ContentfulCoinConnection;
  readonly allContentfulCoinBanner: ContentfulCoinBannerConnection;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly allContentfulFeatureBanner: ContentfulFeatureBannerConnection;
  readonly allContentfulFeatureBanner2: ContentfulFeatureBanner2Connection;
  readonly allContentfulFeatureBanner2DescriptionTextNode: contentfulFeatureBanner2DescriptionTextNodeConnection;
  readonly allContentfulFeatureBanner2TitleTextNode: contentfulFeatureBanner2TitleTextNodeConnection;
  readonly allContentfulFeatureBanner3: ContentfulFeatureBanner3Connection;
  readonly allContentfulFeatureBanner3DescriptionTextNode: contentfulFeatureBanner3DescriptionTextNodeConnection;
  readonly allContentfulFeatureBanner3TitleTextNode: contentfulFeatureBanner3TitleTextNodeConnection;
  readonly allContentfulFeatureBannerDescriptionTextNode: contentfulFeatureBannerDescriptionTextNodeConnection;
  readonly allContentfulFeatureBannerTitleTextNode: contentfulFeatureBannerTitleTextNodeConnection;
  readonly allContentfulFeatureCard: ContentfulFeatureCardConnection;
  readonly allContentfulFeatureCardDescriptionTextNode: contentfulFeatureCardDescriptionTextNodeConnection;
  readonly allContentfulFeatureCardTitleTextNode: contentfulFeatureCardTitleTextNodeConnection;
  readonly allContentfulFeatureCards: ContentfulFeatureCardsConnection;
  readonly allContentfulFeatureCardsTitleTextNode: contentfulFeatureCardsTitleTextNodeConnection;
  readonly allContentfulGlobalAssets: ContentfulGlobalAssetsConnection;
  readonly allContentfulHeader: ContentfulHeaderConnection;
  readonly allContentfulNetworks: ContentfulNetworksConnection;
  readonly allContentfulNetworksTitleTextNode: contentfulNetworksTitleTextNodeConnection;
  readonly allContentfulPageData: ContentfulPageDataConnection;
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly contentfulBasicFeatureBanner: Maybe<ContentfulBasicFeatureBanner>;
  readonly contentfulBasicFeatureBannerTitleTextNode: Maybe<contentfulBasicFeatureBannerTitleTextNode>;
  readonly contentfulCoin: Maybe<ContentfulCoin>;
  readonly contentfulCoinBanner: Maybe<ContentfulCoinBanner>;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly contentfulFeatureBanner: Maybe<ContentfulFeatureBanner>;
  readonly contentfulFeatureBanner2: Maybe<ContentfulFeatureBanner2>;
  readonly contentfulFeatureBanner2DescriptionTextNode: Maybe<contentfulFeatureBanner2DescriptionTextNode>;
  readonly contentfulFeatureBanner2TitleTextNode: Maybe<contentfulFeatureBanner2TitleTextNode>;
  readonly contentfulFeatureBanner3: Maybe<ContentfulFeatureBanner3>;
  readonly contentfulFeatureBanner3DescriptionTextNode: Maybe<contentfulFeatureBanner3DescriptionTextNode>;
  readonly contentfulFeatureBanner3TitleTextNode: Maybe<contentfulFeatureBanner3TitleTextNode>;
  readonly contentfulFeatureBannerDescriptionTextNode: Maybe<contentfulFeatureBannerDescriptionTextNode>;
  readonly contentfulFeatureBannerTitleTextNode: Maybe<contentfulFeatureBannerTitleTextNode>;
  readonly contentfulFeatureCard: Maybe<ContentfulFeatureCard>;
  readonly contentfulFeatureCardDescriptionTextNode: Maybe<contentfulFeatureCardDescriptionTextNode>;
  readonly contentfulFeatureCardTitleTextNode: Maybe<contentfulFeatureCardTitleTextNode>;
  readonly contentfulFeatureCards: Maybe<ContentfulFeatureCards>;
  readonly contentfulFeatureCardsTitleTextNode: Maybe<contentfulFeatureCardsTitleTextNode>;
  readonly contentfulGlobalAssets: Maybe<ContentfulGlobalAssets>;
  readonly contentfulHeader: Maybe<ContentfulHeader>;
  readonly contentfulNetworks: Maybe<ContentfulNetworks>;
  readonly contentfulNetworksTitleTextNode: Maybe<contentfulNetworksTitleTextNode>;
  readonly contentfulPageData: Maybe<ContentfulPageData>;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
};


type Query_allContentfulAssetArgs = {
  filter: InputMaybe<ContentfulAssetFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulAssetSortInput>>>;
};


type Query_allContentfulBasicFeatureBannerArgs = {
  filter: InputMaybe<ContentfulBasicFeatureBannerFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulBasicFeatureBannerSortInput>>>;
};


type Query_allContentfulBasicFeatureBannerTitleTextNodeArgs = {
  filter: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<contentfulBasicFeatureBannerTitleTextNodeSortInput>>>;
};


type Query_allContentfulCoinArgs = {
  filter: InputMaybe<ContentfulCoinFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulCoinSortInput>>>;
};


type Query_allContentfulCoinBannerArgs = {
  filter: InputMaybe<ContentfulCoinBannerFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulCoinBannerSortInput>>>;
};


type Query_allContentfulContentTypeArgs = {
  filter: InputMaybe<ContentfulContentTypeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulContentTypeSortInput>>>;
};


type Query_allContentfulEntryArgs = {
  filter: InputMaybe<ContentfulEntryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulEntrySortInput>>>;
};


type Query_allContentfulFeatureBannerArgs = {
  filter: InputMaybe<ContentfulFeatureBannerFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulFeatureBannerSortInput>>>;
};


type Query_allContentfulFeatureBanner2Args = {
  filter: InputMaybe<ContentfulFeatureBanner2FilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulFeatureBanner2SortInput>>>;
};


type Query_allContentfulFeatureBanner2DescriptionTextNodeArgs = {
  filter: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<contentfulFeatureBanner2DescriptionTextNodeSortInput>>>;
};


type Query_allContentfulFeatureBanner2TitleTextNodeArgs = {
  filter: InputMaybe<contentfulFeatureBanner2TitleTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<contentfulFeatureBanner2TitleTextNodeSortInput>>>;
};


type Query_allContentfulFeatureBanner3Args = {
  filter: InputMaybe<ContentfulFeatureBanner3FilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulFeatureBanner3SortInput>>>;
};


type Query_allContentfulFeatureBanner3DescriptionTextNodeArgs = {
  filter: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<contentfulFeatureBanner3DescriptionTextNodeSortInput>>>;
};


type Query_allContentfulFeatureBanner3TitleTextNodeArgs = {
  filter: InputMaybe<contentfulFeatureBanner3TitleTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<contentfulFeatureBanner3TitleTextNodeSortInput>>>;
};


type Query_allContentfulFeatureBannerDescriptionTextNodeArgs = {
  filter: InputMaybe<contentfulFeatureBannerDescriptionTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<contentfulFeatureBannerDescriptionTextNodeSortInput>>>;
};


type Query_allContentfulFeatureBannerTitleTextNodeArgs = {
  filter: InputMaybe<contentfulFeatureBannerTitleTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<contentfulFeatureBannerTitleTextNodeSortInput>>>;
};


type Query_allContentfulFeatureCardArgs = {
  filter: InputMaybe<ContentfulFeatureCardFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulFeatureCardSortInput>>>;
};


type Query_allContentfulFeatureCardDescriptionTextNodeArgs = {
  filter: InputMaybe<contentfulFeatureCardDescriptionTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<contentfulFeatureCardDescriptionTextNodeSortInput>>>;
};


type Query_allContentfulFeatureCardTitleTextNodeArgs = {
  filter: InputMaybe<contentfulFeatureCardTitleTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<contentfulFeatureCardTitleTextNodeSortInput>>>;
};


type Query_allContentfulFeatureCardsArgs = {
  filter: InputMaybe<ContentfulFeatureCardsFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulFeatureCardsSortInput>>>;
};


type Query_allContentfulFeatureCardsTitleTextNodeArgs = {
  filter: InputMaybe<contentfulFeatureCardsTitleTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<contentfulFeatureCardsTitleTextNodeSortInput>>>;
};


type Query_allContentfulGlobalAssetsArgs = {
  filter: InputMaybe<ContentfulGlobalAssetsFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulGlobalAssetsSortInput>>>;
};


type Query_allContentfulHeaderArgs = {
  filter: InputMaybe<ContentfulHeaderFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulHeaderSortInput>>>;
};


type Query_allContentfulNetworksArgs = {
  filter: InputMaybe<ContentfulNetworksFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulNetworksSortInput>>>;
};


type Query_allContentfulNetworksTitleTextNodeArgs = {
  filter: InputMaybe<contentfulNetworksTitleTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<contentfulNetworksTitleTextNodeSortInput>>>;
};


type Query_allContentfulPageDataArgs = {
  filter: InputMaybe<ContentfulPageDataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulPageDataSortInput>>>;
};


type Query_allDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<DirectorySortInput>>>;
};


type Query_allFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FileSortInput>>>;
};


type Query_allImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpSortInput>>>;
};


type Query_allSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteSortInput>>>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataSortInput>>>;
};


type Query_allSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionSortInput>>>;
};


type Query_allSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePageSortInput>>>;
};


type Query_allSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePluginSortInput>>>;
};


type Query_contentfulAssetArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  file: InputMaybe<ContentfulAssetFileFilterInput>;
  filename: InputMaybe<StringQueryOperatorInput>;
  filesize: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  placeholderUrl: InputMaybe<StringQueryOperatorInput>;
  publicUrl: InputMaybe<StringQueryOperatorInput>;
  resize: InputMaybe<RemoteFileResizeFilterInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulAssetSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};


type Query_contentfulBasicFeatureBannerArgs = {
  childContentfulBasicFeatureBannerTitleTextNode: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulBasicFeatureBannerTitleTextNode: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulBasicFeatureBannerSysFilterInput>;
  title: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulBasicFeatureBannerTitleTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_contentfulCoinArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  networks: InputMaybe<ContentfulNetworksFilterListInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulCoinSysFilterInput>;
  ticket: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulCoinBannerArgs = {
  background: InputMaybe<ContentfulAssetFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  height: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulCoinBannerSysFilterInput>;
  text1: InputMaybe<StringQueryOperatorInput>;
  text2: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulContentTypeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  displayField: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


type Query_contentfulEntryArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_contentfulFeatureBannerArgs = {
  childContentfulFeatureBannerDescriptionTextNode: InputMaybe<contentfulFeatureBannerDescriptionTextNodeFilterInput>;
  childContentfulFeatureBannerTitleTextNode: InputMaybe<contentfulFeatureBannerTitleTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulFeatureBannerDescriptionTextNode: InputMaybe<contentfulFeatureBannerDescriptionTextNodeFilterListInput>;
  childrenContentfulFeatureBannerTitleTextNode: InputMaybe<contentfulFeatureBannerTitleTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<contentfulFeatureBannerDescriptionTextNodeFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulFeatureBannerSysFilterInput>;
  title: InputMaybe<contentfulFeatureBannerTitleTextNodeFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulFeatureBanner2Args = {
  childContentfulFeatureBanner2DescriptionTextNode: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeFilterInput>;
  childContentfulFeatureBanner2TitleTextNode: InputMaybe<contentfulFeatureBanner2TitleTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulFeatureBanner2DescriptionTextNode: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeFilterListInput>;
  childrenContentfulFeatureBanner2TitleTextNode: InputMaybe<contentfulFeatureBanner2TitleTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulFeatureBanner2SysFilterInput>;
  title: InputMaybe<contentfulFeatureBanner2TitleTextNodeFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulFeatureBanner2DescriptionTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeSysFilterInput>;
};


type Query_contentfulFeatureBanner2TitleTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulFeatureBanner2TitleTextNodeSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_contentfulFeatureBanner3Args = {
  childContentfulFeatureBanner3DescriptionTextNode: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeFilterInput>;
  childContentfulFeatureBanner3TitleTextNode: InputMaybe<contentfulFeatureBanner3TitleTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulFeatureBanner3DescriptionTextNode: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeFilterListInput>;
  childrenContentfulFeatureBanner3TitleTextNode: InputMaybe<contentfulFeatureBanner3TitleTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulFeatureBanner3SysFilterInput>;
  title: InputMaybe<contentfulFeatureBanner3TitleTextNodeFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulFeatureBanner3DescriptionTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeSysFilterInput>;
};


type Query_contentfulFeatureBanner3TitleTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulFeatureBanner3TitleTextNodeSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_contentfulFeatureBannerDescriptionTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulFeatureBannerDescriptionTextNodeSysFilterInput>;
};


type Query_contentfulFeatureBannerTitleTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulFeatureBannerTitleTextNodeSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_contentfulFeatureCardArgs = {
  childContentfulFeatureCardDescriptionTextNode: InputMaybe<contentfulFeatureCardDescriptionTextNodeFilterInput>;
  childContentfulFeatureCardTitleTextNode: InputMaybe<contentfulFeatureCardTitleTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulFeatureCardDescriptionTextNode: InputMaybe<contentfulFeatureCardDescriptionTextNodeFilterListInput>;
  childrenContentfulFeatureCardTitleTextNode: InputMaybe<contentfulFeatureCardTitleTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<contentfulFeatureCardDescriptionTextNodeFilterInput>;
  featurecards: InputMaybe<ContentfulFeatureCardsFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulFeatureCardSysFilterInput>;
  title: InputMaybe<contentfulFeatureCardTitleTextNodeFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulFeatureCardDescriptionTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulFeatureCardDescriptionTextNodeSysFilterInput>;
};


type Query_contentfulFeatureCardTitleTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulFeatureCardTitleTextNodeSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_contentfulFeatureCardsArgs = {
  cards: InputMaybe<ContentfulFeatureCardFilterListInput>;
  childContentfulFeatureCardsTitleTextNode: InputMaybe<contentfulFeatureCardsTitleTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulFeatureCardsTitleTextNode: InputMaybe<contentfulFeatureCardsTitleTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulFeatureCardsSysFilterInput>;
  title: InputMaybe<contentfulFeatureCardsTitleTextNodeFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulFeatureCardsTitleTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulFeatureCardsTitleTextNodeSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_contentfulGlobalAssetsArgs = {
  children: InputMaybe<NodeFilterListInput>;
  coinLogo: InputMaybe<ContentfulAssetFilterInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulGlobalAssetsSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulHeaderArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  logo: InputMaybe<ContentfulAssetFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulHeaderSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulNetworksArgs = {
  buttonText: InputMaybe<StringQueryOperatorInput>;
  childContentfulNetworksTitleTextNode: InputMaybe<contentfulNetworksTitleTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulNetworksTitleTextNode: InputMaybe<contentfulNetworksTitleTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  networks: InputMaybe<ContentfulCoinFilterListInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  plus: InputMaybe<ContentfulAssetFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulNetworksSysFilterInput>;
  title: InputMaybe<contentfulNetworksTitleTextNodeFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulNetworksTitleTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulNetworksTitleTextNodeSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_contentfulPageDataArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulPageDataSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_directoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_fileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_imageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};


type Query_siteArgs = {
  adapter: InputMaybe<SiteAdapterFilterInput>;
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<SiteGraphqlTypegenFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_siteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


type Query_sitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


type Query_sitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

/** Remote Interface */
type RemoteFile = {
  readonly filename: Scalars['String'];
  readonly filesize: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  readonly gatsbyImage: Maybe<Scalars['GatsbyImageData']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly mimeType: Scalars['String'];
  readonly publicUrl: Scalars['String'];
  readonly resize: Maybe<RemoteFileResize>;
  readonly width: Maybe<Scalars['Int']>;
};


/** Remote Interface */
type RemoteFile_gatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<ReadonlyArray<RemoteFileFormat>>;
  height: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
type RemoteFile_resizeArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

type RemoteFileCropFocus =
  | 'bottom'
  | 'center'
  | 'edges'
  | 'entropy'
  | 'faces'
  | 'left'
  | 'right'
  | 'top';

type RemoteFileFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'outside';

type RemoteFileFormat =
  | 'auto'
  | 'avif'
  | 'jpg'
  | 'png'
  | 'webp';

type RemoteFileLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type RemoteFilePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type RemoteFileResize = {
  readonly height: Maybe<Scalars['Int']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type RemoteFileResizeFieldSelector = {
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type RemoteFileResizeFilterInput = {
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type RemoteFileResizeSortInput = {
  readonly height: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type Site = Node & {
  readonly adapter: Maybe<SiteAdapter>;
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly graphqlTypegen: Maybe<SiteGraphqlTypegen>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly trailingSlash: Maybe<Scalars['String']>;
};


type Site_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteAdapter = {
  readonly name: Maybe<Scalars['String']>;
};

type SiteAdapterFieldSelector = {
  readonly name: InputMaybe<FieldSelectorEnum>;
};

type SiteAdapterFilterInput = {
  readonly name: InputMaybe<StringQueryOperatorInput>;
};

type SiteAdapterSortInput = {
  readonly name: InputMaybe<SortOrderEnum>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};


type SiteBuildMetadata_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_groupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

type SiteBuildMetadataSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type SiteConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteConnection_distinctArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_groupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteConnection_maxArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_minArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_sumArgs = {
  field: SiteFieldSelector;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldSelector = {
  readonly adapter: InputMaybe<SiteAdapterFieldSelector>;
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly graphqlTypegen: InputMaybe<SiteGraphqlTypegenFieldSelector>;
  readonly host: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly jsxRuntime: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pathPrefix: InputMaybe<FieldSelectorEnum>;
  readonly polyfill: InputMaybe<FieldSelectorEnum>;
  readonly port: InputMaybe<FieldSelectorEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFieldSelector>;
  readonly trailingSlash: InputMaybe<FieldSelectorEnum>;
};

type SiteFilterInput = {
  readonly adapter: InputMaybe<SiteAdapterFilterInput>;
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly graphqlTypegen: InputMaybe<SiteGraphqlTypegenFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunction = Node & {
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
};

type SiteFunctionConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_groupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldSelector;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldSelector = {
  readonly absoluteCompiledFilePath: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly functionRoute: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<FieldSelectorEnum>;
  readonly originalRelativeFilePath: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginName: InputMaybe<FieldSelectorEnum>;
  readonly relativeCompiledFilePath: InputMaybe<FieldSelectorEnum>;
};

type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginName: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunctionGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_groupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldSelector;
};

type SiteFunctionSortInput = {
  readonly absoluteCompiledFilePath: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly functionRoute: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<SortOrderEnum>;
  readonly originalRelativeFilePath: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginName: InputMaybe<SortOrderEnum>;
  readonly relativeCompiledFilePath: InputMaybe<SortOrderEnum>;
};

type SiteGraphqlTypegen = {
  readonly documentSearchPaths: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly generateOnBuild: Maybe<Scalars['Boolean']>;
  readonly typesOutputPath: Maybe<Scalars['String']>;
};

type SiteGraphqlTypegenFieldSelector = {
  readonly documentSearchPaths: InputMaybe<FieldSelectorEnum>;
  readonly generateOnBuild: InputMaybe<FieldSelectorEnum>;
  readonly typesOutputPath: InputMaybe<FieldSelectorEnum>;
};

type SiteGraphqlTypegenFilterInput = {
  readonly documentSearchPaths: InputMaybe<StringQueryOperatorInput>;
  readonly generateOnBuild: InputMaybe<BooleanQueryOperatorInput>;
  readonly typesOutputPath: InputMaybe<StringQueryOperatorInput>;
};

type SiteGraphqlTypegenSortInput = {
  readonly documentSearchPaths: InputMaybe<SortOrderEnum>;
  readonly generateOnBuild: InputMaybe<SortOrderEnum>;
  readonly typesOutputPath: InputMaybe<SortOrderEnum>;
};

type SiteGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_groupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldSelector;
};

type SitePage = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator: Maybe<SitePlugin>;
};

type SitePageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_groupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldSelector;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly component: InputMaybe<FieldSelectorEnum>;
  readonly componentChunkName: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly internalComponentName: InputMaybe<FieldSelectorEnum>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly pageContext: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly path: InputMaybe<FieldSelectorEnum>;
  readonly pluginCreator: InputMaybe<SitePluginFieldSelector>;
};

type SitePageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly component: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
};

type SitePageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_groupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldSelector;
};

type SitePageSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly component: InputMaybe<SortOrderEnum>;
  readonly componentChunkName: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly internalComponentName: InputMaybe<SortOrderEnum>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly pageContext: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly path: InputMaybe<SortOrderEnum>;
  readonly pluginCreator: InputMaybe<SitePluginSortInput>;
};

type SitePlugin = Node & {
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly resolve: Maybe<Scalars['String']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_groupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldSelector;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldSelector = {
  readonly browserAPIs: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeAPIs: InputMaybe<FieldSelectorEnum>;
  readonly packageJson: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginFilepath: InputMaybe<FieldSelectorEnum>;
  readonly pluginOptions: InputMaybe<FieldSelectorEnum>;
  readonly resolve: InputMaybe<FieldSelectorEnum>;
  readonly ssrAPIs: InputMaybe<FieldSelectorEnum>;
  readonly version: InputMaybe<FieldSelectorEnum>;
};

type SitePluginFilterInput = {
  readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  readonly resolve: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly version: InputMaybe<StringQueryOperatorInput>;
};

type SitePluginGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_groupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldSelector;
};

type SitePluginSortInput = {
  readonly browserAPIs: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeAPIs: InputMaybe<SortOrderEnum>;
  readonly packageJson: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginFilepath: InputMaybe<SortOrderEnum>;
  readonly pluginOptions: InputMaybe<SortOrderEnum>;
  readonly resolve: InputMaybe<SortOrderEnum>;
  readonly ssrAPIs: InputMaybe<SortOrderEnum>;
  readonly version: InputMaybe<SortOrderEnum>;
};

type SiteSiteMetadata = {
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFieldSelector = {
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly siteUrl: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type SiteSiteMetadataFilterInput = {
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataSortInput = {
  readonly description: InputMaybe<SortOrderEnum>;
  readonly siteUrl: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type SiteSortInput = {
  readonly adapter: InputMaybe<SiteAdapterSortInput>;
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly graphqlTypegen: InputMaybe<SiteGraphqlTypegenSortInput>;
  readonly host: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly jsxRuntime: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pathPrefix: InputMaybe<SortOrderEnum>;
  readonly polyfill: InputMaybe<SortOrderEnum>;
  readonly port: InputMaybe<SortOrderEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataSortInput>;
  readonly trailingSlash: InputMaybe<SortOrderEnum>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['String']>;
  readonly glob: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ne: InputMaybe<Scalars['String']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex: InputMaybe<Scalars['String']>;
};

type TransformOptions = {
  readonly cropFocus: InputMaybe<ImageCropFocus>;
  readonly duotone: InputMaybe<DuotoneGradient>;
  readonly fit: InputMaybe<ImageFit>;
  readonly grayscale: InputMaybe<Scalars['Boolean']>;
  readonly rotate: InputMaybe<Scalars['Int']>;
  readonly trim: InputMaybe<Scalars['Float']>;
};

type WebPOptions = {
  readonly quality: InputMaybe<Scalars['Int']>;
};

type contentfulBasicFeatureBannerTitleTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulBasicFeatureBannerTitleTextNodeSys>;
  readonly title: Maybe<Scalars['String']>;
};

type contentfulBasicFeatureBannerTitleTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulBasicFeatureBannerTitleTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulBasicFeatureBannerTitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulBasicFeatureBannerTitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulBasicFeatureBannerTitleTextNodeConnection_distinctArgs = {
  field: contentfulBasicFeatureBannerTitleTextNodeFieldSelector;
};


type contentfulBasicFeatureBannerTitleTextNodeConnection_groupArgs = {
  field: contentfulBasicFeatureBannerTitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulBasicFeatureBannerTitleTextNodeConnection_maxArgs = {
  field: contentfulBasicFeatureBannerTitleTextNodeFieldSelector;
};


type contentfulBasicFeatureBannerTitleTextNodeConnection_minArgs = {
  field: contentfulBasicFeatureBannerTitleTextNodeFieldSelector;
};


type contentfulBasicFeatureBannerTitleTextNodeConnection_sumArgs = {
  field: contentfulBasicFeatureBannerTitleTextNodeFieldSelector;
};

type contentfulBasicFeatureBannerTitleTextNodeEdge = {
  readonly next: Maybe<contentfulBasicFeatureBannerTitleTextNode>;
  readonly node: contentfulBasicFeatureBannerTitleTextNode;
  readonly previous: Maybe<contentfulBasicFeatureBannerTitleTextNode>;
};

type contentfulBasicFeatureBannerTitleTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeSysFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type contentfulBasicFeatureBannerTitleTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type contentfulBasicFeatureBannerTitleTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeFilterInput>;
};

type contentfulBasicFeatureBannerTitleTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulBasicFeatureBannerTitleTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulBasicFeatureBannerTitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulBasicFeatureBannerTitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulBasicFeatureBannerTitleTextNodeGroupConnection_distinctArgs = {
  field: contentfulBasicFeatureBannerTitleTextNodeFieldSelector;
};


type contentfulBasicFeatureBannerTitleTextNodeGroupConnection_groupArgs = {
  field: contentfulBasicFeatureBannerTitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulBasicFeatureBannerTitleTextNodeGroupConnection_maxArgs = {
  field: contentfulBasicFeatureBannerTitleTextNodeFieldSelector;
};


type contentfulBasicFeatureBannerTitleTextNodeGroupConnection_minArgs = {
  field: contentfulBasicFeatureBannerTitleTextNodeFieldSelector;
};


type contentfulBasicFeatureBannerTitleTextNodeGroupConnection_sumArgs = {
  field: contentfulBasicFeatureBannerTitleTextNodeFieldSelector;
};

type contentfulBasicFeatureBannerTitleTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<contentfulBasicFeatureBannerTitleTextNodeSysSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type contentfulBasicFeatureBannerTitleTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulBasicFeatureBannerTitleTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type contentfulBasicFeatureBannerTitleTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulBasicFeatureBannerTitleTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureBanner2DescriptionTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulFeatureBanner2DescriptionTextNodeSys>;
};

type contentfulFeatureBanner2DescriptionTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureBanner2DescriptionTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulFeatureBanner2DescriptionTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureBanner2DescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureBanner2DescriptionTextNodeConnection_distinctArgs = {
  field: contentfulFeatureBanner2DescriptionTextNodeFieldSelector;
};


type contentfulFeatureBanner2DescriptionTextNodeConnection_groupArgs = {
  field: contentfulFeatureBanner2DescriptionTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureBanner2DescriptionTextNodeConnection_maxArgs = {
  field: contentfulFeatureBanner2DescriptionTextNodeFieldSelector;
};


type contentfulFeatureBanner2DescriptionTextNodeConnection_minArgs = {
  field: contentfulFeatureBanner2DescriptionTextNodeFieldSelector;
};


type contentfulFeatureBanner2DescriptionTextNodeConnection_sumArgs = {
  field: contentfulFeatureBanner2DescriptionTextNodeFieldSelector;
};

type contentfulFeatureBanner2DescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulFeatureBanner2DescriptionTextNode>;
  readonly node: contentfulFeatureBanner2DescriptionTextNode;
  readonly previous: Maybe<contentfulFeatureBanner2DescriptionTextNode>;
};

type contentfulFeatureBanner2DescriptionTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeSysFieldSelector>;
};

type contentfulFeatureBanner2DescriptionTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeSysFilterInput>;
};

type contentfulFeatureBanner2DescriptionTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeFilterInput>;
};

type contentfulFeatureBanner2DescriptionTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureBanner2DescriptionTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulFeatureBanner2DescriptionTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureBanner2DescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureBanner2DescriptionTextNodeGroupConnection_distinctArgs = {
  field: contentfulFeatureBanner2DescriptionTextNodeFieldSelector;
};


type contentfulFeatureBanner2DescriptionTextNodeGroupConnection_groupArgs = {
  field: contentfulFeatureBanner2DescriptionTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureBanner2DescriptionTextNodeGroupConnection_maxArgs = {
  field: contentfulFeatureBanner2DescriptionTextNodeFieldSelector;
};


type contentfulFeatureBanner2DescriptionTextNodeGroupConnection_minArgs = {
  field: contentfulFeatureBanner2DescriptionTextNodeFieldSelector;
};


type contentfulFeatureBanner2DescriptionTextNodeGroupConnection_sumArgs = {
  field: contentfulFeatureBanner2DescriptionTextNodeFieldSelector;
};

type contentfulFeatureBanner2DescriptionTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<contentfulFeatureBanner2DescriptionTextNodeSysSortInput>;
};

type contentfulFeatureBanner2DescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulFeatureBanner2DescriptionTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureBanner2DescriptionTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureBanner2DescriptionTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureBanner2TitleTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulFeatureBanner2TitleTextNodeSys>;
  readonly title: Maybe<Scalars['String']>;
};

type contentfulFeatureBanner2TitleTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureBanner2TitleTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulFeatureBanner2TitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureBanner2TitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureBanner2TitleTextNodeConnection_distinctArgs = {
  field: contentfulFeatureBanner2TitleTextNodeFieldSelector;
};


type contentfulFeatureBanner2TitleTextNodeConnection_groupArgs = {
  field: contentfulFeatureBanner2TitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureBanner2TitleTextNodeConnection_maxArgs = {
  field: contentfulFeatureBanner2TitleTextNodeFieldSelector;
};


type contentfulFeatureBanner2TitleTextNodeConnection_minArgs = {
  field: contentfulFeatureBanner2TitleTextNodeFieldSelector;
};


type contentfulFeatureBanner2TitleTextNodeConnection_sumArgs = {
  field: contentfulFeatureBanner2TitleTextNodeFieldSelector;
};

type contentfulFeatureBanner2TitleTextNodeEdge = {
  readonly next: Maybe<contentfulFeatureBanner2TitleTextNode>;
  readonly node: contentfulFeatureBanner2TitleTextNode;
  readonly previous: Maybe<contentfulFeatureBanner2TitleTextNode>;
};

type contentfulFeatureBanner2TitleTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<contentfulFeatureBanner2TitleTextNodeSysFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureBanner2TitleTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulFeatureBanner2TitleTextNodeSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureBanner2TitleTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulFeatureBanner2TitleTextNodeFilterInput>;
};

type contentfulFeatureBanner2TitleTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureBanner2TitleTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulFeatureBanner2TitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureBanner2TitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureBanner2TitleTextNodeGroupConnection_distinctArgs = {
  field: contentfulFeatureBanner2TitleTextNodeFieldSelector;
};


type contentfulFeatureBanner2TitleTextNodeGroupConnection_groupArgs = {
  field: contentfulFeatureBanner2TitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureBanner2TitleTextNodeGroupConnection_maxArgs = {
  field: contentfulFeatureBanner2TitleTextNodeFieldSelector;
};


type contentfulFeatureBanner2TitleTextNodeGroupConnection_minArgs = {
  field: contentfulFeatureBanner2TitleTextNodeFieldSelector;
};


type contentfulFeatureBanner2TitleTextNodeGroupConnection_sumArgs = {
  field: contentfulFeatureBanner2TitleTextNodeFieldSelector;
};

type contentfulFeatureBanner2TitleTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<contentfulFeatureBanner2TitleTextNodeSysSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureBanner2TitleTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulFeatureBanner2TitleTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureBanner2TitleTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureBanner2TitleTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureBanner3DescriptionTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulFeatureBanner3DescriptionTextNodeSys>;
};

type contentfulFeatureBanner3DescriptionTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureBanner3DescriptionTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulFeatureBanner3DescriptionTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureBanner3DescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureBanner3DescriptionTextNodeConnection_distinctArgs = {
  field: contentfulFeatureBanner3DescriptionTextNodeFieldSelector;
};


type contentfulFeatureBanner3DescriptionTextNodeConnection_groupArgs = {
  field: contentfulFeatureBanner3DescriptionTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureBanner3DescriptionTextNodeConnection_maxArgs = {
  field: contentfulFeatureBanner3DescriptionTextNodeFieldSelector;
};


type contentfulFeatureBanner3DescriptionTextNodeConnection_minArgs = {
  field: contentfulFeatureBanner3DescriptionTextNodeFieldSelector;
};


type contentfulFeatureBanner3DescriptionTextNodeConnection_sumArgs = {
  field: contentfulFeatureBanner3DescriptionTextNodeFieldSelector;
};

type contentfulFeatureBanner3DescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulFeatureBanner3DescriptionTextNode>;
  readonly node: contentfulFeatureBanner3DescriptionTextNode;
  readonly previous: Maybe<contentfulFeatureBanner3DescriptionTextNode>;
};

type contentfulFeatureBanner3DescriptionTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeSysFieldSelector>;
};

type contentfulFeatureBanner3DescriptionTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeSysFilterInput>;
};

type contentfulFeatureBanner3DescriptionTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeFilterInput>;
};

type contentfulFeatureBanner3DescriptionTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureBanner3DescriptionTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulFeatureBanner3DescriptionTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureBanner3DescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureBanner3DescriptionTextNodeGroupConnection_distinctArgs = {
  field: contentfulFeatureBanner3DescriptionTextNodeFieldSelector;
};


type contentfulFeatureBanner3DescriptionTextNodeGroupConnection_groupArgs = {
  field: contentfulFeatureBanner3DescriptionTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureBanner3DescriptionTextNodeGroupConnection_maxArgs = {
  field: contentfulFeatureBanner3DescriptionTextNodeFieldSelector;
};


type contentfulFeatureBanner3DescriptionTextNodeGroupConnection_minArgs = {
  field: contentfulFeatureBanner3DescriptionTextNodeFieldSelector;
};


type contentfulFeatureBanner3DescriptionTextNodeGroupConnection_sumArgs = {
  field: contentfulFeatureBanner3DescriptionTextNodeFieldSelector;
};

type contentfulFeatureBanner3DescriptionTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<contentfulFeatureBanner3DescriptionTextNodeSysSortInput>;
};

type contentfulFeatureBanner3DescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulFeatureBanner3DescriptionTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureBanner3DescriptionTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureBanner3DescriptionTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureBanner3TitleTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulFeatureBanner3TitleTextNodeSys>;
  readonly title: Maybe<Scalars['String']>;
};

type contentfulFeatureBanner3TitleTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureBanner3TitleTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulFeatureBanner3TitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureBanner3TitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureBanner3TitleTextNodeConnection_distinctArgs = {
  field: contentfulFeatureBanner3TitleTextNodeFieldSelector;
};


type contentfulFeatureBanner3TitleTextNodeConnection_groupArgs = {
  field: contentfulFeatureBanner3TitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureBanner3TitleTextNodeConnection_maxArgs = {
  field: contentfulFeatureBanner3TitleTextNodeFieldSelector;
};


type contentfulFeatureBanner3TitleTextNodeConnection_minArgs = {
  field: contentfulFeatureBanner3TitleTextNodeFieldSelector;
};


type contentfulFeatureBanner3TitleTextNodeConnection_sumArgs = {
  field: contentfulFeatureBanner3TitleTextNodeFieldSelector;
};

type contentfulFeatureBanner3TitleTextNodeEdge = {
  readonly next: Maybe<contentfulFeatureBanner3TitleTextNode>;
  readonly node: contentfulFeatureBanner3TitleTextNode;
  readonly previous: Maybe<contentfulFeatureBanner3TitleTextNode>;
};

type contentfulFeatureBanner3TitleTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<contentfulFeatureBanner3TitleTextNodeSysFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureBanner3TitleTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulFeatureBanner3TitleTextNodeSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureBanner3TitleTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulFeatureBanner3TitleTextNodeFilterInput>;
};

type contentfulFeatureBanner3TitleTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureBanner3TitleTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulFeatureBanner3TitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureBanner3TitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureBanner3TitleTextNodeGroupConnection_distinctArgs = {
  field: contentfulFeatureBanner3TitleTextNodeFieldSelector;
};


type contentfulFeatureBanner3TitleTextNodeGroupConnection_groupArgs = {
  field: contentfulFeatureBanner3TitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureBanner3TitleTextNodeGroupConnection_maxArgs = {
  field: contentfulFeatureBanner3TitleTextNodeFieldSelector;
};


type contentfulFeatureBanner3TitleTextNodeGroupConnection_minArgs = {
  field: contentfulFeatureBanner3TitleTextNodeFieldSelector;
};


type contentfulFeatureBanner3TitleTextNodeGroupConnection_sumArgs = {
  field: contentfulFeatureBanner3TitleTextNodeFieldSelector;
};

type contentfulFeatureBanner3TitleTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<contentfulFeatureBanner3TitleTextNodeSysSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureBanner3TitleTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulFeatureBanner3TitleTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureBanner3TitleTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureBanner3TitleTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureBannerDescriptionTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulFeatureBannerDescriptionTextNodeSys>;
};

type contentfulFeatureBannerDescriptionTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureBannerDescriptionTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulFeatureBannerDescriptionTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureBannerDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureBannerDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulFeatureBannerDescriptionTextNodeFieldSelector;
};


type contentfulFeatureBannerDescriptionTextNodeConnection_groupArgs = {
  field: contentfulFeatureBannerDescriptionTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureBannerDescriptionTextNodeConnection_maxArgs = {
  field: contentfulFeatureBannerDescriptionTextNodeFieldSelector;
};


type contentfulFeatureBannerDescriptionTextNodeConnection_minArgs = {
  field: contentfulFeatureBannerDescriptionTextNodeFieldSelector;
};


type contentfulFeatureBannerDescriptionTextNodeConnection_sumArgs = {
  field: contentfulFeatureBannerDescriptionTextNodeFieldSelector;
};

type contentfulFeatureBannerDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulFeatureBannerDescriptionTextNode>;
  readonly node: contentfulFeatureBannerDescriptionTextNode;
  readonly previous: Maybe<contentfulFeatureBannerDescriptionTextNode>;
};

type contentfulFeatureBannerDescriptionTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<contentfulFeatureBannerDescriptionTextNodeSysFieldSelector>;
};

type contentfulFeatureBannerDescriptionTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulFeatureBannerDescriptionTextNodeSysFilterInput>;
};

type contentfulFeatureBannerDescriptionTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulFeatureBannerDescriptionTextNodeFilterInput>;
};

type contentfulFeatureBannerDescriptionTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureBannerDescriptionTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulFeatureBannerDescriptionTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureBannerDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureBannerDescriptionTextNodeGroupConnection_distinctArgs = {
  field: contentfulFeatureBannerDescriptionTextNodeFieldSelector;
};


type contentfulFeatureBannerDescriptionTextNodeGroupConnection_groupArgs = {
  field: contentfulFeatureBannerDescriptionTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureBannerDescriptionTextNodeGroupConnection_maxArgs = {
  field: contentfulFeatureBannerDescriptionTextNodeFieldSelector;
};


type contentfulFeatureBannerDescriptionTextNodeGroupConnection_minArgs = {
  field: contentfulFeatureBannerDescriptionTextNodeFieldSelector;
};


type contentfulFeatureBannerDescriptionTextNodeGroupConnection_sumArgs = {
  field: contentfulFeatureBannerDescriptionTextNodeFieldSelector;
};

type contentfulFeatureBannerDescriptionTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<contentfulFeatureBannerDescriptionTextNodeSysSortInput>;
};

type contentfulFeatureBannerDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulFeatureBannerDescriptionTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureBannerDescriptionTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureBannerDescriptionTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureBannerTitleTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulFeatureBannerTitleTextNodeSys>;
  readonly title: Maybe<Scalars['String']>;
};

type contentfulFeatureBannerTitleTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureBannerTitleTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulFeatureBannerTitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureBannerTitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureBannerTitleTextNodeConnection_distinctArgs = {
  field: contentfulFeatureBannerTitleTextNodeFieldSelector;
};


type contentfulFeatureBannerTitleTextNodeConnection_groupArgs = {
  field: contentfulFeatureBannerTitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureBannerTitleTextNodeConnection_maxArgs = {
  field: contentfulFeatureBannerTitleTextNodeFieldSelector;
};


type contentfulFeatureBannerTitleTextNodeConnection_minArgs = {
  field: contentfulFeatureBannerTitleTextNodeFieldSelector;
};


type contentfulFeatureBannerTitleTextNodeConnection_sumArgs = {
  field: contentfulFeatureBannerTitleTextNodeFieldSelector;
};

type contentfulFeatureBannerTitleTextNodeEdge = {
  readonly next: Maybe<contentfulFeatureBannerTitleTextNode>;
  readonly node: contentfulFeatureBannerTitleTextNode;
  readonly previous: Maybe<contentfulFeatureBannerTitleTextNode>;
};

type contentfulFeatureBannerTitleTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<contentfulFeatureBannerTitleTextNodeSysFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureBannerTitleTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulFeatureBannerTitleTextNodeSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureBannerTitleTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulFeatureBannerTitleTextNodeFilterInput>;
};

type contentfulFeatureBannerTitleTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureBannerTitleTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulFeatureBannerTitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureBannerTitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureBannerTitleTextNodeGroupConnection_distinctArgs = {
  field: contentfulFeatureBannerTitleTextNodeFieldSelector;
};


type contentfulFeatureBannerTitleTextNodeGroupConnection_groupArgs = {
  field: contentfulFeatureBannerTitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureBannerTitleTextNodeGroupConnection_maxArgs = {
  field: contentfulFeatureBannerTitleTextNodeFieldSelector;
};


type contentfulFeatureBannerTitleTextNodeGroupConnection_minArgs = {
  field: contentfulFeatureBannerTitleTextNodeFieldSelector;
};


type contentfulFeatureBannerTitleTextNodeGroupConnection_sumArgs = {
  field: contentfulFeatureBannerTitleTextNodeFieldSelector;
};

type contentfulFeatureBannerTitleTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<contentfulFeatureBannerTitleTextNodeSysSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureBannerTitleTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulFeatureBannerTitleTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureBannerTitleTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureBannerTitleTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureCardDescriptionTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulFeatureCardDescriptionTextNodeSys>;
};

type contentfulFeatureCardDescriptionTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureCardDescriptionTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulFeatureCardDescriptionTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureCardDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureCardDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulFeatureCardDescriptionTextNodeFieldSelector;
};


type contentfulFeatureCardDescriptionTextNodeConnection_groupArgs = {
  field: contentfulFeatureCardDescriptionTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureCardDescriptionTextNodeConnection_maxArgs = {
  field: contentfulFeatureCardDescriptionTextNodeFieldSelector;
};


type contentfulFeatureCardDescriptionTextNodeConnection_minArgs = {
  field: contentfulFeatureCardDescriptionTextNodeFieldSelector;
};


type contentfulFeatureCardDescriptionTextNodeConnection_sumArgs = {
  field: contentfulFeatureCardDescriptionTextNodeFieldSelector;
};

type contentfulFeatureCardDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulFeatureCardDescriptionTextNode>;
  readonly node: contentfulFeatureCardDescriptionTextNode;
  readonly previous: Maybe<contentfulFeatureCardDescriptionTextNode>;
};

type contentfulFeatureCardDescriptionTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<contentfulFeatureCardDescriptionTextNodeSysFieldSelector>;
};

type contentfulFeatureCardDescriptionTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulFeatureCardDescriptionTextNodeSysFilterInput>;
};

type contentfulFeatureCardDescriptionTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulFeatureCardDescriptionTextNodeFilterInput>;
};

type contentfulFeatureCardDescriptionTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureCardDescriptionTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulFeatureCardDescriptionTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureCardDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureCardDescriptionTextNodeGroupConnection_distinctArgs = {
  field: contentfulFeatureCardDescriptionTextNodeFieldSelector;
};


type contentfulFeatureCardDescriptionTextNodeGroupConnection_groupArgs = {
  field: contentfulFeatureCardDescriptionTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureCardDescriptionTextNodeGroupConnection_maxArgs = {
  field: contentfulFeatureCardDescriptionTextNodeFieldSelector;
};


type contentfulFeatureCardDescriptionTextNodeGroupConnection_minArgs = {
  field: contentfulFeatureCardDescriptionTextNodeFieldSelector;
};


type contentfulFeatureCardDescriptionTextNodeGroupConnection_sumArgs = {
  field: contentfulFeatureCardDescriptionTextNodeFieldSelector;
};

type contentfulFeatureCardDescriptionTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<contentfulFeatureCardDescriptionTextNodeSysSortInput>;
};

type contentfulFeatureCardDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulFeatureCardDescriptionTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureCardDescriptionTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureCardDescriptionTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureCardTitleTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulFeatureCardTitleTextNodeSys>;
  readonly title: Maybe<Scalars['String']>;
};

type contentfulFeatureCardTitleTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureCardTitleTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulFeatureCardTitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureCardTitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureCardTitleTextNodeConnection_distinctArgs = {
  field: contentfulFeatureCardTitleTextNodeFieldSelector;
};


type contentfulFeatureCardTitleTextNodeConnection_groupArgs = {
  field: contentfulFeatureCardTitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureCardTitleTextNodeConnection_maxArgs = {
  field: contentfulFeatureCardTitleTextNodeFieldSelector;
};


type contentfulFeatureCardTitleTextNodeConnection_minArgs = {
  field: contentfulFeatureCardTitleTextNodeFieldSelector;
};


type contentfulFeatureCardTitleTextNodeConnection_sumArgs = {
  field: contentfulFeatureCardTitleTextNodeFieldSelector;
};

type contentfulFeatureCardTitleTextNodeEdge = {
  readonly next: Maybe<contentfulFeatureCardTitleTextNode>;
  readonly node: contentfulFeatureCardTitleTextNode;
  readonly previous: Maybe<contentfulFeatureCardTitleTextNode>;
};

type contentfulFeatureCardTitleTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<contentfulFeatureCardTitleTextNodeSysFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureCardTitleTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulFeatureCardTitleTextNodeSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureCardTitleTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulFeatureCardTitleTextNodeFilterInput>;
};

type contentfulFeatureCardTitleTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureCardTitleTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulFeatureCardTitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureCardTitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureCardTitleTextNodeGroupConnection_distinctArgs = {
  field: contentfulFeatureCardTitleTextNodeFieldSelector;
};


type contentfulFeatureCardTitleTextNodeGroupConnection_groupArgs = {
  field: contentfulFeatureCardTitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureCardTitleTextNodeGroupConnection_maxArgs = {
  field: contentfulFeatureCardTitleTextNodeFieldSelector;
};


type contentfulFeatureCardTitleTextNodeGroupConnection_minArgs = {
  field: contentfulFeatureCardTitleTextNodeFieldSelector;
};


type contentfulFeatureCardTitleTextNodeGroupConnection_sumArgs = {
  field: contentfulFeatureCardTitleTextNodeFieldSelector;
};

type contentfulFeatureCardTitleTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<contentfulFeatureCardTitleTextNodeSysSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureCardTitleTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulFeatureCardTitleTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureCardTitleTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureCardTitleTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureCardsTitleTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulFeatureCardsTitleTextNodeSys>;
  readonly title: Maybe<Scalars['String']>;
};

type contentfulFeatureCardsTitleTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureCardsTitleTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulFeatureCardsTitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureCardsTitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureCardsTitleTextNodeConnection_distinctArgs = {
  field: contentfulFeatureCardsTitleTextNodeFieldSelector;
};


type contentfulFeatureCardsTitleTextNodeConnection_groupArgs = {
  field: contentfulFeatureCardsTitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureCardsTitleTextNodeConnection_maxArgs = {
  field: contentfulFeatureCardsTitleTextNodeFieldSelector;
};


type contentfulFeatureCardsTitleTextNodeConnection_minArgs = {
  field: contentfulFeatureCardsTitleTextNodeFieldSelector;
};


type contentfulFeatureCardsTitleTextNodeConnection_sumArgs = {
  field: contentfulFeatureCardsTitleTextNodeFieldSelector;
};

type contentfulFeatureCardsTitleTextNodeEdge = {
  readonly next: Maybe<contentfulFeatureCardsTitleTextNode>;
  readonly node: contentfulFeatureCardsTitleTextNode;
  readonly previous: Maybe<contentfulFeatureCardsTitleTextNode>;
};

type contentfulFeatureCardsTitleTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<contentfulFeatureCardsTitleTextNodeSysFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureCardsTitleTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulFeatureCardsTitleTextNodeSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureCardsTitleTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulFeatureCardsTitleTextNodeFilterInput>;
};

type contentfulFeatureCardsTitleTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulFeatureCardsTitleTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulFeatureCardsTitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulFeatureCardsTitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulFeatureCardsTitleTextNodeGroupConnection_distinctArgs = {
  field: contentfulFeatureCardsTitleTextNodeFieldSelector;
};


type contentfulFeatureCardsTitleTextNodeGroupConnection_groupArgs = {
  field: contentfulFeatureCardsTitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulFeatureCardsTitleTextNodeGroupConnection_maxArgs = {
  field: contentfulFeatureCardsTitleTextNodeFieldSelector;
};


type contentfulFeatureCardsTitleTextNodeGroupConnection_minArgs = {
  field: contentfulFeatureCardsTitleTextNodeFieldSelector;
};


type contentfulFeatureCardsTitleTextNodeGroupConnection_sumArgs = {
  field: contentfulFeatureCardsTitleTextNodeFieldSelector;
};

type contentfulFeatureCardsTitleTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<contentfulFeatureCardsTitleTextNodeSysSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type contentfulFeatureCardsTitleTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulFeatureCardsTitleTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type contentfulFeatureCardsTitleTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulFeatureCardsTitleTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

type contentfulNetworksTitleTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulNetworksTitleTextNodeSys>;
  readonly title: Maybe<Scalars['String']>;
};

type contentfulNetworksTitleTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulNetworksTitleTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulNetworksTitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulNetworksTitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulNetworksTitleTextNodeConnection_distinctArgs = {
  field: contentfulNetworksTitleTextNodeFieldSelector;
};


type contentfulNetworksTitleTextNodeConnection_groupArgs = {
  field: contentfulNetworksTitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulNetworksTitleTextNodeConnection_maxArgs = {
  field: contentfulNetworksTitleTextNodeFieldSelector;
};


type contentfulNetworksTitleTextNodeConnection_minArgs = {
  field: contentfulNetworksTitleTextNodeFieldSelector;
};


type contentfulNetworksTitleTextNodeConnection_sumArgs = {
  field: contentfulNetworksTitleTextNodeFieldSelector;
};

type contentfulNetworksTitleTextNodeEdge = {
  readonly next: Maybe<contentfulNetworksTitleTextNode>;
  readonly node: contentfulNetworksTitleTextNode;
  readonly previous: Maybe<contentfulNetworksTitleTextNode>;
};

type contentfulNetworksTitleTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<contentfulNetworksTitleTextNodeSysFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type contentfulNetworksTitleTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulNetworksTitleTextNodeSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type contentfulNetworksTitleTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulNetworksTitleTextNodeFilterInput>;
};

type contentfulNetworksTitleTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulNetworksTitleTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulNetworksTitleTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulNetworksTitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulNetworksTitleTextNodeGroupConnection_distinctArgs = {
  field: contentfulNetworksTitleTextNodeFieldSelector;
};


type contentfulNetworksTitleTextNodeGroupConnection_groupArgs = {
  field: contentfulNetworksTitleTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type contentfulNetworksTitleTextNodeGroupConnection_maxArgs = {
  field: contentfulNetworksTitleTextNodeFieldSelector;
};


type contentfulNetworksTitleTextNodeGroupConnection_minArgs = {
  field: contentfulNetworksTitleTextNodeFieldSelector;
};


type contentfulNetworksTitleTextNodeGroupConnection_sumArgs = {
  field: contentfulNetworksTitleTextNodeFieldSelector;
};

type contentfulNetworksTitleTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<contentfulNetworksTitleTextNodeSysSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type contentfulNetworksTitleTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulNetworksTitleTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type contentfulNetworksTitleTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulNetworksTitleTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


type IndexPageQuery = { readonly contentfulPageData: { readonly title: string | null } | null, readonly contentfulHeader: { readonly logo: { readonly file: { readonly url: string | null } | null } | null } | null, readonly contentfulCoinBanner: { readonly title: string | null, readonly text1: string | null, readonly text2: string | null, readonly height: string | null, readonly background: { readonly file: { readonly url: string | null } | null } | null } | null, readonly contentfulFeatureBanner: { readonly title: { readonly title: string | null } | null, readonly description: { readonly description: string | null } | null, readonly image: { readonly file: { readonly url: string | null } | null } | null } | null, readonly contentfulFeatureBanner2: { readonly title: { readonly title: string | null } | null, readonly description: { readonly description: string | null } | null, readonly image: { readonly file: { readonly url: string | null } | null } | null } | null, readonly contentfulFeatureBanner3: { readonly title: { readonly title: string | null } | null, readonly description: { readonly description: string | null } | null, readonly image: { readonly file: { readonly url: string | null } | null } | null } | null, readonly contentfulBasicFeatureBanner: { readonly title: { readonly title: string | null } | null, readonly image: { readonly file: { readonly url: string | null } | null } | null } | null, readonly contentfulFeatureCards: { readonly title: { readonly title: string | null } | null, readonly cards: ReadonlyArray<{ readonly title: { readonly title: string | null } | null, readonly description: { readonly description: string | null } | null, readonly image: { readonly file: { readonly url: string | null } | null } | null } | null> | null } | null, readonly contentfulNetworks: { readonly buttonText: string | null, readonly title: { readonly title: string | null } | null, readonly plus: { readonly file: { readonly url: string | null } | null } | null, readonly networks: ReadonlyArray<{ readonly name: string | null, readonly ticket: string | null, readonly image: { readonly file: { readonly url: string | null } | null } | null } | null> | null } | null, readonly contentfulGlobalAssets: { readonly coinLogo: { readonly file: { readonly url: string | null } | null } | null } | null };


}
