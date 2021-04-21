import React, { FunctionComponentElement, useContext, useState } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  className,
  children
}) => {
  const context = useContext(MenuContext)

  const openedSubMenus = context.defaultOpenSubMenus as Array<string>

  const isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false

  const [menuOpen, setMenuOpen] = useState(isOpend)

  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })


  const renderChildren = () => {
    const subMenuClasses = classNames('c-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error('Warning: Menu has a child which is not MenuItem component');
      }
    })
    return (
      <ul className={ subMenuClasses }>
        { childrenComponent }
      </ul>
    )
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 300)
  }

  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  }: {}

  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
  }: {}

  return (
    <li key={index} className={classes} { ...hoverEvents }>
      <div className="submenu-title" { ...clickEvents }>
        {title}
      </div>
      {renderChildren()}
    </li> 
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu