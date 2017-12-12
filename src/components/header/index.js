import React, { Component } from 'react';
import './index.css';
import FlatButton from 'material-ui/FlatButton';
import Link from '../link';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Divider from 'material-ui/Divider';
import Dimensions from 'react-dimensions';

class Header extends Component {
    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle style={{paddingLeft: "15px"}} text={this.props.title} />
                </ToolbarGroup>
                {(window.innerWidth < 768) ?
                    <ToolbarGroup>
                        <IconMenu
                            iconButtonElement={
                            <IconButton touch={true}>
                                <MenuIcon />
                            </IconButton>
                            }>
                            <Link filter="Home">
                                <MenuItem primaryText="Home" />
                            </Link>
                            <Link filter="Art">
                                <MenuItem primaryText="Art" />
                            </Link>
                            <Link filter="Blog">
                                <MenuItem primaryText="Blog" />
                            </Link>
                            <Link filter="About">
                                <MenuItem primaryText="About" />
                            </Link>
                            <Link filter="Contact">
                                <MenuItem primaryText="Contact" />
                            </Link>
                            <Divider />
                            {(this.props.isLoggedIn) ?
                                <Link filter="Logout">
                                    <MenuItem primaryText="Logout" />
                                </Link>
                            :
                                <Link filter="Login">
                                    <MenuItem primaryText="Login" />
                                </Link>
                            }
                        </IconMenu>
                    </ToolbarGroup>

                :
                    <ToolbarGroup>
                        <Link filter="Home">
                            <FlatButton label="Home"/>
                        </Link>
                        <Link filter="Art">
                            <FlatButton label="Art"/>
                        </Link>
                        <Link filter="Blog">
                            <FlatButton label="Blog"/>
                        </Link>
                        <Link filter="About">
                            <FlatButton label="About"/>
                        </Link>
                        <Link filter="Contact">
                            <FlatButton label="Contact"/>
                        </Link>
                        <ToolbarSeparator />
                        {(this.props.isLoggedIn) ?
                            <Link filter="Logout">
                                <FlatButton label="Logout"/>
                            </Link>
                        :
                            <Link filter="Login">
                                <FlatButton label="Login"/>
                            </Link>
                        }
                    </ToolbarGroup>
                }
        </Toolbar>
        );
    }
}

const options = {
    className: "auto-height"
}

export default Dimensions(options)(Header);
