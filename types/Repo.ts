export type Repo = {
  id: number;
  name: string;
  topics: string[];
  description: string;
  homepage: string;
  html_url: string;
  owner: {
    html_url: string;
  };
};
