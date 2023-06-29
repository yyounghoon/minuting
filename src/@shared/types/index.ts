export interface GetMeInfoType {
  error: string;
  errors: Error[];
  value: MeData;
}

export interface Error {
  code: string;
  message: string;
}

export interface MeData {
  company: Company;
  memberType: string;
  name: string;
  spaceList: Space[];
  team: Team;
}

export interface Company {
  address: string;
  ceo: string;
  id: number;
  name: string;
  telNumber: string;
}

export interface Space {
  description: string;
  icon: string;
  id: number;
  isPublic: boolean;
  name: string;
  boardList: Board[];
}

export interface Board {
  id: number;
  name: string;
  orderNum: number;
}

export interface Team {
  id: number;
  name: string;
}

export type TPublicSpace = {
  error: {
    code: number;
    reason: string;
  };
  list: {
    description: string;
    icon: string;
    id: number;
    isJoined: boolean;
    isPublic: boolean;
    name: string;
  }[];
};

export type TSearchUser = {
  email: string;
  name: string;
  userId: string;
};
export type TSearchUserList = {
  error: {
    code: number;
    reason: string;
  };
  list: TSearchUser[];
};

export type TTagList = {
  error: {
    code: number;
    reason: string;
  };
  list: {
    color: string;
    id: number;
    name: string;
    orderNum: number;
    type: 'MINUTES' | 'SPACE';
  }[];
};

export type TTeamList = {
  error: {
    code: number;
    reason: string;
  };
  list: {
    id: number;
    name: string;
    pid: number;
  }[];
};
