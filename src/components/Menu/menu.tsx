import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<MenuProps> = ({
  className,
  mode,
  style,
  children,
  onSelect,
  defaultIndex,
  defaultOpenSubMenus
}) => {

  const classes = classNames('c-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  const [currentActive, setCurrentActive] = useState(defaultIndex)

  const handleClickItem = (index: string) => {
    setCurrentActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }


  const passedContext : IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClickItem,
    mode: mode,
    defaultOpenSubMenus
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: `${index}`
        })
      } else {
        console.error('Warning: Menu has a child which is not MenuItem component');
      }
    })
  }


  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        { renderChildren() }
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}

export default Menu