import Home from '../assert/icons/home.svg'
import HomeActive from '../assert/icons/home-filled.svg'
import Paw from '../assert/icons/pawBtn.svg'
import PawActive from '../assert/icons/paw-filled.svg'
import Profile from '../assert/icons/profile.svg'
import ProgileActive from '../assert/icons/profile-filled.svg'
import Settings from '../assert/icons/settings.svg'
import SettingsActive from '../assert/icons/settings-filled.svg'

export const BASE_URL = import.meta.env.VITE_BASE_URL || '/api';

export const navItems = [
    {
        to: '/',
        label: 'Home',
        icon: Home,
        activeIcon: HomeActive,
    },

    {
        to: '/my_pets',
        label: 'My Pets',
        icon: Paw,
        activeIcon: PawActive,
    },

    {
        to: '/user/me',
        label: 'My Profile',
        icon: Profile,
        activeIcon: ProgileActive,
    },

    {
        to: '#',
        label: 'Settings',
        icon: Settings,
        activeIcon: SettingsActive,
    }
]