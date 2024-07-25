export interface IUser {
  _id?: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  isActive: boolean;
  avatar?: string;
  memo?: string;
}

export interface IGameCategory {
  _id?: string;
  name: string;
  description: string;
  enabled: boolean;
  creatorId?: string;
  modifierId?: string;
}

export interface IGamePlatform {
  _id?: string;
  name: string;
  description: string;
  enabled: boolean;
  creatorId?: string;
  modifierId?: string;
}

export interface IGame {
  _id?: string;

  enabled: boolean;

  category?: string | IGameCategory;
  platform?: string | IGamePlatform;

  title: string;
  shortTitle?: string;
  promotional: string;
  description: string;
  history?: string;
  gamers: number;
  releaseDate?: string;
  availableLanguages: string[];
  players?: string;
  price: number;
  downloadLink: string;

  banner: string;
  splash: string;
  logos: string[];
  thumbnail: string;
  screenshots: string[];

  overview: {
    title: string;
    description: string;
    characters: {
      thumbnail: string;
      title: string;
      description?: string;
    }[];
  };

  features: {
    thumbnail: string;
    title: string;
    description: string;
  }[];

  story: {
    title: string;
    description: string;
  };

  videos: {
    thumbnail: string;
    title: string;
    src: string;
  }[];

  credits: string;

  creatorId?: string;
  modifierId?: string;
}

export interface IJobSkill {
  _id?: string;
  name: string;
  description?: string;
  enabled: boolean;
  creatorId?: string;
  modifierId?: string;
}

export interface IJobDatabase {
  _id?: string;
  name: string;
  description?: string;
  enabled: boolean;
  creatorId?: string;
  modifierId?: string;
}

export interface IJobGodot {
  _id?: string;
  name: string;
  description?: string;
  enabled: boolean;
  creatorId?: string;
  modifierId?: string;
}

export interface IJobExperience {
  _id?: string;
  name: string;
  description?: string;
  enabled: boolean;
  creatorId?: string;
  modifierId?: string;
}

export interface IJobPeriod {
  _id?: string;
  name: string;
  description?: string;
  enabled: boolean;
  creatorId?: string;
  modifierId?: string;
}

export interface IJobScope {
  _id?: string;
  name: string;
  description?: string;
  enabled: boolean;
  creatorId?: string;
  modifierId?: string;
}

export interface IJobBudget {
  _id?: string;
  fixedMin: string;
  fixedMax: string;
  rateMin: string;
  rateMax: string;
  creatorId?: string;
  modifierId?: string;
}

export interface IJob {
  _id?: string;

  title: string;
  skills: IJobSkill[];
  godots: IJobGodot[];
  databases: IJobDatabase[];
  scope: IJobScope;
  period: IJobPeriod;
  experience: IJobExperience;
  budget: {
    mode: string;
    from: number;
    to: number;
  };
  location: {
    mode: string;
    region?: string;
  };

  creatorId?: string;
  modifierId?: string;
}

export interface IBlogCategory {
  _id?: string;
  name: string;
  description: string;
  enabled: boolean;
  creatorId?: string;
  modifierId?: string;
}

export interface IBlog {
  _id?: string;

  enabled: boolean;

  category?: string | IBlogCategory;
  game?: string | IGame;

  title: string;
  description: string;
  thumbnail: {
    small: string;
    large: string;
  };

  features: {
    title: string;
    thumbnail: string;
    items: string[];
  }[];

  details: string;
  screenshots: string[];

  creatorId?: string;
  modifierId?: string;
}

export interface IService {
  _id?: string;
  thumbnail: File | string;
  title: string;
  description: string;
  enabled: boolean;
  creatorId?: string;
  modifierId?: string;
}

export interface IFaq {
  _id?: string;
  question: string;
  answer: string;
  enabled: boolean;
  creatorId?: string;
  modifierId?: string;
}

export interface ITeamMember {
  _id?: string;
  avatar: string;
  firstName: string;
  lastName: string;
  position: string;
  enabled: boolean;
  memo?: string;
  creatorId?: string;
  modifierId?: string;
}

export interface ICommunityJoiner {
  _id?: string;
  email: string;
  creatorId?: string;
  modifierId?: string;
}

export interface IFeedback {
  _id?: string;
  fullName: string;
  email: string;
  message: string;
  from: string;
  link: string;
  isRead: boolean;
  creatorId?: string;
  modifierId?: string;
}

export interface IDataRequest {
  _id?: string;
  data: string;
  availableAt: string;
  creator: IUser;
  createdAt: string;
}

export interface ICookieConsent {
  _id?: string;
  description: string;
  acceptLabel: string;
  declineLabel: string;
  position: string;
  creatorId?: string;
  modifierId?: string;
}
