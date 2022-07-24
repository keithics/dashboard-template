import React from 'react';

export interface SidebarInterface {
  name: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  href: string;
  current: boolean;
}

export interface SidebarStatusInterface {
  isOpen: boolean;
}
