import React from 'react'
import {Icon} from '@iconify/react'
import LocationIcon from '@iconify/icons-mdi/fire-alert'


function Header() {
    return (
        <header className="header">
            <h1><Icon icon={LocationIcon} />Wildlife Tracker (Powered By NASA)</h1>
        </header>
    )
}

export default Header
