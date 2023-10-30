export type IPagesProps = {
  id: string;
  name?: string;
  key?: string;
};

export type ISolutionFeatureLandingArrayProps = {
  title?: string;
  description?: string;
  page?: any;
};

export type ISolutionFeatureGridDataProps = {
  image?: any;
  description?: string;
  title?: string;
  page?: any;
};

export type ISolutionFeatureTableDataProps = {
  data?: string[];
  page?: string;
};

export type ISolutionFeatureStreamlineDataProps = {
  title?: string;
  description?: string;
  image?: any;
  page?: string;
};

export type ISolutionFeatureProps = {
  landing_subtitle?: string;
  landing_title?: string;
  landing_description?: string;
  landing_image?: any;
  stream_title?: string;
  stream_description?: string;
  table_title?: string;
  landing_arrays?: ISolutionFeatureLandingArrayProps[];
  grid_data?: ISolutionFeatureGridDataProps[];
  stream_data?: ISolutionFeatureStreamlineDataProps[];
  table_data?: ISolutionFeatureTableDataProps;
  page?: IPagesProps;
}[];
