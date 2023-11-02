export type SVGAttributes = React.SVGProps<SVGSVGElement>;

export type INavItem = {
  label: string;
  to: string;
};

export type INavItemProps = {
  // subMenu?: INavItem[];
  subMenu?: any[];
} & INavItem;

export type IButtonProps = {
  onClick?: (e: React.ChangeEvent<HTMLButtonElement>) => void;
  border?: string;
  font?: string;
  bg?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
} & React.HTMLAttributes<HTMLElement>;

export type IResourceCardProps = {
  image: any;
  badge: string;
  badge_color: string;
  title: string;
};
export type IntroCardProps = {
  header: string;
  name: string;
  role: string;
  company: string;
  feature: string;
  description: string;
  content: string;
  color:string;
  key:number
};
export type IReviewCardProps = {
  header: string;
  content1: string;
  content2?: string;
  name: string;
  role: string;
  pos: string;
  color:string;
};
export type ISpotCardProps = {
  logo: string;
  content: string;
  color:string;
};
export type IDiscoverCardProps = {
  title: string;
  description: string;
  avatar: string;
  name: string;
  role: string;
};

export type IFeatureCard = {
  image: any;
  title: string;
  subtitle: string;
};

export type IFAQCollapseProps = {
  title: string;
  desc: string;
  onClick: () => void;
  open: boolean;
};

export type IInputProps = {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTextAreaChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  name?: string;
  placeholder?: string;
};

export type ISelectProps = {
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  label?: string;
  options: { label: string; value: string | number }[];
};

export type ISeoProps = {
  title?: string;
  description?: string;
  image?: string;
};

export type IStepper = {
  steps: { label: string }[];
  activeStep: number;
};
