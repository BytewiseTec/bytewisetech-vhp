export interface Link {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  icon?: string;
  children?: Link[];
}