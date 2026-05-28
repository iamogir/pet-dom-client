import Home from '../assert/icons/home.svg?react'
import HomeActive from '../assert/icons/home-filled.svg?react'
import Paw from '../assert/icons/pawBtn.svg?react'
import PawActive from '../assert/icons/paw-filled.svg?react'
import Profile from '../assert/icons/profile.svg?react'
import ProfileActive from '../assert/icons/profile-filled.svg?react'
import Settings from '../assert/icons/settings.svg?react'
import SettingsActive from '../assert/icons/settings-filled.svg?react'

export const BASE_URL = import.meta.env.VITE_BASE_URL || '/api';

export const navItems = [
    {
        to: '/home',
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
        activeIcon: ProfileActive,
    },

    {
        to: '#',
        label: 'Settings',
        icon: Settings,
        activeIcon: SettingsActive,
    }
]