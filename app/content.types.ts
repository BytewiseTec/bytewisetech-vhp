export type ListItem = {
  id?: string;
  title?: string;
  description?: string;
  children?: ListItem[];
  icon?: string;
  href?: string;
};

export type EntryId = {
  sys: {
    id: string;
  }
}

export type Media = {
  url: string;
  width: number;
  height: number;
  contentType: 'image/jpeg' | 'image/png';
  title: string;
  description: string;
}

export type Config = {
  thumbnailBgColor?: string;
}