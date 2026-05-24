/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Page {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Contact = 'contact'
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  priceEstimate: number;
  iconName: string;
  features: string[];
}
