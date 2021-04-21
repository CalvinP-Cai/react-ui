import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex="0" onSelect={ (index) => { console.log(index) } }>
          <MenuItem>menu1</MenuItem>
          <MenuItem disabled>menu2</MenuItem>
          <MenuItem>menu3</MenuItem>
          <MenuItem>menu4</MenuItem>
        </Menu>

        <Menu defaultIndex="0" mode="vertical" onSelect={ (index) => { console.log(index) } } style={{ marginLeft: '20px' }}>
          <MenuItem>menu1</MenuItem>
          <MenuItem disabled>menu2</MenuItem>
          <MenuItem >menu3</MenuItem>
          <MenuItem>menu4</MenuItem>
        </Menu>

        <Menu defaultIndex="0" onSelect={ (index) => { console.log(index) } }>
          <MenuItem>menu1</MenuItem>
          <MenuItem disabled>menu2</MenuItem>
          <SubMenu title="sunmenu">
            <MenuItem>sunmenu 1</MenuItem>
            <MenuItem>sunmenu 2</MenuItem>
          </SubMenu>
          <MenuItem>menu3</MenuItem>
        </Menu>

        <Menu defaultIndex="0" mode="vertical" onSelect={ (index) => { console.log(index) } } style={{ marginLeft: '20px' }} defaultOpenSubMenus={['2']}>
          <MenuItem>menu1</MenuItem>
          <MenuItem disabled>menu2</MenuItem>
          <SubMenu title="sunmenu">
            <MenuItem>sunmenu 1</MenuItem>
            <MenuItem>sunmenu 2</MenuItem>
          </SubMenu>
          <MenuItem>menu3</MenuItem>
        </Menu>

        <Button onClick={ (e) => { console.log(e) } }> Hello </Button>
        <Button btnType={ ButtonType.Danger } size={ ButtonSize.Small }> Danger && Small </Button>
        <Button btnType={ ButtonType.Primary } size={ ButtonSize.Large }> Primary && Large </Button>
        <Button btnType={ ButtonType.Link } href="www.baidu.com"> Link </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
