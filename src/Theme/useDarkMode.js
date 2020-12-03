import React from 'react'

class useDarkMode extends React.Component {
    state = {
        theme: 'light'
    }

    setMode = mode => {
         window.localStorage.setItem('theme', mode)
         this.setState({ theme: mode})
    }

    themeToggler = () => {
        this.state.theme === 'light' ? this.setMode('dark') : this.setMode('light')
    }

    componentDidUpdate() {
        const localTheme = window.localStorage.getItem('theme')
        localTheme && this.setState({ theme: localTheme})
    }
    
    // return ( theme, this.ThemeToggler)

}

export default useDarkMode