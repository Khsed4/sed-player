import React from 'react'
import './sidebar.css'
import profile from '../../images/IMG_1321.JPG'
import SideBarButton from './sideBarButton'
import {MdOutlineLibraryMusic} from 'react-icons/md'
import {SlFeed} from 'react-icons/sl'
import {FiTrendingUp} from 'react-icons/fi'
import {SiBbciplayer} from 'react-icons/si'
// import {GrFavorite} from 'react-icons/gr'
import {MdFavorite} from 'react-icons/md'
import {GoSignOut} from 'react-icons/go'

export default function Sidebar() {

    return (
        <div className='sidebar-cont'>
            <img
                src={profile}
                className='profile-image'
                alt="profile">

            </img>
            <div>
                <SideBarButton title="Feed" to="/feed" icon= {<SlFeed/>} />
                <SideBarButton  title="Trending" to="/trending" icon= {<FiTrendingUp/>} />
                <SideBarButton  title="Player" to="/player" icon= {<SiBbciplayer/>}/>
                <SideBarButton title="Favorite" to="/favorites" icon= {<MdFavorite/>} />
                <SideBarButton title="Library" to="/" icon= {<MdOutlineLibraryMusic/>} />


            </div>

            <SideBarButton title="Sign Out" to="/feed" icon= {<GoSignOut/>} />





        </div>
    )
}
