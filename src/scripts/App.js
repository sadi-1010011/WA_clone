import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ErrorScreen from '../screens/ErrorScreen';
// scripts and styles
// import '../scripts/NavbarOptionsToggle';

function App() {
    return(
        <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/settings" component={SettingsScreen} />
            <Route component={ErrorScreen} />
        </Switch>
    );
}

export default App;