export type MarketingBanner = {
  '500': string;
  '700': string;
  '1242': string;
  '2500': string;
  '2500Blur': string;
  '1242Blur': string;
  '700Blur': string;
  '500Blur': string;
};

export type MarketingData<DataType> = {
  _id: string;
  type: string;
  data: DataType;
  createdAt: string;
  updatedAt: string;
};
