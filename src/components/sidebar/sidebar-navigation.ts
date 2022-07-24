import { FilterIcon, QrcodeIcon, UserAddIcon, CogIcon, EyeIcon, CodeIcon } from '@heroicons/react/outline';

const userNavigation = (roles: Array<string>) => {
  const navigation = [
    { name: 'PPC-AI', href: 'ppc-ai', icon: CodeIcon, current: false, id: 'ppcai' },
    // { name: 'Analytics', href: '', icon: PresentationChartLineIcon, current: true, id: 'analytics' },
    { name: 'Funnels', href: 'funnels', icon: FilterIcon, current: false, id: 'funnels' },
    { name: 'Heat Maps', href: 'heatmaps', icon: EyeIcon, current: false, id: 'heatmaps' },
    { name: 'Redirect Links', href: 'magic-urls', icon: QrcodeIcon, current: false, id: 'magic-links' },
    { name: 'Link Account', href: 'amazon', icon: UserAddIcon, current: false, id: 'link-account' },
    { name: 'User Settings', href: 'settings', icon: CogIcon, current: false, id: 'settings' },
  ];

  return navigation.filter((item) => roles.includes(item.id) || roles.includes('*') || item.id === 'settings');
};

export default userNavigation;
